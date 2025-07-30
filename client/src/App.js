import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signin from './components/Signin';
import { useAuth } from './context/token';

function App() {
  const {token} = useAuth()

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={!token ? <Login /> : <Dashboard/>} />
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
    </Router>
  )
}

export default App;
