import React from "react";
import Item from "../Item";
import Pagination from "../Pagination";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import styles from "./Items.module.css";

const Items: React.FC = () => {
  const users = useSelector((state: RootState) => state.users.users);

  return (
    <>
      <div className={styles.cards}>
        {users?.length > 0 ? (
          users.map((user) => <Item key={user.id} {...user} />)
        ) : (
          <p>Not found</p>
        )}
      </div>
      {users && <Pagination />}
    </>
  );
};

export default Items;
