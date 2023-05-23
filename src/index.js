import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage';
import { Home } from './pages/Home';
import { AllProducts } from './pages/AllProducts';
import { ShoppingCart } from './pages/ShoppingCart';
import { Likes } from './pages/Likes';
import { NewProducts } from './pages/NewProducts';
import { ProductDetail } from './pages/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/products',
        element: <AllProducts />,
      },
      {
        path: '/products/:id',
        element: <ProductDetail />,
      },
      {
        path: '/products/new',
        element: <NewProducts />,
      },
      {
        path: '/carts',
        element: <ShoppingCart />,
      },
      {
        path: '/likes',
        element: <Likes />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
