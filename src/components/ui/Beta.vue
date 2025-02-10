<template>
	<div class="relative border-l-[6px] border-main-accent">
		<!-- Background Image Container -->
		<div class="absolute inset-0">
			<picture>
				<source
					:srcset="betaDesktop"
					media="(min-width: 1024px)"
					class="w-full h-full"
				/>
				<source
					:srcset="betaTablet"
					media="(min-width: 768px)"
					class="w-full h-full"
				/>
				<img :src="betaMobile" alt="Beta" class="w-full h-full object-cover" />
			</picture>
		</div>

		<!-- Gradient Overlay -->
		<div class="absolute inset-0 bg-black/30"></div>

		<!-- Content -->
		<div class="relative py-[68px] px-8 md:px-10 lg:px-[165px]">
			<div class="flex flex-col md:flex-row md:justify-between md:items-center">
				<h1
					class="text-h1-mobile md:text-h1-desktop text-white uppercase font-bold max-w-[400px] mb-6 md:mb-0"
				>
					We're in Beta. Get your invite today!
				</h1>
				<OutlineButton :isDark="false" text="Get an invite" />
			</div>
		</div>
	</div>
</template>

<script setup>
import OutlineButton from "./OutlineButton.vue";
import betaDesktop from "@/assets/images/shared/desktop/bg-beta.jpg";
import betaTablet from "@/assets/images/shared/tablet/bg-beta.jpg";
import betaMobile from "@/assets/images/shared/mobile/bg-beta.jpg";
</script>
