/** @type {import('prettier').Config} */
export default {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  printWidth: 100,
  useTabs: false,
  endOfLine: 'lf',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.ts',
  tailwindFunctions: ['clsx', 'cn', 'cva'],
}