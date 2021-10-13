import { text } from "@storybook/addon-knobs"

import { PageTitle } from "./PageTitle"

export default {
  title: "Data display/PageTitle",
  component: PageTitle,
}

export const ToStorybook = () => (
  <PageTitle children={text("children", "PageTitle text")} />
)

ToStorybook.story = {
  name: "PageTitle",
}
