import css from './Stats.module.css'
export const Statsfor = ({ stats }) => {
  return (
    <ul className={css.fixss}>
      <li className={css.label}>
        <span className={css.txt}>Followers</span>
        <span className={css.values}>{stats.followers}</span>
      </li>
      <li className={css.label}>
        <span className={css.txt}>Views</span>
        <span className={css.values}>{stats.views}</span>
      </li>
      <li className={[css.label, css.labelLast].join(' ')}>
        <span className={css.txt}>Likes</span>
        <span className={css.values}>{stats.likes}</span>
      </li>
    </ul>
  );
};
