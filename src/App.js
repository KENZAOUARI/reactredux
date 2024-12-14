//redux = state management 
//props drilling
//partage de données avec plusieurs composants en utilisant un seul state
//probleme degobage 
//les appels asynchrone(API) CRUD (create read update delete)
//installer extension redus dev
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Home from './Home.jsx';
import Update from './Update.jsx';

import Create from './Create.jsx';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}  />
      <Route path='/add' element={<Create />} />
      <Route path='/edit/:id' element ={<Update />} />
    </Routes>
    </BrowserRouter>



  )
}

export default App 