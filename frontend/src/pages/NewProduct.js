import ProductForm from '../components/ProductForm';
export default function NewProduct() {
  return <ProductForm method="post" />;
}

export async function action({ request, params }) {
  const method = request.method;
  const data = Object.fromEntries(await request.formData());
  const newProduct = {
    title: data.title,
    image: data.image,
    description: data.description,
    id: Math.random().toString(),
  };
  //   console.log(newProduct, method);
  const responce = await fetch(`http://localhost:8080/products/new`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newProduct),
  });
  return responce;
}
