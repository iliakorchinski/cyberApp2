import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ProductsPage, { loader as productLoader } from './pages/Products';
import RootLayout from './pages/Root';
import ProductDetails, {
  loader as ProductDetailsLoader,
} from './pages/ProductDetails';
import Login, { action as loginAction } from './pages/Login';
import { AuthProvider } from './util/auth';
import EditProduct from './pages/EditProducts';
import { action } from './components/ProductForm';
import NewProduct, { action as newProductAction } from './pages/NewProduct';

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
        id: 'product-details',
        // element: <ProductDetails />,
        loader: ProductDetailsLoader,
        children: [
          { index: true, element: <ProductDetails /> },
          { path: 'edit', element: <EditProduct />, action: action },
        ],
      },
      {
        path: '/products/new',
        element: <NewProduct />,
        action: newProductAction,
      },
      { path: 'login', element: <Login />, action: loginAction },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
