<template>
	<div
		class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 gap-y-14 md:gap-y-20 lg:gap-y-[100px] md:gap-x-20 lg:gap-x-[30px] bg-white text-black py-20 md:py-[120px] px-8 md:px-14 lg:px-[165px] items-center justify-items-center"
	>
		<div
			v-for="perk in perks"
			:key="perk.title"
			class="flex flex-col items-center text-center w-full max-w-[310px] md:max-w-[457px] lg:max-w-[350px]"
		>
			<div class="h-[72px] mb-12"><img :src="perk.img" alt="perk" /></div>

			<h3 class="text-h3 font-bold mb-4">{{ perk.title }}</h3>
			<p class="text-body font-normal opacity-60">{{ perk.description }}</p>
		</div>
	</div>
</template>

<script setup>
import ResponsiveIcon from "@/assets/svg/responsive.svg";
import LimitIcon from "@/assets/svg/limit.svg";
import EmbedIcon from "@/assets/svg/embed.svg";
import DomainIcon from "@/assets/svg/domain.svg";
import ExposureIcon from "@/assets/svg/exposure.svg";
import DragDropIcon from "@/assets/svg/drop.svg";

const perks = [
	{
		title: "100% Responsive",
		description: `No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.`,
		img: ResponsiveIcon,
	},
	{
		title: "No Photo Upload Limit",
		description: `Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.`,
		img: LimitIcon,
	},
	{
		title: "Available to Embed",
		description: `Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. `,
		img: EmbedIcon,
	},
	{
		title: "Custom Domain",
		description: `With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding! `,
		img: DomainIcon,
	},
	{
		title: "Boost Your Exposure",
		description: `Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.`,
		img: ExposureIcon,
	},
	{
		title: "Drag & Drop Image",
		description: `Easily drag and drop your image and get beautiful shots everytime. No longer your unedited, low quality, right out of the camera shots.`,
		img: DragDropIcon,
	},
];
</script>
