<template>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
		<div
			v-for="(item, index) in items"
			:key="index"
			class="group relative cursor-pointer transition-transform duration-500 hover:-translate-y-5 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-[6px] hover:after:bg-main-accent"
		>
			<!-- Image -->
			<img
				:src="item.image"
				:alt="item.title"
				class="w-full h-[375px] md:h-[500px] object-cover"
			/>

			<!-- Gradient Overlay -->
			<div
				class="absolute inset-0 bg-black opacity-60 transition-all duration-300"
			></div>

			<!-- Content -->
			<div class="absolute bottom-0 left-0 right-0 p-10 text-white">
				<div class="">
					<p v-if="item.date" class="text-body mb-1">{{ item.date }}</p>
					<h3 class="text-h3 font-bold mb-1">{{ item.title }}</h3>
					<p class="text-xs font-normal mb-4">by {{ item.author }}</p>
					<div class="w-full mt-4 h-[1px] bg-white/25"></div>
					<div class="flex justify-between items-center mt-5">
						<a href="#" class="text-h4 font-bold uppercase hover:underline">
							Read Story
						</a>
						<img
							src="@/assets/images/shared/desktop/arrow-white.svg"
							alt="Arrow"
							class="h-3"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps({
	items: {
		type: Array,
		required: true,
		validator: value => {
			return value.every(
				item =>
					typeof item.image === "string" &&
					typeof item.title === "string" &&
					typeof item.author === "string" &&
					(item.date === undefined || typeof item.date === "string")
			);
		},
	},
});
</script>
