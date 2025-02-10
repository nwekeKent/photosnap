<template>
	<div>
		<!-- Create and Share Section -->
		<PhotoDiv
			:images="{
				desktop: createAndShareDesktop,
				tablet: createAndShareTablet,
				mobile: createAndShareMobile,
			}"
			imageAlt="Create and Share"
			title="Create and share your photo stories"
			description="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
			:textDivDark="true"
		/>

		<!-- Beautiful Stories Section -->
		<PhotoDiv
			:images="{
				desktop: beautifulStoriesDesktop,
				tablet: beautifulStoriesTablet,
				mobile: beautifulStoriesMobile,
			}"
			imageAlt="Beautiful Stories"
			title="Beautiful stories every time"
			description="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks."
			:isReversed="true"
		/>

		<!-- Designed for Everyone Section -->
		<PhotoDiv
			:images="{
				desktop: designedForEveryoneDesktop,
				tablet: designedForEveryoneTablet,
				mobile: designedForEveryoneMobile,
			}"
			imageAlt="Designed for Everyone"
			title="Designed for everyone"
			description="Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses, and more."
		/>
		<!-- Gallery Section -->
		<Gallery :items="galleryItems" />

		<!-- Perks Section -->
		<Perks />
	</div>
</template>

<script setup>
import PhotoDiv from "@/components/ui/PhotoDiv.vue";
// Desktop Images
import createAndShareDesktop from "@/assets/images/home/desktop/create-and-share.jpg";
import beautifulStoriesDesktop from "@/assets/images/home/desktop/beautiful-stories.jpg";
import designedForEveryoneDesktop from "@/assets/images/home/desktop/designed-for-everyone.jpg";

// Tablet Images
import createAndShareTablet from "@/assets/images/home/tablet/create-and-share.jpg";
import beautifulStoriesTablet from "@/assets/images/home/tablet/beautiful-stories.jpg";
import designedForEveryoneTablet from "@/assets/images/home/tablet/designed-for-everyone.jpg";

// Mobile Images
import createAndShareMobile from "@/assets/images/home/mobile/create-and-share.jpg";
import beautifulStoriesMobile from "@/assets/images/home/mobile/beautiful-stories.jpg";
import designedForEveryoneMobile from "@/assets/images/home/mobile/designed-for-everyone.jpg";

import Perks from "@/components/home/Perks.vue";
import Gallery from "@/components/ui/Gallery.vue";

import Mountains from "@/assets/images/stories/desktop/mountains.jpg";
import Sunset from "@/assets/images/stories/desktop/cityscapes.jpg";
import Voyage from "@/assets/images/stories/desktop/18-days-voyage.jpg";
import Architecturals from "@/assets/images/stories/desktop/architecturals.jpg";

const galleryItems = [
	{
		image: Mountains,
		title: "The Mountains",
		author: "John Appleseed",
	},
	{
		image: Sunset,
		title: "Sunset Cityscapes",
		author: "Benjamin Cruz",
	},
	{
		image: Voyage,
		title: "18 Days Voyage",
		author: "Alexei Borodin",
	},
	{
		image: Architecturals,
		title: "Architecturals",
		author: "Samantha Brooke",
	},
];
</script>
