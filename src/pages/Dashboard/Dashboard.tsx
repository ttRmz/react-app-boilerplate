import { RouteComponentProps } from '@reach/router'
import { useTranslation } from 'react-i18next'
import { PageTitle } from '../../components'
import { SEO } from '../../layout/SEO'

export default function Dashboard(props: RouteComponentProps) {
  const { t } = useTranslation()

  return (
    <>
      <SEO title="Dashboard" />
      <PageTitle>{t('dashboard')}</PageTitle>
    </>
  )
}
