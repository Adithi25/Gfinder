import React, { useState } from "react";
import axios from "axios";
import Users from "./Users";
import Search from "./Search";

const Home = () => {
  const [users, setUsers] = useState([]);

  const searchName = async (name) => {
    await axios
      .get(`https://api.github.com/search/users?q=${name}`)
      .then((res) => setUsers(res.data.items))

      .catch((error) => console.error(error));
  };

  const clearUsers = () => {
    setUsers([]);
  };

  return (
    <div>
      <Search
        searchName={searchName}
        showClear={users.length > 0 ? true : false}
        clearUsers={clearUsers}
      />
      <Users users={users} />
    </div>
  );
};

export default Home;

// intialyy array will be empty
// once the length of the array is greater than one
// then it will show the clear btn
