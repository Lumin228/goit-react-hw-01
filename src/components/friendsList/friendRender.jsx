import css from './friends.module.css';
import { FriendLi } from "./FriendLi"
export const FriendList = ({friends}) => {
    return <ul className={css.list}>
        {friends.map(friend => (
          <FriendLi 
            avatar={friend.avatar}
            name={friend.name}
            online={friend.isOnline} 
            key={friend.id} />
        ))}
    </ul>
}