import { Helmet } from 'react-helmet'
import { getPageTitle } from '../../core/getPageTitle'

interface ISEOProps {
  title?: string
}

type SEOComponent = React.FC<ISEOProps>

export const SEO: SEOComponent = props => {
  const title = getPageTitle(props.title)

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  )
}
