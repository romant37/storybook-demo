module.exports = {
  stories: ['../src/**/*.stories.{js,jsx,ts,tsx}'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    'storybook-addon-paddings',
    {
      name: '@storybook/addon-essentials',
      options: {
        controls: false,
      },
    },
    {
      name: '@storybook/addon-storysource',
      options: {
        parser: 'typescript',
        loaderOptions: {
          prettierConfig: {
            trailingComma: 'es5',
            tabWidth: 2,
            semi: false,
            singleQuote: true,
            jsxSingleQuote: true,
            arrowParens: 'avoid',
          },
        },
      },
    },
  ],
}
