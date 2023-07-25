import React, { useState } from 'react';
import Navbar from './components/navbar';
import News from './components/news';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const apiKey = '675460c240184c16a44c88b4393e2a30';
  const [progress, setProgress] = useState(0);

  return (
    <div style={{ backgroundColor: '#F1F2F3ff' }}>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={9} country="in" category="general" />
            }
          />
          <Route
            path="/business"
            element={
              <News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={9} country="in" category="business" />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="entertainment"
                pageSize={9}
                country="in"
                category="entertainment"
              />
            }
          />
             <Route
            path="/general"
            element={
              <News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={9} country="in" category="general" />
            }
          />
          <Route
            path="/health"
            element={<News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={9} country="in" category="health" />}
          />
          <Route
            path="/science"
            element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={9} country="in" category="science" />}
          />
          <Route
            path="/sports"
            element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={9} country="in" category="sports" />}
          />
          <Route
            path="/technology"
            element={
              <News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={9} country="in" category="technology" />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
