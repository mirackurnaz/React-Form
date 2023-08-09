import { useFormik  } from 'formik';
import validationSchema from './valida';

function Sing() {
  const {handleSubmit,handleChange,handleBlur,values,errors,touched} = useFormik({
    initialValues: {
      email: '',
      password:"",
      passwordOnay:"",
    },

    onSubmit: values => {
     console.log(values);
    },
    validationSchema,
  });
    return (
  
        <div className='App'>
          <h1>Sign Up</h1>
          <br/>
       <br/>
     <form onSubmit={handleSubmit}>
       <label htmlFor="email">Email <span>*</span></label>
       <br/>
       <input
         id="email"
         name="email"
         onChange={handleChange}
         value={values.email}
         onBlur={handleBlur}
       />
       <br/>
       
       {errors.email && touched.email && <div className='errors'>{errors.email}</div>} 
       <br/>
       <br/>
       <label htmlFor="password">Password <span>*</span></label>
       <br/>
       <input
         id="password"
         name="password" 
         type='password'
         onChange={handleChange}
         value={values.password}
         onBlur={handleBlur}
       />
       <br/>
       {errors.password && touched.password && <div className='errors'>{errors.password}</div>}
        <br/>
       <br/>
        <label htmlFor="passwordOnay">Password Confirmation <span>*</span></label>
        <br/>
       <input
         id="passwordOnay"
         name="passwordOnay" 
         type='password'
         onChange={handleChange}
         value={values.passwordOnay}
         onBlur={handleBlur}
       /> 
       <br/>
      {errors.passwordOnay && touched.passwordOnay &&  <div className='errors'>{errors.passwordOnay}</div>}
        <br/>
       <br/>
       <button className='button' type="submit">Submit</button>
        
        </form>
        </div>
      );
}

export default Sing

