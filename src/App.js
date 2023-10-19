import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  const [details, setDetails] = useState({
    name: '',
    email: '',
    phone:''
  })
  const[error, setError] = useState('')

  function handleInputText(e){
    setDetails({ ...details, [e.target.name]: e.target.value });
    console.log(details)
  }

  function submitForm(e){
    e.preventDefault();
    let missingFields = [];

    for (let key in details) {
      if (!details[key]) {  
        missingFields.push(key);
      }
    }

    if (missingFields.length > 0) {
      setError(`Please fill in the ${missingFields.join(', ')} field`);
    } 

    console.log(details);
}
  
  return (
    <div className="App">
      <div className='form-div'>
      <h1>Please Enter Your Details</h1>
      <div>
      {error && <p style={{color: 'red'}}>{error}</p>}
        <h4>Name</h4>
        <input 
          type="text"
          name='name'
          
          value={details.name}
          onChange={handleInputText}
        ></input>
      </div>
      <div>
        <h4>Email Address</h4>
        <input 
          type="text"
          name="email"
          
          value={details.email}
          onChange={handleInputText}
          ></input>
      </div>
      <div>
        <h4>Phone Number</h4>
        <input 
        type="text"
        name="phone"
        
        value={details.phone}
        onChange={handleInputText}
        ></input>
      </div>
      <div>
        <form onSubmit={submitForm}>
          <button>Submit</button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default App;
