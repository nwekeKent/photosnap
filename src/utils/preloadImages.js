export const preloadImages = images => {
	images.forEach(src => {
		const img = new Image();
		img.src = src;
		img.onerror = () => {
			console.warn(`Failed to preload image: ${src}`);
		};
		img.onload = () => {
			console.log(`Successfully preloaded image: ${src}`);
		};
	});
};
