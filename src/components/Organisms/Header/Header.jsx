import LogoHeader from "../../Molecules/LogoHeader/LogoHeader";
import SearchHeader from "../../Molecules/SearchHeader/SearchHeader";
import styles from "./style.module.css";

function Header({ searchHandler, setSearchInput, setSearchOn }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <LogoHeader />
          <SearchHeader
            setSearchOn={setSearchOn}
            searchHandler={searchHandler}
            setSearchInput={setSearchInput}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
