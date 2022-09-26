//import './App.css';
import Home from './pages';

import { HashRouter, Routes, Route} from 'react-router-dom'



function App() {
  return (
    <HashRouter base='/'>
      <Routes>
        <Route path='/' element={ <Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
