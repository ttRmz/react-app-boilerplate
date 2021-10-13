import classNames from 'classnames'
import { ICON_NAMES } from './Icon.types'

interface IIconProps extends React.ComponentPropsWithoutRef<'i'> {
  name: ICON_NAMES
}

type IconComponent = React.FC<IIconProps>

export const Icon: IconComponent = ({ name, className, ...props }) => {
  return (
    <i className={classNames('Icon', `Icon-${name}`, className)} {...props} />
  )
}
