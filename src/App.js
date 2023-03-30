import React from 'react';
import { Route, Routes} from 'react-router-dom'
import './App.css';

import { Home, Background} from './pages';
import { Header, Footer} from './layout';

function App() {
    return (
      <>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/background" element={<Background />} />
        </Routes>
        <Footer />
      </>
    );
  }
  
  export default App;
