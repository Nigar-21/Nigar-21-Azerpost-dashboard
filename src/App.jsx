import { useState } from 'react';
import './assets/scss/main.scss';
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import AddPackage from './pages/AddPackage';
import CustomContent from './components/customContent';
import CustomSlider from './components/customSlider';

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar((prev) => !prev);
    
  };
  return (
    <Router>
      <>
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar openSidebar={openSidebar} /> 

        <Routes>
          <Route path="/" element={<CustomContent><Home /></CustomContent>} />
          <Route path="/addPackage" element={<CustomContent><AddPackage /></CustomContent>} />
        </Routes>
      </>
    </Router>
  )
}

export default App
