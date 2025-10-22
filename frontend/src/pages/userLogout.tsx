import { useNavigate } from "react-router-dom"
import axios from "axios"
import { API_URL } from "@/config/config"


function UserLogout() {

    const token = localStorage.getItem("token")
    const navigate = useNavigate()

     axios.get(`${API_URL}/users/logout`,
        {
        headers:{
            Authorization: `Bearer ${token}`
        }
     }).then((res)=>{
        if (res.status === 200 || res.status === 201) {
            localStorage.removeItem('token')
            navigate("/login")
        }
     })
    

  return (
 <div></div>
  )
}

export default UserLogout