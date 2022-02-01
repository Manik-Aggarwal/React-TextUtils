import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {useState} from 'react';
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils-Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  }
  return (
    <>
    <Router>
      <Navbar title = "TextUtils" aboutText = "About textUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>;
      <div className="container my-3">
        <Switch>
          <Route path="/about">
            <About mode={mode}/>
          </Route>
          <Route path="/">
            <TextForm showAlert={showAlert} heading="TextUtils - Counter n Manipulator" mode={mode}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
