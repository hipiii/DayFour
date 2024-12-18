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

  const Schemas = yup.object().shape({
    Username: yup.string().required("This is required"),
    Email: yup.string().email("Please provide a valid email").required("Email is required"),
    Password: yup.string().max(8,"Password must be at least 8 characters").required("Password is required"),
    Confirmpassword: yup.string().oneOf([yup.ref("password")], "password not match").required("This is required")
  })

  return (
    <>

      <Formik initialValues={{
        Username: "",
        Email: "",
        Password: "",
        Confirmpassword: ""
      }}
      validationSchema={Schemas}
      onSubmit={(values)=>{
        console.log(values)
      }}>
        <Form className=''>
          <div>
            {
              form.map((val, i) => {
                return (
                  <div key={i}>
                    {val.name}
                    <Field name={val.name} type={val.type} placeholder={val.placeholder} />
                    <ErrorMessage name={val.name} component={'div'} className='text-red-500' />
                  </div>
                )
              })
            }
            <div>
              <button type='submit'>Submit</button>
            </div>
          </div>
        </Form>
      </Formik>

    </>
  )
}

export default App
