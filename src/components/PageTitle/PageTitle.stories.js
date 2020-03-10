import React from 'react'
import { PageTitle } from './PageTitle'
import { text } from '@storybook/addon-knobs'

export default {
  title: 'Data display/PageTitle',
  component: PageTitle,
}

export const ToStorybook = () => (
  <PageTitle children={text('children', 'PageTitle text')} />
)

ToStorybook.story = {
  name: 'PageTitle',
}
