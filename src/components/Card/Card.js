import styles from "./Card.module.scss";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { toggleCardFavorite } from "../../redux/cardsRedux";

const Card = ({ id, title, isFavorite }) => {
    const dispatch = useDispatch();
  
    const toggleFavorite = (e) => {
      e.preventDefault();
      dispatch(toggleCardFavorite(id));
    };
  
    return (
      <li className={styles.card}>
        {title}
        <button
          onClick={toggleFavorite}
          className={clsx(styles.button, isFavorite === true && styles.favorite)}
        >
          <span className="fa fa-star-o"></span>
        </button>
      </li>
    );
  };

export default Card