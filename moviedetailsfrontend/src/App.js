import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import  MovieNotesList  from './components/moviedetails-list.component';
import  CreateMovieDetail  from './components/add-moviedetail.component';
 

function App() {
  return (<Router>
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand">Movie Details Site</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to={"/create-user"}>Create a Movie Detail</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/notes"}>Notes of Movie Details</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Switch>
              <Route exact path='/' component={CreateMovieDetail} />
              <Route path="/create-user" component={CreateMovieDetail} />
              <Route path="/notes" component={MovieNotesList} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;