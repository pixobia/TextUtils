import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alret from './components/Alret';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode , setMode] = useState('light')
  const [alret,setAlret] = useState(null)

  const showAlret = (message,type) =>{
    setAlret({
        msg:message,
        type:type
    })
    setTimeout(() => {
      setAlret(null)
    }, 1500);
  }

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlret('Dark Mode Enableded','success')
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlret('Light Mode Enableded','success')
    }
   
  }
  return (
    <>
    <Router>
     <Navbar title= "pixobia" aboutText='AboutUs' mode={mode} toggleMode = {toggleMode} showAlret = {showAlret}  />
     <Alret alret = {alret}/>
     <div className="container my-3">
       <Routes>
          <Route exact path="/about" element = {<About />} />
          <Route  exact path="/" element = {<TextForm title="Enter Text to Analyze here" mode = {mode} showAlret = {showAlret}/> }/>
        </Routes>
     </div>
     </Router>
    </>
  );
}

export default App;
