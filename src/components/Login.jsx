import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()

  const login=async(e)=>{
    e.preventDefault()
    const url=`${process.env.REACT_APP_API_URL}/wp-json/jwt-auth/v1/token`
    const payload={username,password}
    await fetch(url,{
        method:'POST',
        headers:{
           'Content-Type':'application/json'
        },
        body:JSON.stringify(payload)
    })
    .then(res=>res.json())
    .then(data=>{
        const token=data.token 
        localStorage.setItem('wordpress-examination',token)

        if(token===undefined){
            e.target.reset()
            navigate('/login')
        }else{
            navigate('/')
        } 
    })


  }
  return (
    <>
    <div>Login</div>
    <form onSubmit={login}>
        <label>username</label>
        <input type="text" name={username} onChange={e=>setUsername(e.target.value)}/>
        <label>password</label>
        <input type="password" name={password} onChange={e=>setPassword(e.target.value)}/>
        <button type='submit'>login</button>
    </form>
    </>
    
  )
}
