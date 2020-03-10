import React from 'react'
import { knobAsset } from '../../../.storybook/knobs'
import { Asset } from './Asset'

export default {
  title: 'Design tokens/Asset',
  component: Asset,
}

export const Demo = () => {
  return <Asset name={knobAsset('name', 'analysis')} />
}

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
  },
  asset: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 12,
  },
  assetName: {
    fontSize: 12,
    marginTop: 14,
  },
}

export const List = () => {
  return (
    <div style={styles.container}>
      {Asset.NAMES.map(name => (
        <div key={name} style={styles.asset}>
          <Asset style={{ width: 64, height: 64 }} name={name} />
          <span style={styles.assetName}>{name}</span>
        </div>
      ))}
    </div>
  )
}
