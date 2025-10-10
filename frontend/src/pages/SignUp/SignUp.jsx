import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import { useState } from "react"
import { registerUser } from "../../api/api"

const SignUp = () => {
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        if (e.target.password.value != e.target.password2.value) {
            setError("Password don't match")
            return
        }
        const user = {
            username: e.target.username.value,
            password: e.target.password.value,
            email: e.target.email.value,
        }

        try {
            const data = await registerUser(user)
            console.log(data)
        } catch (err) {
            console.error(err)
            setError(err.message)
        }
    }
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1 className="auth-title">Sign Up</h1>
                {error.length > 0 && <div className="auth-error">{error}</div>}
                <form onSubmit={handleSubmit} className="auth-form">
                    <Input placeholder="username" required name="username"></Input>
                    <Input placeholder="email" required name="email"></Input>
                    <Input placeholder="password" required name="password" type="password"></Input>
                    <Input placeholder="Repeat password" required name="password2" type="password"></Input>
                    <Button>Sign Up</Button>
                </form>
                <footer className="auth-footer">
                    <Link to="/signin">Sign In</Link>
                </footer>
            </div>
        </div>
    )
}
export default SignUp