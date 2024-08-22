import { useLoaderData } from 'react-router-dom';
import EventItemDetails from '../components/EventItemDetails';
export default function ProductDetails() {
  const data = useLoaderData();
  console.log(data);
  return <EventItemDetails data={data.product} />;
}

export async function loader({ params }) {
  const id = params.id;
  console.log(id);
  const responce = await fetch(`http://localhost:8080/products/${id}`);
  console.log(responce);
  return responce;
}
