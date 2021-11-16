import { useRoutes } from 'react-router'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import Navbar from '@/components/Navbar'
import Layout from '@/components/common/Layout'

import routes from '@/routes'
import { store } from '@/redux/store'

import './App.css'

const queryClient = new QueryClient()

const App = () => {
  const page = useRoutes(routes)

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <main>
          <header>
            <Navbar />
          </header>
          <Layout>{page}</Layout>
        </main>
      </QueryClientProvider>
    </Provider>
  )
}

export default App
