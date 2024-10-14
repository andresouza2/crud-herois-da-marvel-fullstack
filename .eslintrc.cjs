module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
		'prettier'
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'prettier', 'import-helpers'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				trailingComma: 'none',
				endOfLine: 'auto',
				tabWidth: 2,
				useTabs: true,
				semi: false,
				printWidth: 120
			}
		],
		'import-helpers/order-imports': [
			'warn',
			{
				newlinesBetween: 'always', // new line between groups
				groups: [
					'/^react/',
					'module',
					'/^@mui/',
					'/^@api/',
					'/^@models/',
					'/^@utils/',
					'/^@pages/',
					'/^@components/',
					'/^@assets/',
					'/^~/',
					['parent', 'sibling', 'index']
				],
				alphabetize: { order: 'asc', ignoreCase: true }
			}
		]
	}
}
