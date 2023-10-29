import { Routes, Route } from "react-router-dom"
import LoginApp from './Pages/Login/LoginApp'
import StudentApp from './Pages/Student/StudentApp'
import TeacherApp from './Pages/Teacher/TeacherApp'
import './App.css';

function App() {
    return ( 
        <div className = "" >
        <Routes >
            <Route path = "/Login" element = { < LoginApp /> } /> 
            <Route path = "/Teacher/*" element = { < TeacherApp /> } />
            <Route path = "/Student/*" element = { < StudentApp /> } />
        </Routes> 
        </div>

    );
}

export default App;