
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Contact from './Components/Contact';
import './App.css';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import { Route, Routes } from "react-router-dom";




function App() {
  const [Mode, setMode] = useState("light");
  const [itext, settext] = useState(" Enable Dark Mode")
  const [alert, setalert] = useState("null");
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type

    });
  }
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      settext("Enable light mode");
      showalert("Dark mode is Enabled", "success");
    }
    else {
      setMode("light");
      settext("Enable Dark Mode");
      showalert("Light mode is enabled", "success");
    }
  }
  return (
    <>
      <Navbar title="Text-Format" aboutText="About" Mode={Mode} toggleMode={toggleMode} itext={itext} />
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/" element={<TextForm showalert={showalert} heading="Enter the text to analyze below" Mode = {Mode}/>}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path = "/contact" element={<Contact/>}></Route>
      </Routes>

    </>
  );
}


export default App;
