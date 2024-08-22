import classes from './EventItem.module.css';
import { Link } from 'react-router-dom';

export default function EventList({ data }) {
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
    </div>
  );
}
