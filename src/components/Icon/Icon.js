import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { ICONS } from './_internals/constants'

export function Icon({ name, className, ...props }) {
  return (
    <i className={classNames('Icon', `Icon-${name}`, className)} {...props} />
  )
}

Icon.propTypes = {
  name: PropTypes.oneOf(ICONS),
}

Icon.NAMES = ICONS
