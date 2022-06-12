import React from 'react';
import SetupQuiz from './components/SetupQuiz';
import {Routes,Route} from 'react-router-dom';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="h-full flex justify-center items-center">
      <Routes>
        <Route path="/" element={<SetupQuiz />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
