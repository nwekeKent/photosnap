<template>
	<div>
		<PhotoDiv
			:images="{
				desktop: heroDesktop,
				tablet: heroTablet,
				mobile: heroMobile,
			}"
			imageAlt="Create and Share"
			title="Features"
			description="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
			:textDivDark="true"
			:hasButton="false"
		/>
	</div>

	<Perks />
	<Beta />
</template>

<script setup>
import PhotoDiv from "@/components/ui/PhotoDiv.vue";
import heroDesktop from "@/assets/images/features/desktop/hero.jpg";
import heroTablet from "@/assets/images/features/tablet/hero.jpg";
import heroMobile from "@/assets/images/features/mobile/hero.jpg";
import Perks from "@/components/features/Perks.vue";
import Beta from "@/components/ui/Beta.vue";
</script>
