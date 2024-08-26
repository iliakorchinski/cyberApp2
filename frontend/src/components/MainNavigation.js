import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { useSelector } from 'react-redux';
export default function MainNavigation() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  console.log(isAuth);
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
        {isAuth ? <p>You're logged in</p> : null}
      </nav>
    </header>
  );
}
