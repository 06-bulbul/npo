import "./App.css";

import About from "./pages/about";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        
        <switch>
          <Route path="/about" exact element={About} />
          </switch>
    
      </Router>
    </div>
  );
}

export default App;


