<template>
	<div class="image-container" :class="{ 'is-loaded': isLoaded }">
		<img
			v-bind="$attrs"
			:src="src"
			:alt="alt"
			:loading="loading"
			@load="handleImageLoad"
			class="optimized-image"
		/>
		<div v-if="!isLoaded" class="image-placeholder">
			<div class="loading-spinner"></div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
	src: {
		type: String,
		required: true,
	},
	alt: {
		type: String,
		default: "",
	},
	loading: {
		type: String,
		default: "lazy",
	},
});

const isLoaded = ref(false);

const handleImageLoad = () => {
	isLoaded.value = true;
};
</script>

<style scoped>
.image-container {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
}

.optimized-image {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: opacity 0.3s ease;
}

.image-placeholder {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #f3f4f6;
	display: flex;
	align-items: center;
	justify-content: center;
}

.loading-spinner {
	width: 40px;
	height: 40px;
	border: 3px solid #e5e7eb;
	border-top-color: #3b82f6;
	border-radius: 50%;
	animation: spin 1s linear infinite;
}

@keyframes spin {
	to {
		transform: rotate(360deg);
	}
}

.is-loaded .image-placeholder {
	display: none;
}
</style>
