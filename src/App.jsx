import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as yup from "yup"

function App() {

  const form = [
    {
      name: 'Username',
      type: 'text',
      placeholder: 'Enter your name'
    },
    {
      name: 'Email',
      type: 'email',
      placeholder: 'Enter your email'
    },
    {
      name: 'Password',
      type: 'password',
      placeholder: 'Enter your password'
    },
    {
      name: 'Confirmpassword',
      type: 'password',
      placeholder: 'Enter your confirmpassword'
    
    },
  ]

  const [count, setCount] = useState(0)

  function Submit() {
    alert(username + ' ' + email + ' ' + password + ' ' +confirmpassword);
}

  const Schemas = yup.object().shape({
    Username: yup.string().required("This is required"),
    Email: yup.string().email("Please provide a valid email").required("Email is required"),
    Password: yup.string().max(8, "Password must be at least 8 characters").required("Password is required"),
    Confirmpassword: yup.string().oneOf([yup.ref("password")], "password not match").required("Confirmed password is required")
  })

  return (
    <div className=' flex p-8 justify-center items-center '>

      <Formik initialValues={{
        Username: "",
        Email: "",
        Password: "",
        Confirmpassword: ""
      }}
        validationSchema={Schemas}
        onSubmit={(values) => {
          console.log(values)
        }}>
        <Form>
          <div className='bg-gradient-to-t from-pink-300 to-gray-300 flex flex-col px-8 py-2 rounded-3xl '>
            <div className='flex flex-row  font-bold justify-center text-red-600 text-2xl'>
              <h1>Login</h1>
            </div>
            <div className='flex flex-col gap-1 px-4 py-2 '>{
              form.map((val, i) => {
                return (
                  <div key={i} className='flex flex-col mx-3 my-3'>
                    {val.name}
                    <Field name={val.name} type={val.type} className='px-1' placeholder={val.placeholder} />
                    <ErrorMessage name={val.name} component={'div'} className='text-red-500' />
                  </div>
                )
              })
            }
              <div className='flex justify-center gap-3 mx-4 my-2'>
                <button type='submit' className='  flex flex-wrap justify-center px-2 py-1 bg-red-500  rounded-2xl items-center'>Submit</button>
              </div>
            </div>
          </div>
      </Form>
    </Formik>

    </div >
  )
}

export default App
