import { Fragment, useState } from "react"
import { useNavigate } from "react-router-dom";

const Signin = ({ handleLogin, isLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate  = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin()
        if ( isLogin ) {
            navigate("/");
        } 
    }
    return (
        <Fragment>
            <div className="wrapper">
                <div className="col-right">
                    <div className="login-form">
                        <h2>Login</h2>
                        <form>
                            <p>
                                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="email" required />
                            </p>
                            <p>
                                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" required />
                            </p>
                            <p>
                                <button onClick={(e)=>handleSubmit(e)} className="btn">Sign in</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Signin