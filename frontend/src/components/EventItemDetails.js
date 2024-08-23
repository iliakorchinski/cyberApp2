import { Link } from 'react-router-dom';
import classes from './EventItemDetails.module.css';

export default function EventItemDetails({ data }) {
  return (
    <div className={classes.container}>
      <h1>{data.title}</h1>
      <p className={classes['image-container']}>
        <img className={classes.image} src={data.image} alt={data.title} />
      </p>
      <p>{data.description}</p>
      <div>
        <Link to="edit">Edit</Link>
        <Link>Delete</Link>
        <Link>Add to cart</Link>
      </div>
    </div>
  );
}
