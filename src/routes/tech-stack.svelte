<script lang="ts">
	import { onMount } from 'svelte';
	import { updateTotalPages } from '../stores/pageCursor';
	import RecapSection from '../components/RecapSection.svelte';
	import MagnetSection from '../components/MagnetSection.svelte';
	import Card from '../components/Card.svelte';

	const STACKS: { name: string; technologies: { name: string; imgSrc: string }[] }[] = [
		{
			name: 'Frontend',
			technologies: [
				{
					name: 'React',
					imgSrc: 'https://cdn.svgporn.com/logos/react.svg'
				},
				{
					name: 'Svelte',
					imgSrc: 'https://cdn.svgporn.com/logos/svelte-icon.svg'
				},
				{
					name: 'HUGO',
					imgSrc: 'https://cdn.svgporn.com/logos/hugo.svg'
				}
			]
		},
		{
			name: 'Backend',
			technologies: [
				{
					name: 'Kubernetes',
					imgSrc: 'https://cdn.svgporn.com/logos/kubernetes.svg'
				},
				{
					name: 'Docker',
					imgSrc: 'https://cdn.svgporn.com/logos/docker-icon.svg'
				},
				{
					name: 'Firebase',
					imgSrc: 'https://cdn.svgporn.com/logos/firebase.svg'
				}
			]
		},
		{
			name: 'To infinity and beyond',
			technologies: [
				{
					name: 'Flutter',
					imgSrc: 'https://cdn.svgporn.com/logos/flutter.svg'
				},
				{
					name: 'ML/AI',
					imgSrc: 'https://cdn.svgporn.com/logos/tensorflow.svg'
				},
				{
					name: 'Rust',
					imgSrc: 'https://cdn.svgporn.com/logos/rust.svg'
				}
			]
		}
	];

	onMount(() => updateTotalPages(1));
</script>

<MagnetSection classes="hidden md:block">
	<div class="grid grid-cols-3 h-full gap-6 p-4">
		{#each STACKS as { name, technologies }}
			<div class="h-full w-full flex flex-col py-4 px-2">
				<h2 class="text-primary text-center text-4xl font-semi-bold">{name}</h2>
				<div class="flex-1 flex flex-col justify-around gap-6 items-center">
					{#each technologies as { name: techName, imgSrc }, i}
						<Card classes="w-full lg:w-5/6 xl:w-2/3">
							<div class={`flex gap-2 p-6 items-center justify-center w-full`}>
								<h4 class="text-2xl">
									{techName}
								</h4>
								<img src={imgSrc} alt={techName} class="w-20 h-20" />
							</div>
						</Card>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</MagnetSection>

{#each STACKS as { name, technologies }, i}
	<MagnetSection classes="md:hidden">
		<div class="h-full w-full flex flex-col py-4 px-8">
			<h2 class="text-primary text-center text-4xl font-semi-bold mb-4"><b>{name}</b></h2>
			<div class="flex-1 flex flex-col justify-around items-center gap-6">
				{#each technologies as { name: techName, imgSrc }, i}
					<Card classes="w-full lg:w-5/6 xl:w-2/3">
						<div class={`flex gap-6 p-2 items-center justify-center w-full`}>
							<h4 class="text-xl sm:text-2xl">
								{techName}
							</h4>
							<img src={imgSrc} alt={techName} class="w-20 h-20" />
						</div>
					</Card>
				{/each}
			</div>
		</div>
	</MagnetSection>
{/each}
