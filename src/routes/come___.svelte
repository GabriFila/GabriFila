<script lang="ts">
	import type { QuadtreeLeaf } from 'd3';
	import * as d3 from 'd3';
	import MagnetSection from 'src/components/MagnetSection.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		var maxRadius = 32, // maximum radius of circle
			padding = 10, // padding between circles; also minimum radius
			margin = { top: -maxRadius, right: -maxRadius, bottom: -maxRadius, left: -maxRadius },
			width = 960 - margin.left - margin.right,
			height = 500 - margin.top - margin.bottom;

		let numberOfCandidates = 1, // initial number of candidates to consider per circle
			circlesToAddPerFrame = 1, // initial number of circles to add per frame
			remainingCirclesToAdd = 30; // remaining number of circles to add

		let newCircle = bestCircleGenerator(maxRadius, padding);

		var svg = d3
			.select('#come')
			.append('svg')
			.attr('width', width)
			.attr('height', height)
			.append('g')
			.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

		d3.interval(function () {
			for (var i = 0; i < circlesToAddPerFrame && --remainingCirclesToAdd >= 0; ++i) {
				const circle = newCircle(numberOfCandidates);
				if (circle)
					svg
						.append('circle')
						.attr('cx', circle[0])
						.attr('cy', circle[1])
						.attr('r', 0)
						.style('fill-opacity', (Math.random() + 0.5) / 2)
						.transition()
						.attr('r', circle[2]);

				// As we add more circles, generate more candidates per circle.
				// Since this takes more effort, gradually reduce circles per frame.
				if (numberOfCandidates < 500) {
					numberOfCandidates *= 1.01;
					circlesToAddPerFrame *= 0.998;
				}
			}
			return !remainingCirclesToAdd;
		}, 150);

		function bestCircleGenerator(maxRadius: number, padding: number) {
			const quadtree = d3.quadtree().extent([
					[0, 0],
					[width, height]
				]),
				searchRadius = maxRadius * 2,
				maxRadius2 = maxRadius * maxRadius;

			return function (k: number) {
				let bestX = 0;
				let bestY = 0;
				let bestDistance = 0;

				for (let i = 0; i < k || bestDistance < padding; ++i) {
					var x = Math.random() * width,
						y = Math.random() * height,
						rx1 = x - searchRadius,
						rx2 = x + searchRadius,
						ry1 = y - searchRadius,
						ry2 = y + searchRadius,
						minDistance = maxRadius; // minimum distance for this candidate

					quadtree.visit(function (quad, x1, y1, x2, y2) {
						console.log(`quad`, quad);

						const p = (quad as QuadtreeLeaf<[number, number]>).point;
						if (p) {
							console.log('adasd');
							let dx = x - p[0];
							let dy = y - p[1];
							let d2 = dx * dx + dy * dy;
							let r2 = p[2] * p[2];
							if (d2 < r2) return (minDistance = 0), true; // within a circle
							var d = Math.sqrt(d2) - p[2];
							if (d < minDistance) minDistance = d;
						}
						return !minDistance || x1 > rx2 || x2 < rx1 || y1 > ry2 || y2 < ry1; // or outside search radius
					});

					if (minDistance > bestDistance) {
						bestX = x;
						bestY = y;
						bestDistance = minDistance;
					}
				}

				const best = [bestX, bestY, bestDistance - padding];
				quadtree.add(best);
				return best;
			};
		}
	});
</script>

<MagnetSection>
	<div id="come" style="background-color: pink;" />
</MagnetSection>
