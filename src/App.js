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
  const[emailError, setEmailError] = useState('')
  const[thanksMessage, setThanksMessage] = useState(false)

  function handleInputText(e){
    setDetails({ ...details, [e.target.name]: e.target.value });
    console.log(details)
  }

  function submitForm(e){
    e.preventDefault();
    setEmailError('')
    setError('')
    let missingFields = [];
    if (!isValidEmail(details.email)) {
      setEmailError("Invalid email address format");
    }
    for (let key in details) {
      if (!details[key]) {  
        missingFields.push(key);
      }
    }
    if (missingFields.length > 0) {
      setError(`Please fill in the ${missingFields.join(', ')} field`);
    }

    //call mock api
    sendDetails()
    .then(response => response.json())
    .then(data => {
      setThanksMessage(true)
      console.log('Success:', data)
      ;
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    console.log(details);
    setDetails({
      name: '',
      email: '',
      phone: ''
    })
}
  

  function isValidEmail(email) {
    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return pattern.test(email);
  }

  function sendDetails(){
    return fetch('my-mock-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(details),
    })
  }

  return (
    <div className="App">
      
      <h1>Please Enter Your Details</h1>
      
      {error && <p style={{color: 'red'}}>{error}</p>}
      {emailError && <p style={{color: 'red'}}>{emailError}</p>}
      {thanksMessage && <p style={{color: 'red'}}>{thanksMessage}</p>}
      <div className='form-div'>
        <h4>Name</h4>
        <input 
          type="text"
          name='name'
          
          value={details.name}
          onChange={handleInputText}
        ></input>
      
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
      </div>
      <div>
        <form onSubmit={submitForm}>
          <button>Submit</button>
        </form>
      </div>
     
    </div>
  );
}

export default App;
