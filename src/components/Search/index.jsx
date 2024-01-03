import React from "react";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { getUsers } from "../../api";
import { setUsers } from "../../redux/slices/usersSlice";
import styles from "./Search.module.css";

const Search = ({ setShowResultsBlock }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    const search = data.searchValue;
    try {
      if (search) {
        await getUsers(search).then((obj) => dispatch(setUsers(obj.items)));
        window.scrollTo(0, 0);
        setIsLoading(false);
        setShowResultsBlock(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.block}>
        <h2>Enter login to find the user</h2>

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
                  value: /^[A-Za-z0-9]+$/i,
                  message: "Only Latin letters",
                },
              })}
            />
            <Button onClick={onSubmit} text={"Find user"} disabled={!isValid} />
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
