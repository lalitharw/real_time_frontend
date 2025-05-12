import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

function App() {
  const [credentials,setCredentials] = useState({
    email:"asdf",
    password:""
  })

  const handleChange = (e) => {
    const {name,value} = e.target
    setCredentials({...credentials, [name]:value})
  }

  const login = () => { 
     axios.post(`${process.env.BASE_URL}auth/login`,credentials).then(response => {
      if(response && response.success === true){
        localStorage.setItem("access-token",response.token)
      }
    })
  }
 
  return (
   <>
   <input type="text" name="email" id="" value={credentials.email} onChange={handleChange} />
   </>
  )
}

export default App
