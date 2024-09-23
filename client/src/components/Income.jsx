import React, { useEffect, useState } from "react"
import axios from "axios"
import { TextInput, Label, Datepicker, Button, Select, Textarea } from "flowbite-react"

// hooks
import useToken from "../hooks/useToken"

const Income = () => {
  const { token } = useToken()
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://127.0.0.1:8000/api/transactions/categories",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
    axios
      .request(options)
      .then(response => {
        setCategories(response.data)
      })
      .catch(error => {
        console.error(error)
      })
      
  }, [token])
  return (
    <div className="">
      <form method="post" className="w-1/2 mx-auto my-8 shadow-lg p-4">
        <h2 className="text-3xl text-center">Add Income</h2>
        <div className="w-1/2">
          <div className="mb-2">
            <Label htmlFor="amount" value="Amount" />
          </div>
          <TextInput placeholder="Amount in &#8377;" />
        </div>
        <div className="w-1/2">
          <div className="mb-2">
            <Label htmlFor="category" value="Category"/>
          </div>
          <Select id="category">
            {categories.map((category, key) => (
              <option key={key} value={category[0]}>{category[1]}</option>
            ))}
          </Select>
        </div>
        <div className="w-1/2">
            <div className="mb-2">
              <Label htmlFor="description" value="Description" />
              <Textarea placeholder="Description (optional)"/>
            </div>
        </div>
        <div className="w-1/2">
          <div className="mb-2">
            <Label htmlFor="date" value="Date" />
          </div>
          <Datepicker />
        </div>
        <div className="w-full my-8 mx-4">
          <Button color="success" size="md" className="w-1/5">Add</Button>
        </div>
      </form>
    </div>
  )
}

export default Income
