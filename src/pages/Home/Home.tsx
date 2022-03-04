import { RouteComponentProps } from "@reach/router"
import { useTranslation } from "react-i18next"

import { PageTitle } from "../../components"
import { SEO } from "../../layout/SEO"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Home(props: RouteComponentProps) {
  const { t } = useTranslation()

  return (
    <>
      <SEO title="Home" />
      <PageTitle>{t("home")}</PageTitle>
    </>
  )
}
