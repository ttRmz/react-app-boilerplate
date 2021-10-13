import { select } from '@storybook/addon-knobs'
import { ASSET_NAMES, ICON_NAMES } from '../src/components'

export function knobIcon(
  label: string,
  defaultValue: ICON_NAMES,
  groupID?: string,
) {
  return select<ICON_NAMES>(
    label,
    Object.values(ICON_NAMES),
    defaultValue,
    groupID,
  )
}

export function knobAsset(
  label: string,
  defaultValue: ASSET_NAMES,
  groupID?: string,
) {
  return select<ASSET_NAMES>(
    label,
    Object.values(ASSET_NAMES),
    defaultValue,
    groupID,
  )
}
