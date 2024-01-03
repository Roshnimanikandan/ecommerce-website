/*import React from 'react';
import './Signup.css';
function Signup(){
  return (
    <div>
      <form class="form">
    <fieldset>
      <label><b>FirstName:</b>
        <input type="text" placeholder="Firstname"></input>
      </label>
      <br></br>
      <label><b>LastName:</b>
        <input type="text" placeholder="Lastname"></input>
      </label>
      <br></br>
      <label><b>DateofBirth:</b>
        <input type="date" placeholder="dob"></input>
      </label>
      <br></br>
      <label><b>Email:</b>
        <input type="email" placeholder="@gmail"></input>
      </label>
      <br></br>
      <label><b>CreatePassword:</b>
        <input type="password" placeholder="CreatePassword"></input>
      </label>
      <br></br>
      <label><b>ConfirmPassword:</b>
        <input type="password" placeholder="ConfirmPassword"></input>
      </label>
      <br></br>
      <button>Signup</button>
<br></br>
    </fieldset>
  </form>
    </div>
  );
};

export default Signup*/

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
const Signup = () =>
{
    const navigate = useNavigate();
    const handleSubmit = ()=>{
        console.log("Registration Successful.");
        navigate('/');
    }
    return(
        <div>
            <form onSubmit={handleSubmit} className="form">
                <h2>Sign-Up</h2>
                <input type="textarea" placeholder="Username" required></input><br/>
                <input type="email" placeholder="Email-ID" required></input><br/>
                <input type="password" placeholder="Password"required></input><br/>
                <input type="password" placeholder="Confirm Password"required></input><br/>
                <br/>
                <button type='submit'>Sign-Up</button>
            </form>
        </div>
    )
}

export default Signup;