import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
    <h1>Hello</h1>
    <Routes>
      <Route path='/'element={<HomePage/>} />
    </Routes>
    </div>
  );
}

export default App;
