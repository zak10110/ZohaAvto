
import './App.css';
import Main from './components/MainComponent'
import AddCard from './components/AddCarComp'

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/addcard" element={<AddCard />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
