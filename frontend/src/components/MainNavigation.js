import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { useAuth } from '../util/auth';

export default function MainNavigation() {
  const auth = useAuth();
  console.log(auth);
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Cyber</h1>
      <nav className={classes['header-nav']}>
        <ul className={classes.list}>
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="login"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              LogIn
            </NavLink>
          </li>
        </ul>
        {auth.message ? <p>{auth.message}</p> : null}
      </nav>
    </header>
  );
}
