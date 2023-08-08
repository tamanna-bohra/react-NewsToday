import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [progress, setProgress] = useState(10)

  let pages = 8;
  let apiKey = "f3ae35dedebf4e3f9341ae2ab46c878b";
  let country = "in";

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          // React router v6
          <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pages} apiKey={apiKey} country={country} category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" title="News Today-Business" pageSize={pages} apiKey={apiKey} country={country} category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" title="News Today-Entertainment" pageSize={pages} apiKey={apiKey} country={country} category="entertainment" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" title="News Today-Health" pageSize={pages} apiKey={apiKey} country={country} category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" title="News Today-Science" pageSize={pages} apiKey={apiKey} country={country} category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" title="News Today-Sports" pageSize={pages} apiKey={apiKey} country={country} category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" title="News Today-Technology" pageSize={pages} apiKey={apiKey} country={country} category="technology" />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;

