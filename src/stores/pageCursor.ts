import { writable } from 'svelte/store';

const pageIdx = writable(0);
const totalPages = writable(0);

function setPageIdx(val: number) {
	pageIdx.set(val);
}

export const updateTotalPages = () => {
	console.log(
		`document.querySelectorAll('.page-card').length`,
		document.querySelectorAll('.page-card').length
	);
	totalPages.set(document.querySelectorAll('.page-card').length);
};

export { pageIdx, setPageIdx, totalPages };
