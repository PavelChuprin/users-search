import React from "react";
import Item from "../Item";
import styles from "./Items.module.css";

const Items = () => {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    try {
      fetch(`https://api.github.com/search/users?q=hello`)
        .then((res) => res.json())
        .then((obj) => {
          setUsers(obj.items);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className={styles.cards}>
      {isLoading ? (
        <h2>Загрузка...</h2>
      ) : users.length > 0 ? (
        users.map((user) => <Item key={user.id} user={user} />)
      ) : (
        <p>Не найдено</p>
      )}
    </div>
  );
};

export default Items;
