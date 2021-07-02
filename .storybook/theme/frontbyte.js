import { create } from '@storybook/theming/create'

export default create({
  base: 'dark',

  colorPrimary: '#2d2d42',
  colorSecondary: '#64cae1',

  // UI
  appBg: '#2d2d42',
  appContentBg: '#2d2d42',
  appBorderColor: '#2d2d42',
  appBorderRadius: 0,

  // Typography
  fontBase: '"Roboto", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#fff',
  textInverseColor: '#000',

  // Toolbar default and active colors
  barTextColor: '#ffffff',
  barSelectedColor: '#64cae1',
  barBg: '#1b1b29',

  // Form colors
  inputBg: '#ffffff',
  inputTextColor: '#1F202E',
  inputBorderRadius: 0,

  brandTitle: 'Frontbyte',
  brandUrl: 'https://frontbyte.com/',
  brandImage: 'https://frontbyte.com/images/inhtml/logo-mobile.svg',
})
