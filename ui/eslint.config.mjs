import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});
const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "next",
      "prettier",
    ],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          message:
            "Don't use date functions that take timezones into account due to potential inconsistencies across locales and browsers. Consider using the internal createUTCDate function or parseISODate function.",
          selector: "CallExpression[callee.property.name='toLocaleDateString']",
        },
        {
          message:
            "Don't use date functions that take timezones into account due to potential inconsistencies across locales and browsers. Consider using the internal createUTCDate function or parseISODate function.",
          selector: "CallExpression[callee.property.name='getFullYear']",
        },
        {
          message:
            "Don't use date functions that take timezones into account due to potential inconsistencies across locales and browsers. Consider using the internal createUTCDate function or parseISODate function.",
          selector: "CallExpression[callee.property.name='getMonth']",
        },
        {
          message:
            "Don't use date functions that take timezones into account due to potential inconsistencies across locales and browsers. Consider using the internal createUTCDate function or parseISODate function.",
          selector: "CallExpression[callee.property.name='getDate']",
        },
        {
          message:
            "Don't use date functions that take timezones into account due to potential inconsistencies across locales and browsers. Consider using the internal createUTCDate function or parseISODate function.",
          selector: "CallExpression[callee.property.name='getDay']",
        },
        {
          message:
            "Don't use date functions that take timezones into account due to potential inconsistencies across locales and browsers. Consider using the internal createUTCDate function or parseISODate function.",
          selector:
            "NewExpression[callee.name='Date']:not(NewExpression[arguments.0.callee.object.name='Date'][arguments.0.callee.property.name=/^(UTC|now)$/])",
        },
      ],
      "no-console": "warn",
      "block-scoped-var": "warn",
      "no-use-before-define": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn", // or "error"
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-use-before-define": [
        "warn",
        {
          functions: false,
          enums: false,
          typedefs: false,
          variables: false,
          classes: false,
        },
      ],
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  }),
];
export default eslintConfig;
