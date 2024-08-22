import classes from './Home.module.css';
import iphoneImage from '../assets/iphone14.png';
import { Link } from 'react-router-dom';
export default function HomePage() {
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <p className={classes['info-paragraph']}>Pro.Beyond</p>
        <h1 className={classes['info-title']}>Iphone 14 Pro</h1>
        <p className={classes['info-paragraph2']}>
          Created to change everything for the better.For everyone
        </p>

        <Link to="products" className={classes['info-button']}>
          Shop Now
        </Link>
      </div>
      <div className={classes['image-container']}>
        <img className={classes.image} src={iphoneImage} alt="iphone 14" />
      </div>
    </div>
  );
}
