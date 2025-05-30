<template>
	<div class="py-[120px] px-7 md:px-10 lg:px-[165px]">
		<!-- Toggle Switch -->
		<div class="flex justify-center items-center gap-8 mb-12">
			<span :class="['text-lg', !isYearly ? 'text-black' : 'text-black/50']">
				Monthly
			</span>
			<button
				@click="togglePlan"
				class="relative w-[64px] h-8 bg-light-grey rounded-full p-1 transition-colors duration-200"
			>
				<div
					:class="[
						'w-6 h-6 bg-black rounded-full transition-transform duration-200 transform',
						isYearly ? 'translate-x-[32px]' : 'translate-x-0',
					]"
				></div>
			</button>
			<span :class="['text-lg', isYearly ? 'text-black' : 'text-black/50']">
				Yearly
			</span>
		</div>

		<!-- Pricing Cards -->
		<div class="flex flex-col lg:flex-row items-center gap-8">
			<!-- Basic Plan -->
			<div
				class="text-center bg-b items-center flex flex-col md:flex-row md:justify-between lg:flex-col w-full md:text-left py-14 px-8 bg-light-grey md:even:py-[88px] md:even:bg-black md:even:text-white"
			>
				<div class="max-w-[270px] text-center md:text-left lg:text-center">
					<h2 class="text-h2-desktop font-bold mb-4">Basic</h2>
					<p class="text-body opacity-60 mb-10">
						Includes basic usage of our platform. Recommended for new and
						aspiring photographers.
					</p>

					<button
						class="w-full py-3 bg-black text-white hidden md:block lg:hidden md:even:bg-white md:even:text-black text-h4 uppercase hover:bg-light-grey hover:text-black transition-colors duration-200"
					>
						Pick Plan
					</button>
				</div>

				<div class="mb-10 text-center md:text-left lg:text-center">
					<p class="text-h1-desktop font-bold">
						{{ isYearly ? "$190.00" : "$19.00" }}
					</p>
					<p class="text-body opacity-60 md:text-right lg:text-center">
						per {{ isYearly ? "year" : "month" }}
					</p>
				</div>
				<button
					class="w-full py-3 block md:hidden bg-black text-white md:even:bg-white md:even:text-black text-h4 uppercase hover:bg-light-grey hover:text-black transition-colors duration-300 lg:block"
				>
					Pick Plan
				</button>
			</div>

			<!-- Pro Plan -->
			<div
				class="text-center items-center flex flex-col md:flex-row md:justify-between lg:flex-col w-full md:text-left lg:min-h-[470px] py-14 px-8 bg-black text-white relative before:absolute before:top-0 before:left-0 before:right-0 before:h-[6px] before:bg-main-accent"
			>
				<div class="max-w-[270px] text-center md:text-left lg:text-center">
					<h2 class="text-h2-desktop font-bold mb-4">Pro</h2>
					<p class="text-body opacity-60 mb-10">
						More advanced features available. Recommended for photography
						veterans and professionals.
					</p>

					<button
						class="w-full py-3 hidden md:block lg:hidden bg-white text-black text-h4 uppercase hover:bg-light-grey transition-colors duration-200"
					>
						Pick Plan
					</button>
				</div>

				<div class="mb-10 text-center">
					<p class="text-h1-desktop font-bold">
						{{ isYearly ? "$390.00" : "$39.00" }}
					</p>
					<p class="text-body opacity-60 md:text-right lg:text-center">
						per {{ isYearly ? "year" : "month" }}
					</p>
				</div>
				<button
					class="w-full py-3 block md:hidden lg:block bg-white text-black text-h4 uppercase hover:bg-light-grey transition-colors duration-200"
				>
					Pick Plan
				</button>
			</div>

			<!-- Business Plan -->
			<div
				class="text-center items-center flex flex-col md:flex-row md:justify-between lg:flex-col w-full md:text-left py-14 px-8 bg-light-grey md:even:py-[88px] md:even:bg-black md:even:text-white"
			>
				<div class="max-w-[270px] text-center md:text-left lg:text-center">
					<h2 class="text-h2-desktop font-bold mb-4">Business</h2>
					<p class="text-body opacity-60 mb-10">
						Additional features available such as more detailed metrics.
						Recommended for business owners.
					</p>

					<button
						class="w-full py-3 bg-black text-white hidden md:block lg:hidden md:even:bg-white md:even:text-black text-h4 uppercase hover:bg-light-grey hover:text-black transition-colors duration-200"
					>
						Pick Plan
					</button>
				</div>

				<div class="mb-10 text-center">
					<p class="text-h1-desktop font-bold">
						{{ isYearly ? "$990.00" : "$90.00" }}
					</p>
					<p class="text-body opacity-60 md:text-right lg:text-center">
						per {{ isYearly ? "year" : "month" }}
					</p>
				</div>
				<button
					class="w-full py-3 block md:hidden bg-black text-white md:even:bg-white md:even:text-black text-h4 uppercase hover:bg-light-grey hover:text-black transition-colors duration-300 lg:block"
				>
					Pick Plan
				</button>
			</div>
		</div>

		<ComparisonTable />
	</div>
</template>

<script setup>
import { ref } from "vue";
import ComparisonTable from "./ComparisonTable.vue";

const isYearly = ref(false);

const togglePlan = () => {
	isYearly.value = !isYearly.value;
};
</script>
