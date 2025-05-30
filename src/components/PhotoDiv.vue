<template>
	<div class="photo-div">
		<OptimizedImage
			:src="imageSrc"
			:alt="alt"
			class="w-full h-full object-cover"
		/>
		<!-- rest of your component -->
	</div>
</template>

<script setup>
import OptimizedImage from "./common/OptimizedImage.vue";
// ... rest of your script
</script>
