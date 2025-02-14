<template>
	<nav
		class="flex items-center justify-between px-6 h-[72px] md:px-10 lg:px-40"
	>
		<!-- Logo -->
		<div class="flex items-center">
			<router-link to="/">
				<img
					src="@/assets/images/shared/desktop/logo.svg"
					alt="Photosnap Logo"
					class="h-4"
			/></router-link>
		</div>

		<!-- Navigation Links -->
		<div class="hidden md:flex items-center space-x-8">
			<router-link
				v-for="link in navLinks"
				:key="link.path"
				:to="link.path"
				class="text-h4 font-bold uppercase tracking-[2px] hover:text-light-grey cursor-pointer transition-colors duration-300"
			>
				{{ link.name }}
			</router-link>
		</div>

		<!-- CTA Button -->
		<BaseButton text="Get an invite" class="hidden md:block" />

		<!-- Mobile Menu Button -->
		<button class="md:hidden" @click="toggleMobileMenu">
			<img :src="isMobileMenuOpen ? Close : Hamburger" alt="Menu" class="h-4" />
		</button>

		<!-- Mobile Menu -->
		<transition
			enter-active-class="transition duration-300 ease-out"
			enter-from-class="transform -translate-y-full opacity-0"
			enter-to-class="transform translate-y-0 opacity-100"
			leave-active-class="transition duration-200 ease-in"
			leave-from-class="transform translate-y-0 opacity-100"
			leave-to-class="transform -translate-y-full opacity-0"
		>
			<div
				v-if="isMobileMenuOpen"
				class="absolute top-[72px] left-0 right-0 bg-white p-8 flex flex-col items-center space-y-5 md:hidden z-10 shadow-lg"
			>
				<router-link
					v-for="link in navLinks"
					:key="link.path"
					:to="link.path"
					class="text-h4 uppercase tracking-wider font-bold"
					@click="isMobileMenuOpen = false"
				>
					{{ link.name }}
				</router-link>
				<div class="w-full h-[1px] bg-black opacity-25"></div>
				<BaseButton text="Get an invite" class="w-full" />
			</div>
		</transition>
	</nav>
</template>

<script setup>
import { ref } from "vue";
import BaseButton from "../components/ui/BaseButton.vue";
import Hamburger from "@/assets/images/shared/mobile/menu.svg";
import Close from "@/assets/images/shared/mobile/close.svg";

const isMobileMenuOpen = ref(false);

const navLinks = [
	{ name: "Stories", path: "/stories" },
	{ name: "Features", path: "/features" },
	{ name: "Pricing", path: "/pricing" },
];

const toggleMobileMenu = () => {
	isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>
