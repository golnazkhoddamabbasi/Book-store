import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter , Route , Routes} from "react-router-dom"
import App from './App';
import About from "./component/About"
import Books from "./component/books"
import Book from "./component/book"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>

  <Route path="/" element={<App/>}>
  <Route path='/about' element={<About/>} />
  <Route path='/books' element={<Books/>}>
  <Route index element={
    <main style={{margin:"1rem"}}>
    <p>select your book !</p>
    </main>
  }/>
  <Route path=':bookId' element={<Book/>}/>
  </Route>
  <Route path='*' element={
    <main style={{padding:"1rem"}}>
      <p> not found ...!</p>

    </main>
  }/>
  </Route>
  
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

