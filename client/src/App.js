import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
