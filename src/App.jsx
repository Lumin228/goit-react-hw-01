import "./App.css";
import userData from "./userData.json";
import { Profile } from "./Profile/Profile";
import friends from "./friendsList/friendData.json"
import { Friends } from "./friendsList/friendRender";
import { Table } from "./Table/table";
import raft from "./Table/tablelist.json";

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
      <Friends list={friends}/>
      <Table spisok={raft}/>
    </div>
  );
}

export default App;
