import { Profile } from "../Profile/Profile";
import { FriendsList } from "../FriendsList/FriendsList";
import { TransactionHistory } from "../Transactions/TransactionHistory";
import friends from '../Data/friends.json';
import userData from '../Data/userData.json';
import transactions from '../Data/transactions.json';

        
    
    export const App = () => {
      return (
        <>
          <Profile
            name={userData.username}
            tag={userData.tag}
            location={userData.location}
            image={userData.avatar}
            stats={userData.stats}
          />
          <FriendsList 
            friends={friends}
          />
          <TransactionHistory items={transactions} />
        </>
      );
    };
    