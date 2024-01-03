import React from "react";
import Button from "../Button";
import styles from "./Item.module.css";

const Item = ({ user }) => {
  const [openCard, setOpenCard] = React.useState(false);

  return (
    <>
      <div className={styles.block}>
        <h3>{user.login}</h3>
        <Button
          onClick={() => setOpenCard(!openCard)}
          text={openCard ? "Hide details" : "See more info"}
        />
      </div>
      {openCard && (
        <div className={styles.card}>
          <img width={200} height={200} src={user.avatar_url} alt="avatar" />
          <div className={styles.info}>
            <h5>
              <span>Login:</span> {user.login}
            </h5>
            <h5>
              <span>ID:</span> {user.id}
            </h5>
            <div className="d-flex justify-between align-center">
              <Button
                onClick={() => window.open(user.html_url)}
                text={"Go to GitHab user page"}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Item;
