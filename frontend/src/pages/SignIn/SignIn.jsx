import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import { useState } from "react"

const SignIn = () => {
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")
    }
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1 className="auth-title">Sign In</h1>
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