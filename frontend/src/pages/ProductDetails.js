import { useRouteLoaderData } from 'react-router-dom';
import EventItemDetails from '../components/EventItemDetails';
export default function ProductDetails() {
  const data = useRouteLoaderData('product-details');
  return <EventItemDetails data={data.product} />;
}

export async function loader({ params }) {
  const id = params.id;

  const responce = await fetch(`http://localhost:8080/products/${id}`);

  return responce;
}
