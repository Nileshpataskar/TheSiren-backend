import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ArticleProvider } from './ArticleContext';
import ArticlePage from './ArticlePage';
import ArticleDetails from './ArticleDetails';
// import Signin from './login/Signin';
// import Signup from './login/Signup';
import HomePage from './HomePage';
import StartingPage from './StartingPage';

function App() {
  return (
    <ArticleProvider>
      <div>

        <StartingPage/>
        <Routes>
          
          {/* <Route path="/" element={<Signup />} /> */}
          {/* <Route path='/signin' element={<Signin />} /> */}

          <Route path="/home" element={<HomePage />} />

          <Route path="/category/:category" element={<ArticlePage />} />
          <Route path="/article/:id" element={<ArticleDetails />} />
        </Routes>
      </div>
    </ArticleProvider>
  );
}

export default App;
