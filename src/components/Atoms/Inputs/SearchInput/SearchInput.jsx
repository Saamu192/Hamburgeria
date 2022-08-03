import "./style.css";
function SearchInput({ setSearchInput, setSearchOn }) {
  return (
    <input
      onChange={(event) => {
        if (event) {
          if (event.target.value === "") {
            setSearchOn(false);
          }
        }
      }}
      placeholder="Digite sua Pesquisa"
      className="input__search"
    />
  );
}
export default SearchInput;
