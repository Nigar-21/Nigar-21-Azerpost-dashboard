import { useState } from 'react';
import './assets/scss/main.scss';
import Header from "./components/header"
import Sidebar from "./components/sidebar"
import Home from "./components/home"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
   <Sidebar/>
   <Home/>
    </>
  )
}

export default App
