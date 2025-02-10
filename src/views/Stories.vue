<template>
	<div>
		<Hero />
		<Gallery :items="storyItems" />
	</div>
</template>

<script setup>
import Hero from "@/components/stories/Hero.vue";
import Gallery from "@/components/ui/Gallery.vue";
import Mountains from "@/assets/images/stories/desktop/mountains.jpg";
import Sunset from "@/assets/images/stories/desktop/cityscapes.jpg";
import Voyage from "@/assets/images/stories/desktop/18-days-voyage.jpg";
import Architecturals from "@/assets/images/stories/desktop/architecturals.jpg";
import Tour from "@/assets/images/stories/desktop/world-tour.jpg";
import Corners from "@/assets/images/stories/desktop/unforeseen-corners.jpg";
import Africa from "@/assets/images/stories/desktop/king-on-africa.jpg";
import Nowhere from "@/assets/images/stories/desktop/trip-to-nowhere.jpg";
import Rage from "@/assets/images/stories/desktop/rage-of-the-sea.jpg";
import Running from "@/assets/images/stories/desktop/running-free.jpg";
import Wave from "@/assets/images/stories/desktop/behind-the-waves.jpg";
import Waters from "@/assets/images/stories/desktop/calm-waters.jpg";
import Milky from "@/assets/images/stories/desktop/milky-way.jpg";
import Forest from "@/assets/images/stories/desktop/dark-forest.jpg";
import Beauty from "@/assets/images/stories/desktop/somwarpet.jpg";
import Dreams from "@/assets/images/stories/desktop/land-of-dreams.jpg";

const storyItems = [
	{
		date: "March 2nd 2020",
		image: Mountains,
		title: "The Mountains",
		author: "John Appleseed",
	},
	{
		date: "April 11th 2020",
		image: Sunset,
		title: "Sunset Cityscapes",
		author: "Benjamin Cruz",
	},
	{
		date: "April 11th 2020",
		image: Voyage,
		title: "18 Days Voyage",
		author: "Alexei Borodin",
	},
	{
		date: "April 9th 2020",
		image: Architecturals,
		title: "Architecturals",
		author: "Samantha Brooke",
	},
	{
		date: "April 11th 2020",
		image: Tour,
		title: "World Tour 2019",
		author: "Timothy Wagner",
	},
	{
		date: "April 3rd 2020",
		image: Corners,
		title: "Unseen Corners of Croatia",
		author: "William Malcolm",
	},
	{
		date: "March 29th 2020",
		image: Africa,
		title: "King on Africa: Part II",
		author: "Samantha Brooke",
	},

	{
		date: "March 21st 2020",
		image: Nowhere,
		title: "The Trip to Nowhere",
		author: "Felicia Rourke",
	},

	{
		date: "March 19th 2020",
		image: Rage,
		title: "Rage of The Sea",
		author: "Mohammed Abdul",
	},
	{
		date: "March 16th 2020",
		image: Running,
		title: "Running Free",
		author: "Michelle",
	},
	{
		date: "March 11th 2020",
		image: Wave,
		title: "Behind the Waves",
		author: "Lamarr Wilson",
	},
	{
		date: "March 9th 2020",
		image: Waters,
		title: "Calm Waters",
		author: "Samantha Brooke",
	},
	{
		date: "March 5th 2020",
		image: Milky,
		title: "The Milky Way",
		author: "Benjamin Cruz",
	},
	{
		date: "March 4th 2020",
		image: Forest,
		title: "Night at The Dark Forest",
		author: "Mohammed Abdul",
	},
	{
		date: "March 1st 2020",
		image: Beauty,
		title: "Somwarpet’s Beauty",
		author: "Michelle",
	},
	{
		date: "February 15th 2020",
		image: Dreams,
		title: "Land of Dreams",
		author: "William Malcolm",
	},
];
</script>
