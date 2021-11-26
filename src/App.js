import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import './App.css';

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={Home} />
    //     <Route exact path="/login" component={Login} />
    //   </Switch>
    // </Router>
    <div>
      {/* <Navbar />
      <Home /> */}
      <Login />
    </div>
  );
}

export default App;
