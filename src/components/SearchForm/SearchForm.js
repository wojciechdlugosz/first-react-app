import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import styles from "./SearchForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { changeFilterCards, getSearchString } from "../../redux/store";

const SearchForm = () => {
    
    const dispatch = useDispatch();
    const searchString = useSelector(getSearchString);

    const [search, setSearch] = useState('');

    useEffect(() => {
        setSearch(searchString);
    }, [searchString]); 

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(changeFilterCards(search));
        setSearch("");
    };

    return (
        <form onSubmit={handleSearch} className={styles.searchForm}>
            <TextInput
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
            />
            <Button>
                <span className="fa fa-search" />
            </Button>
    </form>
    );

  };

  export default SearchForm;