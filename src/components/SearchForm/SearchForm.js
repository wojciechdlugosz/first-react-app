import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import styles from "./SearchForm.module.scss";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { filterCards } from "../../redux/store";

const SearchForm = () => {
    
    const dispatch = useDispatch();

    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(filterCards(search));
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