import { ComponentMeta, ComponentStory } from "@storybook/react"

import { PageTitle } from "./PageTitle"

export default {
  title: "UI/PageTitle",
  component: PageTitle,
} as ComponentMeta<typeof PageTitle>

const Template: ComponentStory<typeof PageTitle> = args => (
  <PageTitle {...args} />
)

export const Demo = Template.bind({})

Demo.args = {
  children: "Hello world",
}
