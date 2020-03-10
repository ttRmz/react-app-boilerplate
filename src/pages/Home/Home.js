import React from 'react'
import { PageTitle } from '../../components'
import { setPageTitle } from '../../core/setPageTitle'

export default function Home() {
  React.useEffect(() => {
    setPageTitle('Home')
  }, [])

  return <PageTitle>Wellcome to React boilerplate</PageTitle>
}
