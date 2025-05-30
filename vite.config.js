import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		imagetools({
			defaultDirectives: new URLSearchParams([
				["format", "webp"],
				["quality", "80"],
			]),
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ["vue", "vue-router"],
				},
			},
		},
		chunkSizeWarningLimit: 1000,
	},
});
