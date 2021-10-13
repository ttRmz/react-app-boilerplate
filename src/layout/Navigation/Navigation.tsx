import { Link } from "@reach/router"

export function Navigation() {
  return (
    <ul className="Navigation">
      <li className="Navigation__link">
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </ul>
  )
}
