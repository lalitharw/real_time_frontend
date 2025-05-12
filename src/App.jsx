import axios from "axios"
import { useEffect } from "react"

function App() {

  useEffect(() => {
    axios.post(`${process.env.BASE_URL}auth/login`.{
      email:email,
      password:password
    }).then(response => {
      if(response && response.success === true){
        localStorage.setItem("access-token",response.token)
      }
    })
  },[])
  return (
   <>
   <h1>Hello world</h1>
   </>
  )
}

export default App
