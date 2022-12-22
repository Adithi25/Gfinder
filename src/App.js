import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/user/:anything" element={<UserDetail />} />
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
