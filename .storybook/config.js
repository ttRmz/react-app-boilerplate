import { withKnobs } from '@storybook/addon-knobs'
import { addDecorator, addParameters, configure } from '@storybook/react'
import { create } from '@storybook/theming'
import '../src/index.scss'

const CENTER_STYLE = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  width: '100%',
  flexDirection: 'column',
}

addDecorator(withKnobs)
addDecorator(storyFn => <div style={CENTER_STYLE}>{storyFn()}</div>)

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'React boilerpate',
    }),
    panelPosition: 'right',
  },
  backgrounds: [
    { name: 'Default', value: '#ffffff', default: true },
    { name: 'Secondary', value: '#90b4ce' },
    { name: 'Background', value: '#d8eefe' },
    { name: 'Dark', value: '#181a1d' },
  ],
})

configure(require.context('../src', true, /\.stories\.js$/), module)
