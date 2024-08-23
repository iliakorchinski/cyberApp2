import { Form, redirect } from 'react-router-dom';

export default function ProductForm({ data, method }) {
  return (
    <Form method={method}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={data ? data.title : ''}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          name="description"
          required
          defaultValue={data ? data.description : ''}
        />
      </div>
      <div>
        <label htmlFor="image">ImageUrl</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={data ? data.image : ''}
        />
      </div>
      <button>Save</button>
    </Form>
  );
}

export async function action({ request, params }) {
  const method = request.method;
  const id = params.id;
  const data = Object.fromEntries(await request.formData());
  console.log(data);

  const productData = {
    title: data.title,
    image: data.image,
    description: data.description,
  };
  console.log(productData);

  const responce = await fetch(`http://localhost:8080/products/${id}/edit`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  });
  console.log(responce);

  return responce;
}
