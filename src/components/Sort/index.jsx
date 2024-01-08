import React from "react";
import { getUsers } from "../../api";
import { perPage, sortOption } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../redux/slices/usersSlice";
import { setOrder } from "../../redux/slices/searchSlice";
import styles from "./Sort.module.css";

const Search = () => {
  const [sortText, setSortText] = React.useState(sortOption[1]);
  const [openSort, setOpenSort] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const searchValue = useSelector((state) => state.search.searchValue);
  const currentPage = useSelector((state) => state.search.pageNumber);
  const dispatch = useDispatch();

  const handleSortClick = (order) => {
    setIsLoading(true);
    setSortText(order);
    dispatch(setOrder(order));
    getUsers({
      searchValue: searchValue,
      sort: "repositories",
      order: order,
      perPage: perPage,
      page: currentPage,
    })
      .then((data) => {
        dispatch(setUsers(data.items));
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setOpenSort(false);
        setIsLoading(false);
      });
  };

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
          Sort by number of repositories:{" "}
          <span>
            {isLoading ? <span className={styles.loader}></span> : sortText}
          </span>
        </p>
        {openSort && (
          <div className={styles.menu}>
            <ul className={styles.ul}>
              {sortOption.map((item, index) => (
                <li
                  key={index}
                  className={item === sortText ? styles.active : styles.li}
                  onClick={() => handleSortClick(item)}
                >
                  {item}
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
