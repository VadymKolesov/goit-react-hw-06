import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

function SearchBox() {
  const dispatch = useDispatch();

  return (
    <div className={css.search}>
      <label htmlFor="search-contact">Find contacts by name</label>
      <input
        className={css.input}
        id="search-contact"
        onChange={(e) => {
          const value = e.target.value.toLowerCase();
          dispatch(changeFilter(value));
        }}
      />
    </div>
  );
}

export default SearchBox;
