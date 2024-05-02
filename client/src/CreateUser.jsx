import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {

  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [age,setAge] = useState()
  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/createUser",{name,email,age})
    .then(result => {console.log(result)
      navigate("/")
    })
    .catch(err => console.log(err))
  }
  return (
    <div>
      <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
          <form onSubmit={Submit}>
          <h2>Add Users</h2>
            <div className='mb-2'>
            <label>Name</label>
            <input type='text' placeholder='Enter your name' className='form-control' onChange={(e) => setName(e.target.value)}/>
            </div>
            <div  className='mb-2'>
            <label>Email</label>
            <input type='text' placeholder='Enter your email'  className='form-control' onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div  className='mb-2'>
            <label>Age</label>
            <input type='text' placeholder='Enter your age'  className='form-control' onChange={(e) => setAge(e.target.value)}/>
            </div>
            <div>
            <button className='btn btn-success'>submit</button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default CreateUser
