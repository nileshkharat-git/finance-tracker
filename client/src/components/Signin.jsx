import { useState } from "react";

const Signin = () => {
    const [data, setData] = useState({
        "username": "",
        "email": "",
        "password": "",
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
    return (
        <form className="border border-white w-6/12 p-4 mx-auto rounded-md mt-8">
            <h1 className="text-4xl font-bold text-center ml-8">Welcome to MoneyMap</h1>
            <div className="grid grid-cols-2 w-full gap-y-4 place-items-center">
                <div className="flex flex-col w-8/12">
                    <label htmlFor="username" className="ml-1">Username</label>
                    <input type="text" name="username" value={data["username"]} placeholder="Set username" onChange={handleChange}
                        className="rounded-md" />
                </div>
                <div className="flex flex-col w-8/12">
                    <label htmlFor="email" className="ml-1">Email</label>
                    <input type="text" name="email" value={data["email"]} placeholder="example@domain.com" onChange={handleChange}
                        className="rounded-md" />
                </div>
                <div className="flex flex-col w-8/12">
                    <label htmlFor="password" className="ml-1">Password</label>
                    <input type="password" name="password" value={data["password"]} placeholder="eg:cjskh$lkc" onChange={handleChange}
                        className="rounded-md" />
                </div>
                <div className="flex flex-col w-8/12">
                    <label htmlFor="cnf_password" className="ml-1">Confirm password</label>
                    <input type="text" name="cnf_password" value={data["password"]} placeholder="Re-enter password here" onChange={handleChange}
                        className="rounded-md" />
                </div>
                <div className="flex flex-col w-8/12">
                    <label htmlFor="phone_number" className="ml-1">Phone number</label>
                    <input type="text" name="phone_number" value={data["phone_number"]} placeholder="+91 xxxxxx123" onChange={handleChange}
                        className="rounded-md" />
                </div>
                <div className="flex flex-col w-8/12">
                    <label htmlFor="ifsc_code" className="ml-1">IFSC Code</label>
                    <input type="text" name="ifsc_code" value={data["ifsc_code"]} placeholder="Bank branch code" onChange={handleChange}
                        className="rounded-md" />
                </div>
                <div className="flex flex-col w-8/12">
                    <label htmlFor="bank_account_number" className="ml-1">Bank Account number</label>
                    <input type="text" name="bank_account_number" value={data["bank_account_number"]} placeholder="xxxxxxx789" onChange={handleChange}
                        className="rounded-md" />
                </div>
            </div>
            <div className="my-8 w-full">
                <button type="submit" className="bg-white text-black text-sm px-8 py-2 rounded-sm block mx-auto">Create account</button>
            </div>
        </form>
    )
}

export default Signin;