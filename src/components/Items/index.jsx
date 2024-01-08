import React from "react";
import Item from "../Item";
import Pagination from "../Pagination";
import { useSelector } from "react-redux";
import styles from "./Items.module.css";

const Items = () => {
  const users = useSelector((state) => state.users.users);

  return (
    <>
      <div className={styles.cards}>
        {users?.length > 0 ? (
          users.map((user) => <Item key={user.id} user={user} />)
        ) : (
          <p>Not found</p>
        )}
      </div>
      {users && <Pagination />}
    </>
  );
};

export default Items;
