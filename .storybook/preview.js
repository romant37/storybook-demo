import { addParameters, addDecorator } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withKnobs } from '@storybook/addon-knobs'
import { withPaddings } from 'storybook-addon-paddings'

// Any global styles
import './styles.css'

// Decorators
addDecorator(withPaddings)
addDecorator(withKnobs)

// Any wrapper
// addDecorator(story => <div>{story()}</div>)

// Addons parameters
addParameters({
  backgrounds: {
    default: 'white',
    values: [
      { name: 'secondary', value: '#2d2d42' },
      { name: 'primary', value: '#64cae1' },
      { name: 'white', value: '#ffffff' },
    ],
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  paddings: {
    values: [
      { name: 'Small', value: '16px' },
      { name: 'Medium', value: '32px' },
      { name: 'Large', value: '64px' },
    ],
    default: 'Small',
  },
  actions: { argTypesRegex: '^on.*' },
})
