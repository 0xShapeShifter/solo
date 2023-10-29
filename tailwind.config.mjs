/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				suisse: ["SuisseIntl-Book"],
			  },
		},
		backgroundImage: {
			"gradient": "linear-gradient(to top right, #0052D4, #4364F7, #6FB1FC)"
		},
	},
	plugins: [],
}
