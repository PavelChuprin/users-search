import React from "react";
import { getUsers } from "../../api";
import { perPage } from "../../constants";
import { useSelector } from "react-redux";
import { setUsers } from "../../redux/slices/usersSlice";
import { setOrder, SortOptionEnum } from "../../redux/slices/searchSlice";
import { RootState, useAppDispatch } from "../../redux";
import styles from "./Sort.module.css";

type SortItem = {
  name: string;
  sortOption: SortOptionEnum;
};

export const sortList: SortItem[] = [
  { name: "DESC", sortOption: SortOptionEnum.DESC },
  { name: "ASC", sortOption: SortOptionEnum.ASC },
];

const Search: React.FC = () => {
  const [openSort, setOpenSort] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const searchValue = useSelector(
    (state: RootState) => state.search.searchValue
  );
  const currentPage = useSelector(
    (state: RootState) => state.search.pageNumber
  );
  const order = useSelector((state: RootState) => state.search.order);

  const dispatch = useAppDispatch();

  const handleSortClick = (obj: SortItem) => {
    setIsLoading(true);
    dispatch(setOrder(obj));
    getUsers({
      searchValue: searchValue,
      sort: "repositories",
      order: obj.sortOption,
      perPage: String(perPage),
      page: String(currentPage),
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
            {isLoading ? <span className={styles.loader}></span> : order.name}
          </span>
        </p>
        {openSort && (
          <div className={styles.menu}>
            <ul className={styles.ul}>
              {sortList.map((obj, index) => (
                <li
                  key={index}
                  onClick={() => handleSortClick(obj)}
                  className={
                    obj.sortOption === order.sortOption
                      ? styles.active
                      : styles.li
                  }
                >
                  {obj.name}
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
