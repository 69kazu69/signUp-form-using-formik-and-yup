import logo from './logo.svg';
import './App.css';
import {Formik,  } from "formik"
import * as Yup from "yup"
import { useState } from 'react';

function App() {

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });
const [dis, setdis] = useState(false)

  return (
    <div className='app-container'>
     <h1>Sign Up</h1>
     <Formik
       initialValues={{
         firstName: '',
         lastName: '',
         email: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         console.log(values);
         setdis(true)
       }}
     >
       {({ errors, touched }) => (
         <form>
           <h1 id = "heading">Enter Your Details</h1>
           <label for = "name">First Name</label>
           <input name="firstName" id='name'  />
           {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
           ) : null}
           <label for = "">Last Name</label>
           <input name="lastName" />
           {errors.lastName && touched.lastName ? (
             <div>{errors.lastName}</div>
           ) : null}
           <label for = "password">Email</label>
           <input name="email" type="email" />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
           <button type="submit">{!dis ? "Submit" : "Done!"}</button>
         </form>
       )}
     </Formik>
   </div>
  );
}

export default App;
