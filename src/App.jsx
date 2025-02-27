import { useState } from 'react';
import './assets/scss/main.scss';
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddPackage from './pages/AddPackage';
import CustomContent from './components/customContent';
import CustomSlider from './components/customSlider';

function App() {

  return (
    <>
    <Header />
    <Sidebar/>
    <CustomContent >
      {/* <Home/> */}

    <AddPackage />
    </CustomContent>
    </>
  )
}

export default App
