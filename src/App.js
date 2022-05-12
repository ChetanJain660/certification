import './App.css';
import Details from './components/Details/Details';
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Switch } from 'react-router-dom';
import Vocher from './components/vocher/Vocher';
import Payment from './components/payments/Payment';
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
// import Topbar from "./components/topbar/Topbar"
import Receipt from "./components/receipt/Receipt"
import Home from './components/home/Home';
import { Lrt } from './components/lrt/Lrt';
import Sync from './components/Sync/Sync';
// import NavBarUser from './components/Topbaraa/NavbarUser';
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <Router>
      <Topbar/>
      <div className='contain'>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/vocher">
            <Vocher />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/receipt">
            <Receipt />
          </Route>
          <Route path="/lrt">
          <Lrt/>
          </Route>
          <Route path="/sync">
          <Sync/>
          </Route>
        </Switch>
        
      </div>
    </Router>

  );
}

export default App;