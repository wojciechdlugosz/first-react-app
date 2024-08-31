import styles from "./Card.module.scss";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { toggleCardFavorite, removeCard } from "../../redux/cardsRedux";

const Card = ({ id, title, isFavorite }) => {
    const dispatch = useDispatch();
  
    const toggleFavorite = (e) => {
      e.preventDefault();
      dispatch(toggleCardFavorite(id));
    };

    const remove = (e) => {
      e.preventDefault();
      dispatch(removeCard(id));
    };
  
    return (
      <li className={styles.card}>
        {title}
        <div>
        <button
          onClick={toggleFavorite}
          className={clsx(
            styles.button,
            isFavorite === true && styles.favorite
          )}
        >
          <span className="fa fa-star-o"></span>
        </button>
        <button onClick={remove} className={clsx(styles.button, styles.remove)}>
          <span className="fa fa-trash"></span>
        </button>
        </div>
      </li>
    );
  };

export default Card