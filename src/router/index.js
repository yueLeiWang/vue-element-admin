import Hello from './views/Hello'
import index from './views/index'
let routes = [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }	
];

export default routes;
