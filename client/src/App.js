import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </header>
    </div>
  </Router>
  );
}

export default App;
