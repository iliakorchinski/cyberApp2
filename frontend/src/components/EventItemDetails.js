import { Link } from 'react-router-dom';
import classes from './EventItemDetails.module.css';
import { useSelector } from 'react-redux';

export default function EventItemDetails({ data }) {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <div className={classes.container}>
      <h1>{data.title}</h1>
      <p className={classes['image-container']}>
        <img className={classes.image} src={data.image} alt={data.title} />
      </p>
      <p>{data.description}</p>
      <div>
        <Link to={isAuth ? 'edit' : '/login'}>Edit</Link>
        <Link>Delete</Link>
        <Link>Add to cart</Link>
      </div>
    </div>
  );
}
