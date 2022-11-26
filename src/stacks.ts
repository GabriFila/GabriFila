export const STACKS: {
  name: string;
  technologies: { name: string; imgSrc: string; href: string }[];
}[] = [
  {
    name: 'Frontend',
    technologies: [
      {
        name: 'React',
        imgSrc: 'https://cdn.svgporn.com/logos/react.svg',
        href: 'https://reactjs.org/',
      },
      {
        name: 'Svelte',
        imgSrc: 'https://cdn.svgporn.com/logos/svelte-icon.svg',
        href: 'https://kit.svelte.dev/',
      },
      {
        name: 'HUGO',
        imgSrc: 'https://cdn.svgporn.com/logos/hugo.svg',
        href: 'https://gohugo.io/',
      },
    ],
  },
  {
    name: 'Backend',
    technologies: [
      {
        name: 'Go',
        imgSrc: 'https://cdn.svgporn.com/logos/go.svg',
        href: 'https://go.dev/',
      },
      {
        name: 'Kubernetes',
        imgSrc: 'https://cdn.svgporn.com/logos/kubernetes.svg',
        href: 'https://kubernetes.io/it/',
      },
      {
        name: 'Firebase',
        imgSrc: 'https://cdn.svgporn.com/logos/firebase.svg',
        href: 'https://www.firebase.com/',
      },
    ],
  },
  {
    name: "Can't wait to learn",
    technologies: [
      {
        name: 'Flutter',
        imgSrc: 'https://cdn.svgporn.com/logos/flutter.svg',
        href: 'https://flutter.dev/',
      },
      {
        name: 'ML/AI',
        imgSrc: 'https://cdn.svgporn.com/logos/tensorflow.svg',
        href: '',
      },
      {
        name: 'Rust',
        imgSrc: 'https://cdn.svgporn.com/logos/rust.svg',
        href: 'https://www.rust-lang.org/it',
      },
    ],
  },
];
