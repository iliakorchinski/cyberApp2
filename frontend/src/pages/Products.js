import { useLoaderData } from 'react-router-dom';
import EventList from '../components/EventList';
export default function ProductsPage() {
  const data = useLoaderData();
  // console.log(data);
  return (
    <>
      <EventList data={data.products} />
    </>
  );
}

export async function loader() {
  const responce = await fetch('http://localhost:8080/products');
  if (!responce.ok) {
    throw new Error('Could not fetch products');
  } else {
    // console.log(responce);
    return responce;
  }
}
