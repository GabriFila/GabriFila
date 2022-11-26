export type StackNode = {
	name: string;
	size: number;
	imgSrc: string;
	href: string;
	children?: StackNode[];
};

export const flare: StackNode = {
	name: 'flare',
	size: 1,
	imgSrc: '',
	href: '',
	children: [
		{
			name: 'React',
			size: 1,
			imgSrc: 'https://cdn.svgporn.com/logos/kubernetes.svg',
			href: 'https://www.youtube.com'
		},
		{
			name: 'Angular',
			size: 1,
			imgSrc: 'https://cdn.svgporn.com/logos/kubernetes.svg',
			href: 'https://www.youtube.com'
		},
		{
			name: 'Vue',
			size: 1,
			imgSrc: 'https://cdn.svgporn.com/logos/kubernetes.svg',
			href: 'https://www.youtube.com'
		},
		{
			name: 'Kuberentes',
			size: 1,
			imgSrc: 'https://cdn.svgporn.com/logos/kubernetes.svg',
			href: 'https://www.youtube.com'
		},
		{
			name: 'Docker',
			size: 1,
			imgSrc: 'https://cdn.svgporn.com/logos/kubernetes.svg',
			href: 'https://www.youtube.com'
		},
		{
			name: 'Firebase',
			size: 1,
			imgSrc: 'https://cdn.svgporn.com/logos/kubernetes.svg',
			href: 'https://www.youtube.com'
		},
		{
			name: 'HUGO',
			size: 1,
			imgSrc: 'https://cdn.svgporn.com/logos/kubernetes.svg',
			href: 'https://www.youtube.com'
		},
		{
			name: 'Golang',
			size: 1,
			imgSrc: 'https://cdn.svgporn.com/logos/kubernetes.svg',
			href: 'https://www.youtube.com'
		}
	]
};
