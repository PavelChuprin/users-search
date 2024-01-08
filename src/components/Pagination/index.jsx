import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { perPage } from "../../constants";
import { setPageNumber } from "../../redux/slices/searchSlice";
import { getUsers } from "../../api";
import { setUsers } from "../../redux/slices/usersSlice";
import styles from "./Pagination.module.css";

const Pagination = () => {
  const [pages, setPages] = React.useState(1);
  const [error, setError] = React.useState("");

  const currentPage = useSelector((state) => state.search.pageNumber);
  const totalCount = useSelector((state) => state.users.total_count);
  const searchValue = useSelector((state) => state.search.searchValue);
  const order = useSelector((state) => state.search.order);
  const dispatch = useDispatch();

  const onPageChange = (page) => {
    dispatch(setPageNumber(page));
    const totalPagesCount = Math.ceil(totalCount / perPage);
    setPages(totalPagesCount);
    getUsers({
      searchValue: searchValue,
      sort: "repositories",
      order: order,
      perPage: perPage,
      page: page,
    })
      .then((data) => {
        dispatch(setUsers(data.items));
        setError("");
      })
      .catch((error) => setError(error.message))
      .finally(() => {
        window.scrollTo({
          top: 175,
          behavior: "smooth",
        });
      });
  };

  React.useEffect(() => {
    const totalPagesCount = Math.ceil(totalCount / perPage);
    setPages(totalPagesCount);
  }, [totalCount, currentPage]);

  return (
    <>
      {error && <div className={styles.error}>{error}</div>}

      <ReactPaginate
        className={styles.root}
        activeClassName={styles.active}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => {
          onPageChange(event.selected + 1);
        }}
        pageRangeDisplayed={10}
        pageCount={pages}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
