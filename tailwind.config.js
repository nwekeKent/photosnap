/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["DM Sans", "sans-serif"],
			},
			colors: {
				black: "#000",
				white: "#fff",
				"light-grey": "#dfdfdf",
			},
			fontSize: {
				"h1-desktop": ["40px", { lineHeight: "48px", letterSpacing: "4.17px" }],
				"h1-mobile": ["32px", { lineHeight: "40px", letterSpacing: "3.33px" }],
				"h2-desktop": ["24px", { lineHeight: "30px" }],
				h3: ["18px", { lineHeight: "25px" }],
				h4: ["12px", { lineHeight: "16px", letterSpacing: "2px" }],
				body: ["15px", { lineHeight: "25px" }],
			},
			animation: {
				loading: "loading 1.5s ease-in-out infinite",
			},
			keyframes: {
				loading: {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(200%)" },
				},
			},
		},
		backgroundImage: {
			"main-accent":
				"linear-gradient(27deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%)",
		},
	},
	plugins: [],
};
