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
        <button>Edit</button>
        <button>Delete</button>
        <button>Add to cart</button>
      </div>
    </div>
  );
}
