// src/components/Alert.jsx

import css from "./Profile.module.css";

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
        <div className={css.card}>
      <div className={css.top}>
        <img className={css.photo}
          src={image}
          alt={name}
        />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
    
      <ul className={css.bottom}>
        <li className={css.list}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.center}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.list}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
    
  );
};



