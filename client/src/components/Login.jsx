import React, { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import config from "../config"
import { useAuth } from "../context/token"

const Login = () => {
  const {login} = useAuth() 
  const [data, setData] = useState({
    "username": "",
    "password": ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prevDate) => ({
      ...prevDate,
      [name]: value
    }))
  }
  const handleLogin = async event => {
    event.preventDefault();
    const options = {
      method: 'POST',
      url: `${config.API_BASE_URL}/api/token/`,
      data: data
    };
    await axios.request(options).then((response) => {
      if(response.status === 200){
        login(response.data["access"])
      }
      
    }).catch((error) => {
      console.error(error);
    });
  }
  return (
    <form className="w-1/3 shadow-lg px-1 py-4 mx-auto my-40 border border-white h-80 max-[425px]:w-10/12" onSubmit={handleLogin} >
      <h2 className="text-2xl mx-auto text-center px-2 text-white py-1">Welcome back</h2>
      <section className="flex flex-col w-100 items-center justify-between h-2/4 mb-2">
        <div className="flex flex-col w-8/12 max-[425px]:w-10/12">
          <label htmlFor="username" className="ml-1">Username</label>
          <input type="text" name="username" value={data["username"]} placeholder="Set username" onChange={handleChange}
            className="rounded-md" />
        </div>
        <div className="flex flex-col w-8/12 max-[425px]:w-10/12">
          <label htmlFor="password" className="ml-1">Password</label>
          <input type="password" name="password" value={data["password"]} placeholder="********" onChange={handleChange}
            className="rounded-md" />
        </div>
      </section>
      <button
        className="block w-1/4 px-1 py-2 mx-auto my-3 text-white border border-white rounded-md text-lg max-[425px]:w-10/12"
        type="submit">
        Login
      </button>
      <Link className="text-sm text-center block hover:cursor-pointer" to="/signin">Don't have an account? Sign Up</Link>
    </form>
  )
}

export default Login
