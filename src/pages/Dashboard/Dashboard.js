import React from 'react'
import { PageTitle } from '../../components'
import { setPageTitle } from '../../core/setPageTitle'

export default function Dashboard() {
  React.useEffect(() => {
    setPageTitle('Dashboard')
  }, [])

  return <PageTitle>Dashboard page</PageTitle>
}
