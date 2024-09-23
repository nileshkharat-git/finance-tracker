import React, { useState } from "react"
import axios from "axios"


const Login = ({setToken}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)

  const handleSignin = event => {
    
  }

  const handleLogin = event => {
    event.preventDefault();
    const options = {
        method: 'POST',
        url: 'http://127.0.0.1:8000/api/token/',
        data: {email: email, password: password}
      };
      axios.request(options).then((response) => {
        setToken(response.data['access'])
      }).catch((error) => {
        console.error(error);
      });
      setEmail("")
      setPassword("")    
  }
  return (
    <form className="w-1/4 shadow-lg px-2 py-8 mx-auto my-60" onSubmit={isLogin?handleLogin:handleSignin} >
      <h2 className="text-4xl relative bottom-8 ml-4 bg-[#24344c] w-36 pl-2 pb-1 text-white font-medium shadow-lg">
        {isLogin ? "Login" : "Sign Up"}
      </h2>
      <input
        type="text"
        value={email}
        className="h-8 border-b-2 m-4 text-lg focus:outline-none"
        placeholder="Email"
        onChange={e => {
          setEmail(e.target.value)
        }}
        required
      />
      <input
        type="password"
        value={password}
        className="h-8 border-b-2 m-4 text-lg focus:outline-none"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
        required
      />
      <button 
        className="block w-1/4 px-1 py-2 m-2 bg-green-600 text-white rounded text-xl active:shadow-md">
        Submit
      </button>
      <a  onClick={() => setIsLogin(!isLogin)} className="text-sm text-center block">{isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}</a>
    </form>
  )
}

export default Login
