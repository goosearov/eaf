import  {React, useContext, useState} from "react";
import { useAuth } from "../../contexts/auth";
import Logo from "../../assets/Logo.png"
import "./styles.css"


const SignIn = () => {
  const [email, setEmail] = useState("admin@mail.com");
  const [password, setPassword] = useState('admin123');

  const {signIn} = useAuth();

  const handleSignIn = (event) => {
    event.preventDefault();
    signIn(email, password);
  }

  return (
  <div className="container">
    <div className="logo">
      <img src={Logo} alt="logo" />
    </div>
    <div className="formContainer">
      <form onSubmit={handleSignIn}>
        <div className="formInput">
          <label>USERNAME</label>
          <input label="email" onChange={(e) => {setEmail(e.target.value)}} value={email}/>
        </div>
        <div className="formInput">
          <label>PASSWORD</label>
          <input type="password" label="password" onChange={(e) => {setPassword(e.target.value)}} value={password}/>
        </div>
        <div className="button">
          <button className="login" type="submit">Login</button>
        </div>
      </form>
    </div>
  </div>
    
  )
};

export default SignIn;
