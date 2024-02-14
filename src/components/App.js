import React from 'react';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import Greeting from './Greeting';

const Home = () => (
  <div>
    <h1>Welcome to the Home Page</h1>
    <Link to="/greetings">Go to Greetings</Link>
  </div>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/greetings" element={<Greeting />} />
    </Routes>
  </BrowserRouter>
);

export default App;
