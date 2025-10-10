import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import { useState } from "react"
import { loginUser } from "../../api/api"

const SignIn = () => {
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        const user = {
            username: e.target.username.value,
            password: e.target.password.value,
        }

        try {
            const data = await loginUser(user)
            const json = await data.json()
            if (!json.success) throw new Error(json.error)
            console.log(json)
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