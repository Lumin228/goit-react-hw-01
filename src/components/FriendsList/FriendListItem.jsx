import clsx from "clsx";
import css from "../FriendsList/FriendListItem.module.css"



export const FriendListItem = ({avatar, name, isOnline}) => {
   return <div>
        <img src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
        <p className={clsx(isOnline ? css.casual : css.offline)}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>

}