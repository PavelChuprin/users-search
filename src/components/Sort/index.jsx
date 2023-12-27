import React from "react";
import styles from "./Sort.module.css";

const Search = () => {
  const sort = [
    { id: 1, text: "default" },
    { id: 2, text: "number of repositories 🠕" },
    { id: 3, text: "number of repositories 🠗" },
  ];

  const [sortText, setSortText] = React.useState(sort[0].text);
  const [openSort, setOpenSort] = React.useState(false);

  return (
    <div className={styles.block}>
      <h2>Searching results: </h2>
      <div className={styles.sort} onClick={() => setOpenSort(!openSort)}>
        <img
          width={16}
          height={16}
          src={openSort ? "/img/arrow-down.png" : "/img/arrow-up.png"}
          alt="arrow"
        />
        <p className={styles.text}>
          Sorting by: <span>{sortText}</span>
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
  );
};

export default Search;
