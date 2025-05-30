import { ref } from "vue";

export const useImageOptimization = () => {
	const isImageLoaded = ref(false);

	const optimizeImage = src => {
		// Add loading="lazy" for images below the fold
		return {
			src,
			loading: "lazy",
			onload: () => {
				isImageLoaded.value = true;
			},
		};
	};

	return {
		isImageLoaded,
		optimizeImage,
	};
};
