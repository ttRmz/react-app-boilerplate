import { Icon, ICON_NAMES } from "../../components"

export function Footer() {
  return (
    <footer className="Footer">
      <span>
        Made with <Icon name={ICON_NAMES.react} /> by{" "}
        <a className="Footer__link" href="https://tristan-ramirez.me/">
          Tristan Ramirez
        </a>
      </span>
    </footer>
  )
}
