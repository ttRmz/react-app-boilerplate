import React from 'react'
import { PageTitle } from '../../components'
import { setPageTitle } from '../../core/setPageTitle'
import { useTranslation } from 'react-i18next'

export default function Dashboard() {
  const { t } = useTranslation()

  React.useEffect(() => {
    setPageTitle('Dashboard')
  }, [])

  return <PageTitle>{t('dashboard')}</PageTitle>
}
