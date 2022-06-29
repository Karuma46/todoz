import { PromptContextProvider } from 'components/prompt/context';
import { TasksContextProvider } from 'pages/context';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/home';

const App = () => {
  return (
    <div className="App">
      <TasksContextProvider>
        <PromptContextProvider>
          <Router>
            <Routes>
              <Route path="*" element={<Home />} />
            </Routes>
          </Router>
        </PromptContextProvider>
      </TasksContextProvider>
    </div>
  );
}

export default App;
