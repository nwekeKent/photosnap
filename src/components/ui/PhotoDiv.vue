<template>
	<div
		:class="[
			'flex  flex-col-reverse',
			isReversed ? 'md:flex-row-reverse' : 'md:flex-row',
		]"
	>
		<div
			:class="[
				'py-[72px]  md:py-[173px] flex items-center  lg:max-w-[610px] relative  md:max-w-[496px]',
				textDivDark ? 'bg-black text-white' : 'bg-white text-black',
			]"
		>
			<div
				v-if="textDivDark"
				class="h-[6px] w-[128px] bg-main-accent z-10 absolute top-0 left-8 md:hidden"
			></div>

			<div class="relative flex flex-col px-8 lg:px-28 md:px-14">
				<div
					v-if="textDivDark"
					class="bg-main-accent z-10 absolute top-0 h-full w-[6px] left-0 md:block hidden"
				></div>

				<slot>
					<h1
						v-if="title"
						class="mb-5 uppercase text-h1-mobile md:text-h1-desktop font-bold text-start"
					>
						{{ title }}
					</h1>
					<p v-if="description" class="text-body opacity-60">
						{{ description }}
					</p>

					<div v-if="hasButton" class="mt-6 md:mt-12">
						<OutlineButton
							:isDark="!textDivDark"
							:text="buttonText"
							class="hover:underline"
						/>
					</div>
				</slot>
			</div>
		</div>

		<div :class="['relative md:col-span-2 w-full']">
			<picture>
				<source :srcset="images.desktop" media="(min-width: 1024px)" />
				<source :srcset="images.tablet" media="(min-width: 768px)" />
				<img
					:src="images.mobile"
					:alt="imageAlt"
					class="w-full lg:w-full md:h-full h-full object-cover"
				/>
			</picture>
		</div>
	</div>
</template>

<script setup>
import OutlineButton from "./OutlineButton.vue";

defineProps({
	images: {
		type: Object,
		required: true,
		validator: value => {
			return (
				value.desktop &&
				value.tablet &&
				value.mobile &&
				typeof value.desktop === "string" &&
				typeof value.tablet === "string" &&
				typeof value.mobile === "string"
			);
		},
	},
	textDivDark: {
		type: Boolean,
		default: false,
	},
	imageAlt: {
		type: String,
		default: "",
	},
	title: {
		type: String,
		default: "",
	},
	description: {
		type: String,
		default: "",
	},
	buttonText: {
		type: String,
		default: "Get an invite",
	},
	hasButton: {
		type: Boolean,
		default: true,
	},
	isReversed: {
		type: Boolean,
		default: false,
	},
});
</script>
