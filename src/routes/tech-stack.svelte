<script lang="ts">
	import { onMount } from 'svelte';
	import { updateTotalPages } from '../stores/pageCursor';
	import MagnetSection from '../components/MagnetSection.svelte';
	import Card from '../components/Card.svelte';

	const STACKS: { name: string; technologies: { name: string; imgSrc: string; href: string }[] }[] =
		[
			{
				name: 'Frontend',
				technologies: [
					{
						name: 'React',
						imgSrc: 'https://cdn.svgporn.com/logos/react.svg',
						href: 'https://reactjs.org/'
					},
					{
						name: 'Svelte',
						imgSrc: 'https://cdn.svgporn.com/logos/svelte-icon.svg',
						href: 'https://kit.svelte.dev/'
					},
					{
						name: 'HUGO',
						imgSrc: 'https://cdn.svgporn.com/logos/hugo.svg',
						href: 'https://gohugo.io/'
					}
				]
			},
			{
				name: 'Backend',
				technologies: [
					{
						name: 'Go',
						imgSrc: 'https://cdn.svgporn.com/logos/go.svg',
						href: 'https://go.dev/'
					},
					{
						name: 'Kubernetes',
						imgSrc: 'https://cdn.svgporn.com/logos/kubernetes.svg',
						href: 'https://kubernetes.io/it/'
					},
					{
						name: 'Firebase',
						imgSrc: 'https://cdn.svgporn.com/logos/firebase.svg',
						href: 'https://www.firebase.com/'
					}
				]
			},
			{
				name: 'To infinity and beyond',
				technologies: [
					{
						name: 'Flutter',
						imgSrc: 'https://cdn.svgporn.com/logos/flutter.svg',
						href: 'https://flutter.dev/'
					},
					{
						name: 'ML/AI',
						imgSrc: 'https://cdn.svgporn.com/logos/tensorflow.svg',
						href: ''
					},
					{
						name: 'Rust',
						imgSrc: 'https://cdn.svgporn.com/logos/rust.svg',
						href: 'https://www.rust-lang.org/it'
					}
				]
			}
		];

	onMount(() => updateTotalPages(1));
</script>

<MagnetSection class="hidden md:block">
	<div class="grid grid-cols-3 h-full gap-6 p-4">
		{#each STACKS as { name, technologies }}
			<div class="h-full w-full flex flex-col py-4 px-2 gap-2">
				<h2 class="text-primary text-center text-4xl font-semi-bold">{name}</h2>
				<div class="flex-1 flex flex-col justify-around gap-6 items-center">
					{#each technologies as { name: techName, imgSrc, href }}
						<Card class="w-full lg:w-5/6 xl:w-2/3">
							<a {href} target="_blank" class={`flex gap-4 p-6 items-center justify-center w-full`}>
								<h4 class="text-2xl">
									{techName}
								</h4>
								<img src={imgSrc} alt={techName} class="w-16 h-16" />
							</a>
						</Card>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</MagnetSection>

{#each STACKS as { name, technologies }}
	<MagnetSection class="md:hidden">
		<div class="h-full w-full flex flex-col py-4 px-8">
			<h2 class="text-primary text-center text-4xl font-semi-bold mb-4"><b>{name}</b></h2>
			<div class="flex-1 flex flex-col justify-around items-center gap-6">
				{#each technologies as { name: techName, imgSrc, href }}
					<Card class="w-full lg:w-5/6 xl:w-2/3">
						<a {href} target="_blank" class={`flex gap-6 p-2 items-center justify-center w-full`}>
							<h4 class="text-xl sm:text-2xl">
								{techName}
							</h4>
							<img src={imgSrc} alt={techName} class="w-20 h-20" />
						</a>
					</Card>
				{/each}
			</div>
		</div>
	</MagnetSection>
{/each}
