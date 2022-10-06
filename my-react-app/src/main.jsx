import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/Users';
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/users',
    element: <User />,
  },
  {
    path: '/user_create',
    element: <CreateUser />,
  },
  {
    path: '/user_edit/:id',
    element: <EditUser />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
);
