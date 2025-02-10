<template>
	<button
		:class="[
			'text-h4 uppercase px-6 py-3 transition-colors duration-[1000ms]',
			isDark
				? 'bg-black text-white hover:bg-light-grey hover:text-black'
				: 'bg-white text-black hover:bg-light-grey hover:text-black',
		]"
		v-bind="$attrs"
	>
		<slot>{{ text }}</slot>
	</button>
</template>

<script setup>
defineProps({
	isDark: {
		type: Boolean,
		default: true,
	},
	text: {
		type: String,
		default: "",
	},
});
</script>
