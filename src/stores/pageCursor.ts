import { writable } from 'svelte/store';

const pageIdx = writable(0);
const totalPages = writable(0);

function setPageIdx(val: number) {
	pageIdx.set(val);
}

export const updateTotalPages = (fixedQt?: number) => {
	totalPages.set(fixedQt ?? document.querySelectorAll('.page-card').length);
};

export { pageIdx, setPageIdx, totalPages };
