import './App.css';
import {BrowserRouter, Route, Switch, NavLink, Redirect} from 'react-router-dom';
import {useState} from 'react';
import {Header} from './components/Header'
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Post from './pages/Post';

function App() {
  const [login, setLogin] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        
        <button onClick={() => setLogin(!login)}>
          {login ? "Logout" : "Login"}
        </button>
        
        <ul className="nav">
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>

        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          {/* <Route path="/profile">
            {login 
              ? <Profile/>
              : <Redirect to="/"/>}
          </Route> */}
          <Route path="/profile">
            <Profile login={login}/>
          </Route>

          <Route path="/post/:id" component={Post} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
