import React from 'react'
import { knobIcon } from '../../../.storybook/knobs'
import { Icon } from './Icon'

export default {
  title: 'Design tokens/Icon',
  component: Icon,
}

export const Demo = () => {
  return <Icon style={{ fontSize: 48 }} name={knobIcon('name', 'react')} />
}

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
  },
  icon: {
    width: '4em',
    margin: 12,
    fontSize: 36,
    display: 'flex',
    flexDirection: 'column',
  },
  iconName: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 14,
  },
}

export const List = () => {
  return (
    <div style={styles.container}>
      {Icon.NAMES.map(name => (
        <div key={name} style={styles.icon}>
          <Icon name={name} />
          <span style={styles.iconName}>{name}</span>
        </div>
      ))}
    </div>
  )
}
