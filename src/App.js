import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  const [details, setDetails] = useState({
    name: '',
    email: '',
    phone:''
  })

  function handleInputText(e){
    setDetails({ ...details, [e.target.name]: e.target.value });
    console.log(details)
  }
  
  return (
    <div className="App">
      <div className='form-div'>
      <h1>Please Enter Your Details</h1>
      <div>
        <h4>Name</h4>
        <input 
          type="text"
          value={details.name}
          onChange={handleInputText}
        ></input>
      </div>
      <div>
        <h4>Email Address</h4>
        <input 
          type="text"
          value={details.email}
          onChange={handleInputText}
          ></input>
      </div>
      <div>
        <h4>Phone Number</h4>
        <input 
        type="text"
        value={details.phone}
        onChange={handleInputText}
        ></input>
      </div>
      <div>
        <form>
          <button>Submit</button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default App;
