import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageNumber } from "../../redux/slices/searchSlice";
import { setUsers } from "../../redux/slices/usersSlice";
import { getUsers } from "../../api";
import { perPage } from "../../constants";
import Button from "../Button";
import styles from "./Pagination.module.css";

const Pagination = () => {
  const [pages, setPages] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);

  const currentPage = useSelector((state) => state.search.pageNumber);
  const totalCount = useSelector((state) => state.users.total_count);
  const searchValue = useSelector((state) => state.search.searchValue);
  const dispatch = useDispatch();

  const fetchData = (page) => {
    setIsLoading(true);
    dispatch(setPageNumber(page));
    const totalPagesCount = Math.ceil(totalCount / perPage);
    setPages(totalPagesCount);
    getUsers({
      searchValue: searchValue,
      perPage: perPage,
      page: page,
    })
      .then((data) => dispatch(setUsers(data.items)))
      .catch((error) => console.log(error))
      .finally(() => {
        window.scrollTo({
          top: 175,
          behavior: "smooth",
        });
        setIsLoading(false);
      });
  };

  const handlePageChange = (page) => {
    fetchData(page);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
      return;
    }
  };

  const handleNextClick = () => {
    if (currentPage < pages) {
      handlePageChange(currentPage + 1);
      return;
    }
  };

  React.useEffect(() => {
    const totalPagesCount = Math.ceil(totalCount / perPage);
    setPages(totalPagesCount);
  }, [totalCount, currentPage]);

  return (
    <div className={styles.block}>
      <Button text={"Prev"} onClick={handlePrevClick} />
      <div className={styles.current}>
        {isLoading ? <span className={styles.loader}></span> : currentPage}
      </div>
      <Button text={"Next"} onClick={handleNextClick} />
    </div>
  );
};

export default Pagination;
