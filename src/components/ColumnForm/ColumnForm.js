import styles from './ColumnForm.module.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput';
import { addColumn } from '../../redux/store';

const ColumnForm = ({ listId }) => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ listId, id: shortid(), title, icon }));
        setTitle('');
        setIcon('');
    }

    return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <label for="title" className={styles.label}>Title: </label>
            <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <label for="icon" className={styles.label}>Icon: </label>
            <TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
    );
};

export default ColumnForm;