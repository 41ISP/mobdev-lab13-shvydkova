import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import { useState } from "react"
import { loginUser } from "../../api/api"
import { useUserStore } from "../../store/store"

const SignIn = () => {
    const [error, setError] = useState("")
    const { setJWT } = useUserStore()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        const user = {
            username: e.target.username.value,
            password: e.target.password.value,
        }
        try {
            const data = await loginUser(user)
            if (!data.success) throw new Error(data.error)
            console.log(data)
            setJWT(data.token)
        } catch (err) {
            console.error(err)
            setError(err.message)
        }
    }
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1 className="auth-title">Sign In</h1>
                {error.length > 0 && <div className="auth-error">{error}</div>}
                <form onSubmit={handleSubmit} className="auth-form">
                    <Input placeholder="username" required name="username"></Input>
                    <Input placeholder="password" required name="password" type="password"></Input>
                    <Button>Sign In</Button>
                </form>
                <footer className="auth-footer">
                    <Link to="/signup">Sign Up</Link>
                </footer>
            </div>
        </div>
    )
}
export default SignIn