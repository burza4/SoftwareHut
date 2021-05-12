import React from 'react';
import { Switch ,Route,BrowserRouter} from 'react-router-dom';

import Home from './views/home/Home';
import Book from './views/book/Book';
import Reservation from './views/reservation/Reservation';
import BooksList from './views/booksList/BooksList';
import Page404 from './views/page404/Page404';

import './App.css';


const App = () => {
  

  
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/book/:id" component={Book} />
          <Route path="/booksList/" component={BooksList} />
          <Route path="/reservation/" component={Reservation} />
          <Route path="/" component={Home} exact />
          <Route path = "*" component={Page404}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
