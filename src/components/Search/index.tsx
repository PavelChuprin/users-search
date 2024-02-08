import React from "react";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { getUsers } from "../../api";
import { setTotalCount, setUsers } from "../../redux/slices/usersSlice";
import { perPage, valid } from "../../constants";
import { setSearch } from "../../redux/slices/searchSlice";
import { RootState } from "../../redux";
import styles from "./Search.module.css";

type TSearchProps = {
  setShowResultsBlock: (showResultsBlock: boolean) => void;
};

type TFormValues = {
  searchValue: string;
};

const Search: React.FC<TSearchProps> = ({ setShowResultsBlock }) => {
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const currentPage = useSelector(
    (state: RootState) => state.search.pageNumber
  );
  const order = useSelector((state: RootState) => state.search.order);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TFormValues>();

  const onSubmit: SubmitHandler<TFormValues> = async (data) => {
    setIsLoading(true);
    const search: string = data.searchValue;
    try {
      if (search) {
        dispatch(setSearch(search));
        await getUsers({
          searchValue: search,
          sort: "repositories",
          order: order.sortOption,
          perPage: String(perPage),
          page: String(currentPage),
        }).then((obj) => {
          dispatch(setUsers(obj.items));
          dispatch(setTotalCount(obj.total_count));
          setError("");
        });
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setIsLoading(false);
        setShowResultsBlock(true);
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        setIsLoading(false);
      }
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.block}>
        <h2>Enter login to find the user</h2>

        {error && <div className={styles.error}>{error}</div>}
        {isLoading && <span className={styles.loader}></span>}

        <div className={styles.section}>
          <form className={styles.search} onSubmit={handleSubmit(onSubmit)}>
            <img src="/img/search.svg" alt="search" />
            <input
              className={styles.input}
              placeholder="Search by login..."
              {...register("searchValue", {
                required: true,
                pattern: {
                  value: valid,
                  message: "Only Latin letters",
                },
              })}
            />
            <Button
              onClick={() => onSubmit}
              text={"Find user"}
              disabled={!isValid}
            />
          </form>
          {errors?.searchValue && (
            <div className={styles.error}>
              {errors?.searchValue?.message || "Required field!"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
