import React from "react";
import Button from "../Button";
import styles from "./Search.module.css";

const Search = () => {
  const [searchValue, setSearchValue] = React.useState("");

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const clickToStartSearching = () => {
    console.log("Searching...");
  };

  return (
    <div className={styles.content}>
      <div className={styles.block}>
        <h2>
          {searchValue
            ? `Search by request: "${searchValue}"`
            : "Enter login to find the user"}
        </h2>

        <div className={styles.section}>
          <div className={styles.search}>
            <img src="/img/search.svg" alt="search" />
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Search by login..."
            />
            {searchValue && (
              <img
                className={styles.clear}
                onClick={() => setSearchValue("")}
                src="/img/remove.svg"
                alt="clear"
              />
            )}
          </div>
          <Button
            onClick={clickToStartSearching}
            disabled={searchValue ? false : true}
            text={"Find user"}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
