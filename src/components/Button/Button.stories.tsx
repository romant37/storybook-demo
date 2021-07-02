import { action } from '@storybook/addon-actions'
import { text, boolean } from '@storybook/addon-knobs'
import Button from './Button'

export default {
  title: 'Components/Button',
}

export function base() {
  return (
    <Button
      title={text('title', 'Primary')}
      disabled={boolean('disabled', false)}
      onClick={action('onClick')}
    />
  )
}

export function disabled() {
  return (
    <Button
      title={text('title', 'Disabled')}
      disabled={boolean('disabled', true)}
      onClick={action('onClick')}
    />
  )
}

export function darkMode() {
  return (
    <Button
      title={text('title', 'Dark mode')}
      disabled={boolean('disabled', false)}
      onClick={action('onClick')}
    />
  )
}

const darkModeParams = {
  backgrounds: { default: 'secondary' },
}

darkMode.parameters = darkModeParams
