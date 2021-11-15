import { useRoutes } from 'react-router'

import Navbar from '@/components/Navbar'
import Layout from '@/components/common/Layout'

import routes from '@/routes'

import './App.css'

const App = () => {
  const page = useRoutes(routes)

  return (
    <main>
      <header>
        <Navbar />
      </header>
      <Layout>{page}</Layout>
    </main>
  )
}

export default App
