import Home from '@/pages/Home'
import Detail from '@/pages/Detail'

export default [
  { path: '/', element: <Home /> },
  { path: '/detail/:product', element: <Detail /> }
]
