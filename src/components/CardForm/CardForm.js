import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import styles from "../CardForm/CardForm.module.scss";

const CardForm = (props) => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
        type: "ADD_CARD",
        payload: { id: shortid(), columnId: props.columnId, title },
        });
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit} className={styles.cardForm}>
        <TextInput
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <Button>Add card</Button>
        </form>
    );
};

export default CardForm;