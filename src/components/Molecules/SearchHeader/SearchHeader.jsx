import BtnSearch from "../../Atoms/Buttons/SearchBtn/BtnSearch";
import SearchInput from "../../Atoms/Inputs/SearchInput/SearchInput";
import "./style.css";

function SearchHeader({ searchHandler, setSearchInput, setSearchOn }) {
  return (
    <form
      className="form__container"
      onSubmit={(event) => {
        event.preventDefault();
        searchHandler(event.target[0].value);
      }}
    >
      <SearchInput setSearchOn={setSearchOn} setSearchInput={setSearchInput} />
      <BtnSearch />
    </form>
  );
}

export default SearchHeader;
