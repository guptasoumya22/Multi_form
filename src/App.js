
import "./App.css";
import Final from "./components/Final";
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import Sixth from "./components/Sixth"; 
import Seventh from "./components/Seventh"; 
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/"  element={<Final />} />
        <Route exact path="/searching" element={<Sixth />} />
        <Route exact path="/courses" element={<Seventh />}/>
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
