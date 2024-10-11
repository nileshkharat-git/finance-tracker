import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {
  TextInput,
  Label,
  Datepicker,
  Button,
  Select,
  Textarea,
} from "flowbite-react"

// components
import AlertBox from './AlertBox'

// hooks
import useToken from '../hooks/useToken'

const Expense = () => {
  const { token } = useToken()
  const [message, setMessage] = useState(null)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://127.0.0.1:8000/transactions/expense/categories",
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
  }, [])

  const formSubmit = event=>{
    event.preventDefault()
    const options = {
      method:"POST",
      url:"http://127.0.0.1:8000/transactions/expense/",
      headers:{
        Authorization:"Bearer "+token
      },
      data:{
        amount:event.target.amount.value,
        category:event.target.category.value,
        description:event.target.description.value,
        date:event.target.date.value
      }
    }

    axios.request(options)
    .then(response=>{
      setMessage(response.data)
    })
    .catch(error=>{
      console.error(error);
    })
  }
  return (
    <div className="">
      {message != null ? <AlertBox message={message} /> : null}
      <form
        method="post"
        className="w-1/2 mx-auto my-8 shadow-lg p-4"
        onSubmit={formSubmit}
      >
        <h2 className="text-3xl text-center">Add Expense</h2>
        <div className="w-1/2">
          <div className="mb-2">
            <Label htmlFor="amount" value="Amount" />
          </div>
          <TextInput placeholder="Amount in &#8377;" name="amount" />
        </div>
        <div className="w-1/2">
          <div className="mb-2">
            <Label htmlFor="category" value="Category" />
          </div>
          <Select id="category" name="category">
            {categories.map((category, key) => (
              <option key={key} value={category[0]}>
                {category[1]}
              </option>
            ))}
          </Select>
        </div>
        <div className="w-1/2">
          <div className="mb-2">
            <Label htmlFor="description" value="Description" />
            <Textarea placeholder="Description (optional)" name="description" />
          </div>
        </div>
        <div className="w-1/2">
          <div className="mb-2">
            <Label htmlFor="date" value="Date" />
          </div>
            <Datepicker name="date"/>
        </div>
        <div className="w-full my-8 mx-4">
          <Button color="success" size="md" className="w-1/5" type="submit"> 
            Add
          </Button>
        </div>
      </form>
      
    </div>
  )
}

export default Expense