<script lang="ts">
	import * as d3 from 'd3';
	import MagnetSection from '../components/MagnetSection.svelte';
	import { flare, type StackNode } from '../flare';
	import { onMount } from 'svelte';
	import type { HierarchyNode } from 'd3';

	let sectionWidth: undefined | number = undefined;
	let sectionHeight: undefined | number = undefined;

	onMount(() => {
		const chart = Pack(flare, {
			value: (d) => Math.random(), // size of each node (file); null for internal nodes (folders)
			label: (d) => d.name,
			// link: (d, n) => d.href,
			width: sectionWidth,
			height: sectionHeight
		});

		if (chart) document.getElementById('ciao')?.appendChild(chart);

		/*

	D3 layouts assume the input data is an array of objects (json-y)
	if no value property is assigned, it looks for .value
	*/
		function Pack<T extends StackNode>(
			data: T, // data is either tabular (array of objects) or hierarchy (nested objects)ù
			{
				value, // given a node d, returns a quantitative value (for area encoding; null for count)
				sort, // how to sort nodes prior to layout
				label, // given a leaf node d, returns the display name
				width = 640, // outer width, in pixels
				height = 400, // outer height, in pixels
				margin = 1, // shorthand for margins
				marginTop = margin, // top margin, in pixels
				marginRight = margin, // right margin, in pixels
				marginBottom = margin, // bottom margin, in pixels
				marginLeft = margin, // left margin, in pixels
				padding = 3, // separation between circles
				fill = 'orange', // fill for leaf circles
				fillOpacity = 1, // fill opacity for leaf circles
				stroke, // stroke for internal circles
				strokeWidth = 1, // stroke width for internal circles
				strokeOpacity = 1 // stroke opacity for internal circles
			}: {
				value: (d: T) => number;
				sort?: (a: HierarchyNode<T>, b: HierarchyNode<T>) => number;
				label: (d: T) => string;
				width: number;
				height: number;
				margin?: number;
				marginTop?: number; // top margin, in pixels
				marginRight?: number; // right margin, in pixels
				marginBottom?: number; // bottom margin, in pixels
				marginLeft?: number; // left margin, in pixels
				padding?: number; // separation between circles
				fill?: string; // fill for leaf circles
				fillOpacity?: number; // fill opacity for leaf circles
				stroke?: string; // stroke for internal circles
				strokeWidth?: number; // stroke width for internal circles
				strokeOpacity?: number; // stroke opacity for internal circles
			}
		) {
			// If id and parentId options are specified, or the path option, use d3.stratify
			// to convert tabular data to a hierarchy; otherwise we assume that the data is
			// specified as an object {children} with nested objects (a.k.a. the “flare.json”
			// format), and use d3.hierarchy.
			const root = d3.hierarchy(data);

			// Compute the values of internal nodes by aggregating from the leaves.
			value == null ? root.count() : root.sum((d) => Math.max(0, value(d)));
			console.log(`value`, value);
			// Compute labels and titles.
			const descendants = root.descendants();
			const leaves = descendants.filter((d) => !d.children);
			leaves.forEach((d: any, i) => (d.index = i));
			const L = label == null ? null : leaves.map((d) => label(d.data));

			// Sort the leaves (typically by descending value for a pleasing layout).
			if (sort != null) root.sort(sort);

			// Compute the layout.
			d3
				.pack()
				.size([width - marginLeft - marginRight, height - marginTop - marginBottom])
				.padding(padding)(root);

			const svg = d3
				.create('svg')
				.attr('viewBox', [-marginLeft, -marginTop, width, height])
				.attr('width', width)
				.attr('height', height)
				.attr('style', 'max-width: 100%; height: auto; height: intrinsic;')
				.attr('font-family', 'sans-serif')
				.attr('font-size', 10)
				.attr('text-anchor', 'middle');

			const node = svg
				.selectAll('a')
				.data(descendants)
				.join('a')
				.attr('xlink:href', (d: any, i) => d.data.href)
				.attr('target', '_blank')
				.attr('transform', (d: any) => `translate(${d.x},${d.y})`);

			node
				.append('circle')
				.attr('fill', (d) => (d.children ? '' : fill))
				.attr('fill-opacity', (d) => (d.children ? null : fillOpacity))
				.attr('stroke', (d) => (d.children ? stroke : null))
				.attr('stroke-width', (d) => (d.children ? strokeWidth : null))
				.attr('stroke-opacity', (d) => (d.children ? strokeOpacity : null))
				.attr('r', (d: any) => d.r);

			if (L) {
				// A unique identifier for clip paths (to avoid conflicts).
				// const uid = `O-${Math.random().toString(16).slice(2)}`;
				const leaf = node.filter((d: any) => !d.children && d.r > 10 && L[d.index] != null);

				const IMAGE_WIDTH = 60;

				leaf
					.append('image')
					.attr('href', (d) => d.data.imgSrc)
					.attr('width', (d) => `${IMAGE_WIDTH}`)
					.attr('height', (d) => `${IMAGE_WIDTH}`)
					.attr('transform', (d) => `translate(${-IMAGE_WIDTH / 2},${-20})`);

				leaf
					.append('clipPath')
					// .attr('id', (d) => `${uid}-clip-${d.index}`)
					.append('circle');
				// .attr('r', (d: any) => d.r);

				leaf
					.append('text')
					.selectAll('tspan')
					.data((d: any) => `${L[d.index]}`.split(/\n/g))
					.join('tspan')
					// .attr("x", 0)
					.attr('y', (d, i, D) => '-25')
					.attr('font-size', (d, i, D) => '12px')
					.text((d) => d);
			}

			return svg.node();
		}
	});
</script>

<MagnetSection>
	<div
		id="ciao"
		style="width:100%;height:100%"
		bind:clientHeight={sectionHeight}
		bind:clientWidth={sectionWidth}
	>
		{sectionWidth}
	</div>
</MagnetSection>
