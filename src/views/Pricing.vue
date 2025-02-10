<template>
	<div>
		<PhotoDiv
			:images="{
				desktop: heroDesktop,
				tablet: heroTablet,
				mobile: heroMobile,
			}"
			imageAlt="pricing"
			title="Pricing"
			description="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
			:textDivDark="true"
			:hasButton="false"
		/>
	</div>

	<PricingDiv />
	<Beta />
</template>

<script setup>
import PhotoDiv from "@/components/ui/PhotoDiv.vue";
import heroDesktop from "@/assets/images/pricing/desktop/hero.jpg";
import heroTablet from "@/assets/images/pricing/tablet/hero.jpg";
import heroMobile from "@/assets/images/pricing/mobile/hero.jpg";
import Beta from "../components/ui/Beta.vue";
import PricingDiv from "../components/pricing/PricingDiv.vue";
</script>
