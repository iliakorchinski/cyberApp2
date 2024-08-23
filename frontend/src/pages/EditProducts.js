import { useRouteLoaderData } from 'react-router-dom';
import ProductForm from '../components/ProductForm';

export default function EditProduct() {
  const data = useRouteLoaderData('product-details');
  //   console.log(data.product);
  return <ProductForm data={data.product} method="patch" />;
}
