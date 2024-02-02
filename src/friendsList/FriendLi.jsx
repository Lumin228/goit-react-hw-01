import clsx from "clsx";
import css from "./friends.module.css";
export const FriendLi = ({ avatar, name, online, key }) => {
  const status = online ? "Online" : "Offline";
  return (
    <li key={key} className={css.liPart}>
      <img src={avatar} width={40} height={40} alt={name} />
      <p>{name}</p>
      <p
        className={clsx(css.text, {
          [css.isOnline]: online,
          [css.isOffline]: !online,
        })}
      >
        {status}
      </p>
    </li>
  );
};
