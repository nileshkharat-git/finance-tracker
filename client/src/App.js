import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';


const setToken = (userToken)=>{
  sessionStorage.setItem("token", JSON.stringify(userToken))
}

const getToken = ()=>{
  const tokenString = sessionStorage.getItem("token")
  const userToken = JSON.parse(tokenString)
  return userToken?.token
}
function App() {
    const token = getToken()
    if(!token){
      return <>
              <Navbar/>
              <Login setToken={setToken}/>
             </>
    }
  return (
    <>
      <Navbar/>
      <Dashboard/>
    </>
  );
}

export default App;
