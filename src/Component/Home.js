import React from 'react';
import {useHistory} from 'react-router-dom';
import 'C:/Users/Rhnizar/OneDrive/Bureau/app1/src/index.css';
const Home = ()=>{
    let history = useHistory();
    function logout()
    {
        history.push("");
    }
    return(
        <div className="home">
        <h1>The information has been registered successfully !!!</h1><br/>
        <button onClick={logout} id="btn">Logout</button>
        </div>
    );
}
export default Home;
