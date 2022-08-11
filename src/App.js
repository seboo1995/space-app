import './App.css';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Technology from './components/technology/Technology';
import Crew from './components/crew/Crew';
import Destination from './components/destination/Destination'
import Home from './components/Home/Home'
import { MyNavBar } from './components/MyNavBar/MyNavBar';

function App() {
  return (
    <BrowserRouter>
      <MyNavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
