<template>
	<div class="mt-16 md:mt-[112px] lg:mt-[160px]">
		<h2
			class="text-h1-mobile md:text-h1-desktop text-center uppercase font-bold mb-14"
		>
			Compare
		</h2>

		<!-- Desktop/Tablet Table -->
		<div class="hidden md:block overflow-x-auto">
			<table class="w-full min-w-[500px] border-collapse">
				<thead>
					<tr class="border-b border-black/25 text-h4 font-bold uppercase">
						<th class="text-left pb-6">The Features</th>
						<th class="text-center pb-6">Basic</th>
						<th class="text-center pb-6">Pro</th>
						<th class="text-center pb-6">Business</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="feature in features"
						:key="feature.name"
						class="border-b border-black/25"
					>
						<td class="py-6 text-h4 font-bold uppercase">{{ feature.name }}</td>
						<td class="text-center py-6">
							<img
								v-if="feature.basic"
								src="@/assets/images/pricing/desktop/check.svg"
								alt="Included"
								class="inline-block"
							/>
						</td>
						<td class="text-center py-6">
							<img
								v-if="feature.pro"
								src="@/assets/images/pricing/desktop/check.svg"
								alt="Included"
								class="inline-block"
							/>
						</td>
						<td class="text-center py-6">
							<img
								v-if="feature.business"
								src="@/assets/images/pricing/desktop/check.svg"
								alt="Included"
								class="inline-block"
							/>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- Mobile Layout -->
		<div class="md:hidden">
			<div class="pb-4 border-b border-b-black mb-6">
				<h4 class="text-h4 font-bold uppercase">THE FEATURES</h4>
			</div>

			<div
				v-for="feature in features"
				:key="feature.name"
				class="border-b border-black/25 pb-6 mb-6"
			>
				<h3 class="text-h4 font-bold uppercase mb-4">{{ feature.name }}</h3>
				<div class="grid grid-cols-3 gap-4">
					<div class="text-left">
						<p class="text-[10px] text-black/50 font-bold mb-2">BASIC</p>
						<img
							v-if="feature.basic"
							src="@/assets/images/pricing/desktop/check.svg"
							alt="Included"
							class="inline-block"
						/>
					</div>
					<div class="text-left">
						<p class="text-[10px] text-black/50 font-bold mb-2">PRO</p>
						<img
							v-if="feature.pro"
							src="@/assets/images/pricing/desktop/check.svg"
							alt="Included"
							class="inline-block"
						/>
					</div>
					<div class="text-left">
						<p class="text-[10px] text-black/50 font-bold mb-2">BUSINESS</p>
						<img
							v-if="feature.business"
							src="@/assets/images/pricing/desktop/check.svg"
							alt="Included"
							class="inline-block"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const features = [
	{
		name: "Unlimited Story Posting",
		basic: true,
		pro: true,
		business: true,
	},
	{
		name: "Unlimited Photo Upload",
		basic: true,
		pro: true,
		business: true,
	},
	{
		name: "Embedding Custom Content",
		basic: false,
		pro: true,
		business: true,
	},
	{
		name: "Customize Metadata",
		basic: false,
		pro: true,
		business: true,
	},
	{
		name: "Advanced Metrics",
		basic: false,
		pro: false,
		business: true,
	},
	{
		name: "Photo Downloads",
		basic: false,
		pro: false,
		business: true,
	},
	{
		name: "Search Engine Indexing",
		basic: false,
		pro: false,
		business: true,
	},
	{
		name: "Custom Analytics",
		basic: false,
		pro: false,
		business: true,
	},
];
</script>
