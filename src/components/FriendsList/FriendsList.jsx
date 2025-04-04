import css from "./FriendsList.module.css"
import clsx from "clsx";



export const FriendsList = ({friends}) => {
    return <ul className={css.list}>
        {friends.map(friend => {
    return  <li key={friend.id} className={css.card}>
                <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>
            </li>
        })}
    </ul>
}

const FriendListItem = ({avatar, name, isOnline}) => {
   return <div>
        <img src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
        <p className={clsx(isOnline ? css.casual : css.offline)}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>

}