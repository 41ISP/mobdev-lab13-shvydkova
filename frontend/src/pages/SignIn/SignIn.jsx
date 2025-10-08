import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"

const SignIn = () => {
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1 className="auth-title">Sign In</h1>
                <form className="auth-form">
                    <Input></Input>
                    <Input type="password"></Input>
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