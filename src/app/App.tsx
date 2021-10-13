import { Router } from '@reach/router'
import React from 'react'
import { Footer } from '../layout/Footer'
import { Navigation } from '../layout/Navigation'

const Home = React.lazy(() => import('../pages/Home/Home'))
const Dashboard = React.lazy(() => import('../pages/Dashboard/Dashboard'))

export function App() {
  return (
    <main className="App">
      <React.Suspense fallback="Loading">
        <Router>
          <Home path="/" />
          <Dashboard path="/dashboard" />
        </Router>
      </React.Suspense>
      <Navigation />
      <Footer />
    </main>
  )
}
