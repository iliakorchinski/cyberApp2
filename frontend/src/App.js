import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ProductsPage, { loader as productLoader } from './pages/Products';
import RootLayout from './pages/Root';
import ProductDetails, {
  loader as ProductDetailsLoader,
} from './pages/ProductDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      {
        path: 'products',
        element: <ProductsPage />,
        loader: productLoader,
      },
      {
        path: '/products/:id',
        element: <ProductDetails />,
        loader: ProductDetailsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
