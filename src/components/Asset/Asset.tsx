import classNames from 'classnames'
import { ASSET_NAMES } from './Asset.types'

interface IAssetProps extends React.ComponentPropsWithoutRef<'figure'> {
  name: ASSET_NAMES
}

type AssetComponent = React.FC<IAssetProps>

export const Asset: AssetComponent = ({ name, className, ...rest }) => {
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
