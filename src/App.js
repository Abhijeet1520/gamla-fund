import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import FundDetails from "./pages/FundDetails/FundDetails";
import Search from "./pages/Search/Search";
import Profile from "./pages/Profile/Profile";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/search" exact component={Search} />
        <Route path="/funddetails" exact component={FundDetails} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
