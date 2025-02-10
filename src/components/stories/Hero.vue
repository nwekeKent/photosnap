<template>
	<div
		class="flex items-center py-12 px-[30px] relative min-h-[317px] md:min-h-[650px] md:py-[122px] md:px-10 lg:px-[112px]"
	>
		<!-- Background Image Container -->
		<div class="absolute inset-0">
			<picture>
				<source
					:srcset="moonDesktop"
					media="(min-width: 1024px)"
					class="w-full h-full"
				/>
				<source
					:srcset="moonTablet"
					media="(min-width: 768px)"
					class="w-full h-full"
				/>
				<img :src="moonMobile" alt="Hero" class="w-full h-full object-cover" />
			</picture>
		</div>

		<div class="absolute w-full left-0 top-0 h-full bg-black opacity-30"></div>

		<!-- Overlay and Content -->
		<div class="relative">
			<div class="flex items-center">
				<div class="text-white max-w-[318px] md:max-w-[387px] lg:max-w-[400px]">
					<p class="text-h4 uppercase mb-6">Last month's featured story</p>
					<h1 class="text-h1-mobile md:text-h1-desktop uppercase font-bold">
						Hazy full
					</h1>
					<h1 class="text-h1-mobile md:text-h1-desktop uppercase font-bold">
						moon of
					</h1>
					<h1
						class="text-h1-mobile md:text-h1-desktop uppercase font-bold mb-4"
					>
						Appalachia
					</h1>
					<div class="flex items-center gap-2 text-sm mb-6">
						<span class="opacity-75">March 2nd 2020</span>
						<span>by John Appleseed</span>
					</div>
					<p class="text-body opacity-60 mb-6">
						The dissected plateau area, while not actually made up of geological
						mountains, is popularly called "mountains," especially in eastern
						Kentucky and West Virginia, and while the ridges are not high, the
						terrain is extremely rugged.
					</p>
					<OutlineButton :isDark="false" text="Read the story" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import OutlineButton from "@/components/ui/OutlineButton.vue";
import moonDesktop from "@/assets/images/stories/desktop/moon-of-appalacia.jpg";
import moonTablet from "@/assets/images/stories/tablet/moon-of-appalacia.jpg";
import moonMobile from "@/assets/images/stories/mobile/moon-of-appalacia.jpg";
</script>
