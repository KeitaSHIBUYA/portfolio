import { FlatCompat } from "@eslint/eslintrc";
import nextPlugin from "@next/eslint-plugin-next";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: {},
});

export default [
    {
        ignores: [".next/*", "node_modules/*"],
    },
    ...compat.extends("next/core-web-vitals"),
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
            "@next/next": nextPlugin,
        },
        rules: {
            ...tsPlugin.configs["recommended"].rules,
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-explicit-any": "warn",
        },
    },
];
