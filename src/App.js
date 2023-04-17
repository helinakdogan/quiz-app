import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduce from './pages/introduce/Introduce'
import Quiz from './pages/quiz/Quiz'

function App() {
  return (
    <div className="">

      {/* These are paths we use to direct different pages. Here we have 2 pages: Introduce and Quiz. 
              Final result will be shown as component (modal), not page. */}

      <Router>
        <Routes>
          <Route path='/' element={<Introduce />} />
          {/* This one will also show difficulty level that user choose and which question user at. */}
          <Route path='/quiz/:difficulty/:amount' element={<Quiz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
