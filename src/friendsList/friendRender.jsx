import css from './friends.module.css';
import { FriendLi } from "./FriendLi"
export const Friends = ({list}) => {
    return <ul className={css.list}>
        {list.map(friend => (
          <FriendLi 
            avatar={friend.avatar}
            name={friend.name}
            online={friend.isOnline} 
            key={friend.id} />
        ))}
    </ul>
}