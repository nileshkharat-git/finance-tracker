import React, { useState } from "react"
import axios from "axios"

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = event => {
    event.preventDefault();
    const options = {
        method: 'POST',
        url: 'http://127.0.0.1:8000/api/token/',
        data: {email: email, password: password}
      };
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
        
    
  }
  return (
    <form className="w-1/4 shadow-lg px-2 py-8 mx-auto my-60" onSubmit={handleSubmit} >
      <h2 className="text-4xl relative bottom-8 ml-4 bg-[#F5004F] w-32 pl-2 pb-1 text-white font-medium shadow-lg">
        Login
      </h2>
      <input
        type="text"
        className="h-8 border-b-2 m-4 text-lg focus:outline-none"
        placeholder="Email"
        onChange={e => {
          setEmail(e.target.value)
        }}
      />
      <input
        type="password"
        className="h-8 border-b-2 m-4 text-lg focus:outline-none"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />
      <button 
        className="block w-1/4 px-1 py-2 m-2 bg-lime-600 text-white rounded text-xl active:shadow-md">
        Submit
      </button>
    </form>
  )
}

export default Login
