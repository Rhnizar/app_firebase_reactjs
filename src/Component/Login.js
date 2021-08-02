import React,{useState} from 'react';
import {useHistory,Link} from 'react-router-dom';
import {auth} from '../firebase/firebase';
import 'C:/Users/Rhnizar/OneDrive/Bureau/app1/src/index.css';
const initialstate = {email:'',password:''}
const Login=()=>
{
    let history=useHistory();
    const [input,setinput] = useState(initialstate);
    const [error, setError] = useState(null);
    const handleinputchange = ({target})=>{
           setinput({
               ...input,
               [target.name]: target.value,
           });
           setError('');
    };
    const HandleFormSubmit = async(e)=>{
          e.preventDefault();
          try
          {
               await auth.signInWithEmailAndPassword(input.email,input.password)
                setinput(initialstate);
                history.push("hello");
          }
          catch(error)
          {
              setError(error.message);
          }
    };
    return(
        <div className="login">
        
        <div className="form-singup">
             <div className="shap"></div>
             <div className="btn-singup-exit" id="exit"></div>
               <h1>Login</h1>
               <form onSubmit={HandleFormSubmit}>
                   
                   <div className="input-text">
                       <label ><b>Email</b></label>
                       <input type="email" name="email" id="EMAIL" required value={input.email} onChange={handleinputchange} autoComplete="off" placeholder="yours@sanadtech.com"/>
                   </div>
                   <div className="input-text">
                       <label ><b>Password</b></label>
                       <input type="password" name="password" id="PASSWORD" required onChange={handleinputchange} autoComplete="off" value={input.password} placeholder="password"/>
                   </div>
                   <div className="btn">
                    <button className="btn-submit">Connexion</button><br/>
                    <p className="form_error">{error}</p>
                    <p>You don't have an account ? <Link to="/sign">Create an account</Link></p>
                </div>
                   </form>
                   </div>
                   </div>
                
    );
}
export default Login;