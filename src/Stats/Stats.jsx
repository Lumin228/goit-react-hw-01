export const Statsfor = ({ stats }) => {
  return (
    <ul>
      <li>
        <span className="label">Followers</span>
        <span className="value">{stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="value">{stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="value">{stats.likes}</span>
      </li>
    </ul>
  );
};
