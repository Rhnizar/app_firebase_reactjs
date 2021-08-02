import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { auth} from '../firebase/firebase';
import {useHistory} from 'react-router-dom';
const initialstate={username:'',email:'',password:'',Confpass:''}
const Sign=()=>
{
  const valid = /[a-zA-Z0-9]+\@sanadtech.com/;
    let history=useHistory();
    const [input,setinput] = useState(initialstate);
    const [error,setError] = useState('');
    const handleinputchange=({target})=>{
        setinput({
            ...input,
            [target.name]:target.value,
        });
        setError('');
    }
    const HandleFormSubmit=async(e)=>{
      e.preventDefault();
      if(input.Confpass!==input.password )
      {
          return setError("password don't match ");
      }
      if(!input.email.match(valid))
      {
          return setError("The email is incorrect. Please enter the email of sanad tech");
      }
      try
      {
          await auth.createUserWithEmailAndPassword(input.email,input.password)
          setinput(initialstate);
          history.push("/home");
      }
      catch(error)
      {
          setError(error.message);
      }
    }
    return(
        <div className="sign">
        <div className="form-singup">
             <div className="shap"></div>
           <div className="btn-singup-exit" id="exit"></div>
               <h1>Sign Up</h1>
               <form onSubmit={HandleFormSubmit}>
                   <div className="input-text">
                       <label ><b>Username</b></label>
                       <input type="text" name="username" id="USERNAME" value={input.username} autoComplete="off" onChange={handleinputchange}  required placeholder="username"/>
                   </div>
                   <div className="input-text">
                       <label ><b>Email</b></label>
                       <input type="text" name="email" id="EMAIL"  value={input.email} onChange={handleinputchange} autoComplete="off" required placeholder="yours@sanadtech.com"/>
                   </div>
                   <div className="input-text">
                       <label ><b>Password</b></label>
                       <input type="password" name="password" required id="PASSWORD" onChange={handleinputchange} value={input.password} autoComplete="off" placeholder="password"/>
                   </div>
                   <div className="input-text">
                       <label ><b>Confirm password</b></label>
                       <input type="password" name="Confpass" required id="confirm" value={input.Confpass} onChange={handleinputchange} autoComplete="off" placeholder="conf pass"/>
                   </div>
                 <div className="btn">
                     <button className="btn-submit">To Validate</button>
                 </div>
                 <p className="form_error">{error}</p>
                 <p>do you have an account ? <Link to="">Sign in with your account</Link></p>
               </form>
         </div>
        </div>
 
    );
}
export default Sign;