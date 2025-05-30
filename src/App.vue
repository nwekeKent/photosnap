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
	"/images/hero/hero-1.jpg",
	"/images/hero/hero-2.jpg",
	"/images/hero/hero-3.jpg",

	// Logo and branding
	"/images/logo.svg",
	"/images/logo-dark.svg",

	// Navigation icons
	"/images/icons/menu.svg",
	"/images/icons/close.svg",

	// Social media icons
	"/images/icons/facebook.svg",
	"/images/icons/instagram.svg",
	"/images/icons/twitter.svg",
	"/images/icons/youtube.svg",
	"/images/icons/pinterest.svg",

	// Feature images
	"/images/features/feature-1.jpg",
	"/images/features/feature-2.jpg",
	"/images/features/feature-3.jpg",

	// Gallery images
	"/images/gallery/gallery-1.jpg",
	"/images/gallery/gallery-2.jpg",
	"/images/gallery/gallery-3.jpg",
	"/images/gallery/gallery-4.jpg",
	"/images/gallery/gallery-5.jpg",
	"/images/gallery/gallery-6.jpg",
];

onMounted(() => {
	preloadImages(criticalImages);
});
</script>
