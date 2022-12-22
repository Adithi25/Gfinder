import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import UserDetail from "./components/UserDetail";
import Users from "./components/Users";
import { useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  const getDetails = async (login) => {
    const res = await axios.get(`https://api.github.com/users/${login}`);
    setUser(res.data);
  };

  const getRepo = async (username) => {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=asc`
    );
    setRepos(res.data);
  };

  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/user/:anything"
            render={props => (
              <UserDetail
                getDetails={UserDetail}
                Users={Users}
                {...props}
                getRepo={getRepo}
                repos={repos}
              />
            )}
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/*
useEffect(() =>{
      apiCall();
    },[])
    
    const apiCall = async () => {
      const res = await axios.get('https://api.github.com/users');
      setUsers(res.data)
 } */
