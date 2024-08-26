import classes from './EventItem.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function EventList({ data }) {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <div>
      <ul>
        {data.map((item) => {
          return (
            <li className={classes.container} key={item.id}>
              <Link to={item.id} className={classes.link}>
                <h2>{item.title}</h2>
                <img src={item.image} alt="item" width={100} height={100} />
                <p>{item.description}</p>
              </Link>
            </li>
          );
        })}
      </ul>
      <p className={classes['navigate-container']}>
        <Link className={classes.navigate} to={isAuth ? 'new' : '/login'}>
          Add Item
        </Link>
      </p>
    </div>
  );
}
