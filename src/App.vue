<template>
	<MainLayout>
		<router-view></router-view>
	</MainLayout>
</template>

<script setup>
import MainLayout from "./layout/MainLayout.vue";
import { onMounted } from "vue";
import { preloadImages } from "./utils/preloadImages";

const criticalImages = [
	// Hero images
	"/src/assets/images/hero/hero-1.jpg",
	"/src/assets/images/hero/hero-2.jpg",
	"/src/assets/images/hero/hero-3.jpg",

	// Logo and branding
	"/src/assets/images/logo.svg",
	"/src/assets/images/logo-dark.svg",

	// Navigation icons
	"/src/assets/images/icons/menu.svg",
	"/src/assets/images/icons/close.svg",

	// Social media icons
	"/src/assets/images/icons/facebook.svg",
	"/src/assets/images/icons/instagram.svg",
	"/src/assets/images/icons/twitter.svg",
	"/src/assets/images/icons/youtube.svg",
	"/src/assets/images/icons/pinterest.svg",

	// Feature images
	"/src/assets/images/features/feature-1.jpg",
	"/src/assets/images/features/feature-2.jpg",
	"/src/assets/images/features/feature-3.jpg",

	// Gallery images
	"/src/assets/images/gallery/gallery-1.jpg",
	"/src/assets/images/gallery/gallery-2.jpg",
	"/src/assets/images/gallery/gallery-3.jpg",
	"/src/assets/images/gallery/gallery-4.jpg",
	"/src/assets/images/gallery/gallery-5.jpg",
	"/src/assets/images/gallery/gallery-6.jpg",
];

onMounted(() => {
	preloadImages(criticalImages);
});
</script>
