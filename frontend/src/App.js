import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ProductsPage, { loader as productLoader } from './pages/Products';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      {
        path: '/products',
        element: <ProductsPage />,
        loader: productLoader,
        children: [{ path: ':id' }],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
