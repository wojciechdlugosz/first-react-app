import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addList } from "../../redux/listsRedux";
import shortid from "shortid";
import styles from "./ListForm.module.scss";

const ListForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ id: shortid(), title, description }));
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.listForm}>
      <label for="title" className={styles.label}>Title: </label>
      <TextInput
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label for="description" className={styles.label}>Description: </label>
      <TextInput
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button>Add list</Button>
    </form>
  );
};

export default ListForm;