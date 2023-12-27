import React from "react";
import styles from "./SearchBlock.module.css";

const SearchBlock = () => {
  const sort = [
    { id: 1, text: "умолчанию" },
    { id: 2, text: "количеству репозиториев 🠕" },
    { id: 3, text: "количеству репозиториев 🠗" },
  ];

  const [searchValue, setSearchValue] = React.useState("");
  const [sortText, setSortText] = React.useState(sort[0].text);
  const [openSort, setOpenSort] = React.useState(false);
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={styles.content}>
      <div className={styles.block}>
        <h2>
          {searchValue
            ? `Поиск по запросу: "${searchValue}"`
            : "Все пользователи"}
        </h2>
        <div className={styles.search}>
          <img src="/img/search.svg" alt="search" />
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
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
        <div className={styles.sort} onClick={() => setOpenSort(!openSort)}>
          <img
            width={16}
            height={16}
            src={openSort ? "/img/arrow-down.png" : "/img/arrow-up.png"}
            alt="arrow"
          />
          <p className={styles.text}>
            Сортировка по: <span>{sortText}</span>
          </p>
          {openSort && (
            <div className={styles.menu}>
              <ul className={styles.ul}>
                {sort.map((obj) => (
                  <li
                    key={obj.id}
                    className={styles.li}
                    onClick={() => setSortText(obj.text)}
                  >
                    {obj.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBlock;
