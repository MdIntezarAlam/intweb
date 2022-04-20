import React, { useState } from "react";
import Navbar from './project/Navbar'
import Form from './project/Form'
import Alert from './project/Alert'
function App() {
    const [alert, setAlert] = useState(null)   //This is For Alert Component
    const [mode, setMode] = useState('light'); //This is All Navbar Button Fun

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500)
    }
    //This is Toggle Fun
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = 'grey';
            showAlert("Dark mode has been Enabled", "success");//Alert Method used here
        }
        else {
            setMode('light')
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode is Enabled", "success");//Alert Method used here
        }
    }
    return (
        <div>
            <Navbar mode={mode} toggleMode={toggleMode} />
            <Alert Alert={alert} />
            <div className="container my-3">
                <Form showAlert={showAlert} title="This is Word Counter Project" mode={mode} />
            </div>
        </div>
    )
}
export default App;