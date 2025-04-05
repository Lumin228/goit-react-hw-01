import css from "../FriendsList/FriendListItem.module.css"

import { FriendListItem } from "./FriendListItem";


export const FriendsList = ({friends}) => {
    return <ul className={css.list}>
        {friends.map(friend => {
    return  <li key={friend.id} className={css.card}>
                <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>
            </li>
        })}
    </ul>
}

