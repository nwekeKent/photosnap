<template>
	<button
		:class="[
			'text-h4 uppercase hover:underline flex items-center gap-4 font-bold',
			isDark ? 'text-black' : ' text-white',
		]"
		v-bind="$attrs"
	>
		<slot>{{ text }}</slot>
		<img :src="arrowSrc" alt="Arrow" class="h-3 ml-4" />
	</button>
</template>

<script setup>
import { computed } from "vue";
import darkArrow from "@/assets/images/shared/desktop/arrow.svg";
import whiteArrow from "@/assets/images/shared/desktop/arrow-white.svg";

const props = defineProps({
	isDark: {
		type: Boolean,
		default: true,
	},
	text: {
		type: String,
		default: "",
	},
});

const arrowSrc = computed(() => (props.isDark ? darkArrow : whiteArrow));
</script>
