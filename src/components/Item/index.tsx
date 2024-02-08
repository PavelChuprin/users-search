import React from "react";
import Button from "../Button";
import styles from "./Item.module.css";

type TUserProps = {
  login: string;
  avatar_url: string;
  id: number;
  html_url: string;
};

const Item: React.FC<TUserProps> = ({ login, avatar_url, id, html_url }) => {
  const [openCard, setOpenCard] = React.useState(false);

  return (
    <>
      <div className={styles.block}>
        <h3>{login}</h3>
        <Button
          onClick={() => setOpenCard(!openCard)}
          text={openCard ? "Hide details" : "See more info"}
          disabled={false}
        />
      </div>
      {openCard && (
        <div className={styles.card}>
          <img width={200} height={200} src={avatar_url} alt="avatar" />
          <div className={styles.info}>
            <h5>
              <span>Login:</span> {login}
            </h5>
            <h5>
              <span>ID:</span> {id}
            </h5>
            <div className="d-flex justify-between align-center">
              <Button
                onClick={() => window.open(html_url)}
                text={"View user on GitHub"}
                disabled={false}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Item;
