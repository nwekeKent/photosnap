import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		// Always scroll to top when navigating
		return { top: 0 };
	},
});

export default router;
