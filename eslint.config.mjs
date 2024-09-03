import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";

export default [
    {
        rules: {
            semi: ["error", "always"], // Enforce semicolons
            quotes: ["error", "double"], // Enforce double quotes
            indent: ["error", 4], // Enforce 2-space tab spacing
            "no-unused-vars": ["error"], // Disallow unused variables
            "no-undef": ["error"], // Disallow use of undeclared variables
        }
    },
    {
        files: [
            "**/*.{js,mjs,cjs,ts}"
        ]
    },
    {
        languageOptions: {
            parser: tsParser,
            globals: {...globals.browser, ...globals.node}
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];