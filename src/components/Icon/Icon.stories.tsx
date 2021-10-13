import { knobIcon } from "../../../.storybook/knobs"
import { Icon } from "./Icon"
import { ICON_NAMES } from "./Icon.types"

export default {
  title: "Design tokens/Icon",
  component: Icon,
}

export const Demo = () => {
  return (
    <Icon style={{ fontSize: 48 }} name={knobIcon("name", ICON_NAMES.react)} />
  )
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
