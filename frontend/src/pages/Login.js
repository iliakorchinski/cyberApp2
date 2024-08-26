import { Form, useActionData, redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { useEffect } from 'react';

export default function Login() {
  const data = useActionData();
  console.log(data);

  const dispath = useDispatch();
  // const [user, setUser] = useState('');
  // const [password, setPassword] = useState('');
  useEffect(() => {
    if (data) {
      dispath(login());
    }
  }, [data]);

  return (
    <Form method="post">
      <p>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          // onChange={handleChangeUser}
          // value={user}
          required
        />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          // onChange={handleChangePassword}
          // value={password}
          required
        />
      </p>
      <button>Submit</button>
    </Form>
  );
}

export async function action({ request, params }) {
  const method = request.method;
  const data = Object.fromEntries(await request.formData());
  const enteredUser = {
    username: data.username,
    password: data.password,
  };

  const responce = await fetch('http://localhost:8080/login', {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(enteredUser),
  });
  console.log(responce);
  if (!responce.ok) {
    throw new Error('Could not authenticate user');
  }

  const resData = await responce.json();
  if (resData) {
    // redirect('/');
    return resData.message;
  }

  return null;
}
