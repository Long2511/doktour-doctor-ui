module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: ["@react-native-community"],
  plugins: ["prettier"],
  rules: {
    semi: 0,
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "react-hooks/exhaustive-deps": "off",
  },
  env: {
    jest: true,
    browser: true,
  },
  ignorePatterns: ["build/*"],
};
