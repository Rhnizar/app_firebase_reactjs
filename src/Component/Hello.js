import React from 'react';
import { useContext } from 'react';
import {useHistory} from 'react-router-dom';
import { Authcontext } from '../Context/Auth';
import 'C:/Users/Rhnizar/OneDrive/Bureau/app1/src/index.css';
const Hello =()=>{
    const {user} = useContext(Authcontext);
    let history=useHistory();
    function login()
    {
    history.push("");
    }
    return(
        <div className="hello">
            <h1>You are logged in !!!</h1><br/>
            <h2>welcome {user.email}</h2><br/>
            <button type="submit" onClick={login} id="btn">Logout</button>
        </div>
    );
}
export default Hello;