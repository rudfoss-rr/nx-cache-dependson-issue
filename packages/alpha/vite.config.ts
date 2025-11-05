import { isBuiltin } from "node:module"
import path from "node:path"

import { defineConfig } from "vite"

export default defineConfig({
	resolve: {
		// This ensures that conditional imports such as the one for #supports-color here:
		// `dev/cli/node_modules/chalk/package.json` are resolved correctly.
		// Fixes colors for bundled version of the cli.
		// Ref: https://nodejs.org/api/packages.html#packages_conditional_exports
		conditions: ["node"]
	},

	build: {
		target: "node24",
		lib: {
			entry: "src/main.ts",
			name: "alpha",
			fileName: "alpha",
			formats: ["es"]
		},

		outDir: path.resolve(import.meta.dirname, "./built"),

		minify: false,
		emptyOutDir: true,
		reportCompressedSize: true,

		rollupOptions: {
			output: {
				inlineDynamicImports: true
			},
			external: (source) => isBuiltin(source)
		},
		commonjsOptions: {
			transformMixedEsModules: true
		}
	}
})
