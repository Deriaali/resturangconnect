import { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from './components/header';
import Admin from './pages/admin';
import AllBookings from './pages/allBookings';
import BookingPage from './pages/bookingPage';
import Desserts from './pages/desserts';
import HomePage from './pages/homePage';
import MainCourse from './pages/maincourse';
import Starters from './pages/starters';
import Vegetarian from './pages/vegetarian';
import Booking from "./pages/booking";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Hem
          </Link>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/"><a className="nav-link" href="#">Hem <span className="sr-only">(current)</span></a></Link>
          </li>
          <li className="nav-item active">
          <Link to="/boka"><a className="nav-link" href="#">Boka<span className="sr-only">(current)</span></a></Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Meny</a>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
            <Link to="/efterätter"><a className="dropdown-item" href="#">Efterätter</a></Link>
            <Link to="/förätter"><a className="dropdown-item" href="#">Förrätter</a></Link>
            <Link to="/varmrätter"><a className="dropdown-item" href="#">Varmrätter</a></Link>
            <Link to="/vegetarisk"><a className="dropdown-item" href="#">Vegetarisk</a></Link>
            </div>
          </li>
          <li className="nav-item active">
          <Link to="/admin"><a className="nav-link" href="#">Admin<span className="sr-only">(current)</span></a></Link>
          </li>
        </ul>
      </div>
        </nav>

        <div className="container mt-3">
          <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/boka" component={BookingPage} />
            <Route exact path="/efterätter" component={Desserts} />
            <Route exact path="/förätter" component={Starters} />
            <Route exact path="/varmrätter" component={MainCourse} />
            <Route exact path="/vegetarisk" component={Vegetarian} />
            <Route exact path="/alla-bokningar" component={AllBookings} />
            <Route exact path="/admin" component={Admin} />
            <Route path="/booking/:id" component={Booking} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
