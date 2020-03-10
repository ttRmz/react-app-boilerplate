import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { ASSETS } from './_internals/constants'

export function Asset({ name, className, ...rest }) {
  return (
    <figure className={classNames('Asset', className)} {...rest}>
      <img
        className="Asset__image"
        src={`${window.location.origin}/assets/symbols/${name}.svg`}
        alt={name}
      />
    </figure>
  )
}

Asset.propTypes = {
  name: PropTypes.oneOf(ASSETS),
}

Asset.NAMES = ASSETS
