export const INFINITY_TO_LEFT = (width) => `@keyframes infinite-carousel {
	0% {
		transform: translateX(0%);
	}
	100% {
		transform: translateX(${(width + 26) * -1}px);
	}
}`;

export const INFINITY_TO_RIGHT = (width) => `@keyframes infinite-carousel {
	100% {
		transform: translateX(0%);
	}
	0% {
		transform: translateX(${(width + 26) * -1}px);
	}
}`;
