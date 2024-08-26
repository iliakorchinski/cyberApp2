import { useState } from 'react';
import { useAuth } from '../util/auth';
import { Form, redirect, useActionData } from 'react-router-dom';

export default function Login() {
  const data = useActionData();
  console.log(data);
  // const [user, setUser] = useState('');
  // const [password, setPassword] = useState('');
  const auth = useAuth();

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
      <button onClick={() => auth.loginMessage(data)}>Submit</button>
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
