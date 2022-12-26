import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import UpdateInfo from '../pages/UpdateInfo';
import View from '../pages/View';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'View',
        element: <View />,
      },
      {
        path: '/updateinfo/:id',
        element: <UpdateInfo />,
      },
    ],
  },
]);
