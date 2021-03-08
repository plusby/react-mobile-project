import Home from '@/modules/menuBook/pages/Home'
import List from '@/modules/menuBook/pages/List/index'
import Details from '@/modules/menuBook/pages/Details/index'

const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/list',
    component: List,
  },
  {
    path: '/details',
    component: Details,
  }
]

export default routes