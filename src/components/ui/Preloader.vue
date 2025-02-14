<template>
	<div
		v-show="isLoading"
		class="fixed inset-0 bg-black z-50 transition-opacity duration-500"
		:class="isLoading ? 'opacity-100' : 'opacity-0'"
	>
		<div class="h-full flex items-center justify-center">
			<div class="relative w-24 h-3">
				<div
					class="absolute top-0 mt-1 w-16 h-1 rounded-full bg-main-accent animate-loading"
				></div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const isLoading = ref(false);
const router = useRouter();

const startLoading = () => {
	isLoading.value = true;
};

const endLoading = () => {
	isLoading.value = false;
};

onMounted(() => {
	router.beforeEach((to, from, next) => {
		startLoading();
		next();
	});

	router.afterEach(() => {
		setTimeout(endLoading, 500); // Add a small delay for smoother transition
	});
});
</script>

<style>
@keyframes loading {
	0% {
		transform: translateX(-100%);
	}
	100% {
		transform: translateX(200%);
	}
}

.animate-loading {
	animation: loading 1.5s ease-in-out infinite;
}
</style>
