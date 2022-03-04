import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Icon } from "./Icon"
import { ICON_NAMES } from "./Icon.types"

export default {
  title: "UI/Icon",
  component: Icon,
  argTypes: {
    name: { control: { type: "select", options: ICON_NAMES } },
  },
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = ({ name }) => (
  <div
    style={{
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <Icon style={{ fontSize: "48px", marginBottom: "12px" }} name={name} />

    <span>{name}</span>
  </div>
)

export const Demo = Template.bind({})

Demo.args = {
  name: ICON_NAMES.react,
}

export const List = () => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",
      }}
    >
      {Object.values(ICON_NAMES).map((name: ICON_NAMES) => (
        <div
          key={name}
          style={{
            width: "4em",
            margin: 12,
            fontSize: 36,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Icon name={name} />
          <span
            style={{
              fontSize: 12,
              textAlign: "center",
              marginTop: 14,
            }}
          >
            {name}
          </span>
        </div>
      ))}
    </div>
  )
}
