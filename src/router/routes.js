import Home from "@/views/Home.vue";
import Stories from "@/views/Stories.vue";
import Features from "@/views/Features.vue";
import Pricing from "@/views/Pricing.vue";

export default [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/stories",
		name: "Stories",
		component: Stories,
	},
	{
		path: "/features",
		name: "Features",
		component: Features,
	},
	{
		path: "/pricing",
		name: "Pricing",
		component: Pricing,
	},
];
