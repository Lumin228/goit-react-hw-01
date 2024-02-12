import "./App.css";
import userData from "./userData.json";
import { Profile } from "./Profile/Profile";
import friends from "./friendsList/friendData.json"
import { FriendList } from "./friendsList/friendRender";
import { TransactionHistory } from "./Table/table";
import transactions from "./Table/tablelist.json";

function App() {
  return (
    <div>
       <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      /> 
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </div>
  );
}

export default App;
