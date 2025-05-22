import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
//Alert Disappear in 1.5 sec
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // For MultiColor Display
// const removeClassList =() =>{
//   document.body.classList.remove("bg-danger");
//   document.body.classList.remove("bg-warning");
//   document.body.classList.remove("bg-primary");
//   document.body.classList.remove("bg-success");


// }
// const toggleMode = (cls) => {
//   removeClassList();
//   console.log(cls);
//   document.body.classList.add("bg-"+cls);



  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#023047';
      showAlert("Dark mode has been Enabled", "success");
      //Title Chnage
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled", "danger");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* /users -->component1
            /users/home --> component2 */}
            <Route exact path="/about" element={<About  mode={mode} />} />
            <Route exact path="/" element={<TextForm heading="Try TextUtils - Word Couner,Character Counter,Remove Extra Spaces" showAlert={showAlert} mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
