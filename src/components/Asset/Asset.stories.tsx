import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Asset } from "./Asset"
import { ASSET_NAMES } from "./Asset.types"

export default {
  title: "UI/Asset",
  component: Asset,
  argTypes: {
    name: { control: { type: "select", options: ASSET_NAMES } },
  },
} as ComponentMeta<typeof Asset>

const Template: ComponentStory<typeof Asset> = ({ name }) => (
  <div
    style={{
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <Asset style={{ fontSize: "48px", marginBottom: "12px" }} name={name} />

    <span>{name}</span>
  </div>
)

export const Demo = Template.bind({})

Demo.args = {
  name: ASSET_NAMES.analysis,
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
      {Object.values(ASSET_NAMES).map((name: ASSET_NAMES) => (
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
          <Asset name={name} />
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
