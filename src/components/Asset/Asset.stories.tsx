import { knobAsset } from "../../../.storybook/knobs"
import { ASSET_NAMES } from "."
import { Asset } from "./Asset"

export default {
  title: "Design tokens/Asset",
  component: Asset,
}

export const Demo = () => {
  return <Asset name={knobAsset("name", ASSET_NAMES.analysis)} />
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: 12,
          }}
        >
          <Asset style={{ width: 64, height: 64 }} name={name} />

          <span
            style={{
              fontSize: 12,
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
