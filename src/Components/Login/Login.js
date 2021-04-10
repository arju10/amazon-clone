import { AlarmTwoTone } from "@material-ui/icons";
import React ,{useState}from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import "./Login.css";

const Login = () => {
  const history  = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e =>{
        e.preventDefault();
        // Some fancy firebase login shittt.....
        auth.signInWithEmailAndPassword(email, password)
        .then(auth =>{
          history.push('/')
        })
        .catch( error=> alert(error.message) )
    }
    const register = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) =>{
          //it successfully created a new user with email and password
          // console.log(auth);
          if (auth){
            history.push('/')
          }
        })
        .catch(error =>alert(error.message))
        //here do some firebase register ......
    }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form action="">
          <h5>E-mail</h5>
          <input type="text" value = {email} onChange={e =>setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type="password" value = {password} onChange = {e=> setPassword(e.target.value)} />

          <button className = "login__signInButton" type = 'submit'onClick = {signIn}>Sign-In</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of USe &
          Sale . Please see our Privacy Policy Notice, our Cookies Notice and
          our Interest-Based Ads Notice
        </p>
        <button className  = "login__registerButton" type ="submit" onClick = {register}> Create Your Amazon Account</button>
      </div>
    </div>
  );
};

export default Login;
<h1>Sign In</h1>;
