import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
 import SignUp from './components/pages/SignUp';
import  Form  from  "./components/pages/Form"

const defaultValues = {
  name: "",
  email:"",

};
const defaultErrors = {
  name: "",
  email: "",
  
}


function App() {
  //form values
  const [formValues, setFormValues] = useState(defaultValues);
  // store the values from the form
  const [savedFormInfo, setSavedFormInfo] = useState([]);
  const [errors, setErrors] = useState(defaultErrors);

  const change = (evt) => {
    const { name, value } = evt.target;
    setFormValues({...formValues, [name]: value });
  };
  const submit = (evt) => {
    evt.preventDefault();
    
    const newData = {
      name: formValues.name.trim(),
      email: formValues.email.trimend()
    };
    setSavedFormInfo([...savedFormInfo, newData]);
    setFormValues(defaultValues);
  };
  
      return (
        <div className="App">
        <Form formValues={formValues} change={change} submit={submit}/>
   
         
         
        
           <Router>
           <Route>
             <Navbar />
             
             <Switch>
               <Route path='./components/Form' exact component={Form} />
               <Route path='/services' component={Services} />
               <Route path='/products' component={Products} />
               <Route path='/sign-up' component={SignUp} />
             </Switch>
          </Route> 
 
            </Router>
      </div> 
); 
}

  
     
     
     export default App;
       
       
       
        
        
        
        
  
