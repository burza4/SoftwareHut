import React from 'react';
import {Provider} from 'react-redux';
import { Switch ,Route,BrowserRouter} from 'react-router-dom';
import Home from './views/home/Home';
import Book from './views/book/Book';
import BooksList from './views/booksList/BooksList';
import BooksRank from './views/booksRank/BooksRank';
import Page404 from './views/page404/Page404';
import store from './store';

import './App.css';



const App = () => {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Provider store = { store}>
        <Switch>
          <Route path="/book/:id" component={Book} />
          <Route path="/booksList/" component={BooksList} />
          <Route path="/booksRank/" component={BooksRank} />
          <Route path="/" component={Home} exact />
          <Route path = "*" component={Page404}/>
        </Switch>
        </Provider>
      </BrowserRouter>
    </div>
  );
}


export default App;
