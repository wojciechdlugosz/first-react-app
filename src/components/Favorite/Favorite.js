import styles from "./Favorite.module.scss";
import PageTitle from "../PageTitle/PageTitle";
import { getFavoriteCards } from "../../redux/cardsRedux";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const Favorite = () => {
    const favoriteCards = useSelector(getFavoriteCards);

    return (
        <article className={styles.favorite}>
            <PageTitle>Favorite</PageTitle>
            <div className={styles.column}>
                {favoriteCards.length > 0 ? (
                <ul className={styles.cards}>
                    {favoriteCards.map((card) => (
                    <Card key={card.id} {...card} />
                    ))}
                </ul>
                ) : (
                <p className={styles.info}>No favorite cards</p>
                )}
            </div>
        </article>
    );
};

export default Favorite;