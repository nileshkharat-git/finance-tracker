import { useState } from "react";
import axios from "axios";
import config from "../config";
import { useNavigate, Link } from "react-router-dom";

const Signin = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        "username": "",
        "email": "",
        "password": "",
        "cnf_password": "",
        "phone_number": "",
        "bank_account_number": "",
        "ifsc_code": ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setData((prevData) => ({
            ...prevData,
            [name]: value
        }))

    }

    const handleSigin = event => {
        event.preventDefault();

        const options = {
            method: "POST",
            url: `${config.API_BASE_URL}/accounts/register_user/`,
            data: data
        }

        axios.request(options)
            .then(response => {
                if (response.status === 201) {
                    setData({
                        "username": "",
                        "email": "",
                        "password": "",
                        "cnf_password": "",
                        "phone_number": "",
                        "bank_account_number": "",
                        "ifsc_code": ""
                    })
                    return navigate("/")
                }
            }
            )
            .catch(err => console.log(err)
            )

    }
    return (
        <form className="border border-white w-6/12 p-4 mx-auto rounded-md mt-8 max-[768px]:w-10/12 " onSubmit={handleSigin}>
            <h1 className="text-4xl font-bold text-center max-[768px]:text-3xl ">Welcome to MoneyMap</h1>
            <div className="grid grid-cols-2 w-full gap-y-4 place-items-center max-[768px]:grid-cols-1">
                <div className="flex flex-col w-8/12 max-[768px]:w-10/12">
                    <label htmlFor="username" className="ml-1">Username</label>
                    <input type="text" name="username" value={data["username"]} placeholder="Set username" onChange={handleChange}
                        className="rounded-md" />
                </div>
                <div className="flex flex-col w-8/12 max-[768px]:w-10/12">
                    <label htmlFor="email" className="ml-1">Email</label>
                    <input type="text" name="email" value={data["email"]} placeholder="example@domain.com" onChange={handleChange}
                        className="rounded-md" />
                </div>
                <div className="flex flex-col w-8/12 max-[768px]:w-10/12">
                    <label htmlFor="password" className="ml-1">Password</label>
                    <input type="password" name="password" value={data["password"]} placeholder="eg:cjskh$lkc" onChange={handleChange}
                        className="rounded-md" />
                </div>
                <div className="flex flex-col w-8/12 max-[768px]:w-10/12">
                    <label htmlFor="cnf_password" className="ml-1">Confirm password</label>
                    <input type="password" name="cnf_password" value={data["cnf_password"]} placeholder="Re-enter password here" onChange={handleChange}
                        className="rounded-md" />
                </div>
                <div className="flex flex-col w-8/12 max-[768px]:w-10/12">
                    <label htmlFor="phone_number" className="ml-1">Phone number</label>
                    <input type="text" name="phone_number" value={data["phone_number"]} placeholder="+91 xxxxxx123" onChange={handleChange}
                        className="rounded-md" />
                </div>
                <div className="flex flex-col w-8/12 max-[768px]:w-10/12">
                    <label htmlFor="ifsc_code" className="ml-1">IFSC Code</label>
                    <input type="text" name="ifsc_code" value={data["ifsc_code"]} placeholder="Bank branch code" onChange={handleChange}
                        className="rounded-md" />
                </div>
                <div className="flex flex-col w-8/12 max-[768px]:w-10/12">
                    <label htmlFor="bank_account_number" className="ml-1">Bank Account number</label>
                    <input type="text" name="bank_account_number" value={data["bank_account_number"]} placeholder="xxxxxxx789" onChange={handleChange}
                        className="rounded-md" />
                </div>
            </div>
            <div className="my-8 w-full">
                <button type="submit" className="text-white text-md border border-white px-4 py-2 rounded-sm block mx-auto hover:cursor-pointer">Create account</button>
            </div>
            <Link className="text-sm text-center block hover:cursor-pointer" to="/">Already have an account? Login</Link>
        </form>
    )
}

export default Signin;