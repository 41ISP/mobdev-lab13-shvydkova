import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const AuthGuard = ({children}) => {
    const navigate = useNavigate()
    useEffect(() => {
    const isLoggedIn  = false
    if (!isLoggedIn) navigate("/signin")
    }, [])
    return (children
    )
}
export default AuthGuard