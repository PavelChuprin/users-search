import React from "react";
import Item from "../Item";
import styles from "./Items.module.css";
import { useSelector } from "react-redux";

const Items = () => {
  const users = useSelector((state) => state.users.users);

  return (
    <div className={styles.cards}>
      {users?.length > 0 ? (
        users.map((user) => <Item key={user.id} user={user} />)
      ) : (
        <p>Не найдено</p>
      )}
    </div>
  );
};

export default Items;
