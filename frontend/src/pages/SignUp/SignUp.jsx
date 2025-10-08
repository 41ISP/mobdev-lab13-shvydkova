import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"

const SignUp = () => {
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1 className="auth-title">Sign Up</h1>
                <form className="auth-form">
                    <Input></Input>
                    <Input></Input>
                    <Input></Input>
                    <Input type="password"></Input>
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