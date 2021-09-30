import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game.jsx';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Login from './components/Login.jsx';
import Profile from './components/Profile.jsx';
<<<<<<< HEAD
import AddFriends from './components/AddFriends.jsx';
=======
import NavBar from './components/NavBar.jsx'
>>>>>>> dca2e7b... merge



ReactDOM.render(
  <Router>
    <div>
      <aside>
        <Link to='/blackjack'>Blackjack</Link>
        <Link to='/login'>Login</Link>
        <Link to='/profile'>Profile</Link>

        <Link to='/addFriends'>Interacting with Users</Link>

      </aside>

      <main>
        <NavBar />
        <Route exact path='/login' component={Login} />
        <Route exact path='/blackjack' component={Game} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/addFriends' component={AddFriends} />
      </main>
    </div>
  </Router>,
  document.getElementById('app')
);



