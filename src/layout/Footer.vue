<template>
	<footer class="bg-black text-white">
		<div class="px-8 py-14 md:py-16 md:px-10 lg:px-40 bg-black">
			<div class="flex flex-col md:flex-row md:justify-between">
				<!-- Left Section: Logo, Social Links -->
				<div class="flex flex-col md:flex-row gap-0 md:gap-[109px]">
					<div
						class="flex flex-col items-center justify-between md:items-start space-y-8"
					>
						<!-- Logo -->
						<div class="md:mb-[72px] lg:mb-0">
							<img
								src="@/assets/images/shared/desktop/logo-white.svg"
								alt="Photosnap Logo"
								class="h-4"
							/>

							<div class="hidden md:block lg:hidden mt-8">
								<nav class="flex items-center md:items-start gap-7">
									<router-link
										v-for="link in navLinks"
										:key="link.path"
										:to="link.path"
										class="text-h4 uppercase tracking-wider hover:opacity-50 duration-500 transition-all"
									>
										{{ link.name }}
									</router-link>
								</nav>
							</div>
						</div>

						<!-- Social Links -->

						<div class="flex space-x-4 mt-8 md:mt-[72px] lg:mt-0">
							<a href="#" class="group">
								<img
									src="@/assets/images/shared/desktop/facebook-white.svg"
									alt="Facebook"
									class="group-hover:hidden"
								/>
								<img
									src="@/assets/images/shared/desktop/facebook.svg"
									alt="Facebook"
									class="hidden group-hover:block"
								/>
							</a>
							<a href="#" class="group">
								<img
									src="@/assets/images/shared/desktop/youtube-white.svg"
									alt="YouTube"
									class="group-hover:hidden"
								/>
								<img
									src="@/assets/images/shared/desktop/youtube.svg"
									alt="YouTube"
									class="hidden group-hover:block"
								/>
							</a>
							<a href="#" class="group">
								<img
									src="@/assets/images/shared/desktop/twitter-white.svg"
									alt="Twitter"
									class="group-hover:hidden"
								/>
								<img
									src="@/assets/images/shared/desktop/twitter.svg"
									alt="Twitter"
									class="hidden group-hover:block"
								/>
							</a>
							<a href="#" class="group">
								<img
									src="@/assets/images/shared/desktop/pinterest-white.svg"
									alt="Pinterest"
									class="group-hover:hidden"
								/>
								<img
									src="@/assets/images/shared/desktop/pinterest.svg"
									alt="Pinterest"
									class="hidden group-hover:block"
								/>
							</a>
							<a href="#" class="group">
								<img
									src="@/assets/images/shared/desktop/instagram-white.svg"
									alt="Instagram"
									class="group-hover:hidden"
								/>
								<img
									src="@/assets/images/shared/desktop/instagram.svg"
									alt="Instagram"
									class="hidden group-hover:block"
								/>
							</a>
						</div>
					</div>

					<!-- Middle Section: Navigation Links -->
					<div class="mt-12 block md:mt-0 md:hidden lg:block">
						<nav class="flex flex-col items-center md:items-start gap-5">
							<router-link
								v-for="link in navLinks"
								:key="link.path"
								:to="link.path"
								class="text-h4 uppercase tracking-wider hover:opacity-50 duration-500 transition-all"
							>
								{{ link.name }}
							</router-link>
						</nav>
					</div>
				</div>

				<!-- Right Section: CTA and Copyright -->
				<div
					class="mt-[112px] md:mt-0 flex flex-col items-center justify-between md:items-end space-y-8"
				>
					<OutlineButton :isDark="false" text="Get an invite" />

					<p class="text-white opacity-50 text-body font-normal">
						Copyright {{ new Date().getFullYear() }}. All Rights Reserved
					</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
import OutlineButton from "../components/ui/OutlineButton.vue";
const navLinks = [
	{ name: "Home", path: "/" },
	{ name: "Stories", path: "/stories" },
	{ name: "Features", path: "/features" },
	{ name: "Pricing", path: "/pricing" },
];
</script>
