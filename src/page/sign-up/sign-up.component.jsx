import React,{useState} from 'react'
import FormInput from '../../component/form-input/form-input.component'
import {Link} from 'react-router-dom'
import CustomButton from '../../component/custom-button/custom-button.component'
import { auth,createUserProfileDocument } from '../../firebase/firebase.utilites'
import './sign-up.styles.css'


const SignUp = () => {
  const [userCredentials,setUserCredentials] = useState({displayName:'',email:'',password:'',confirmPassword:''})
  const {displayName,email,password,confirmPassword} = userCredentials;

  const handleChange = e => {
    const { name,value } = e.target
    setUserCredentials({...userCredentials,[name]:value})
  }
  const handleSubmit = async e => {
    e.preventDefault();
   const {user} = await auth.createUserWithEmailAndPassword(email,password)
   if(password != confirmPassword) {
     alert('Password Don"t Match')
     return;
   }
   const res = await createUserProfileDocument(user,{displayName})
   console.log(res)
  }
   return (  
     <>
    <div class="container-contact100">
		<div class="wrap-contact100">
			<form class="contact100-form validate-form" onSubmit={handleSubmit}>
				<span class="contact100-form-title">
					Sign Up
				</span>
         <FormInput
        name='displayName'
        type='text'
        value={displayName}
        label="Your name"
        handleChange={handleChange}
        placeholder="displayname"
        />
  
        <FormInput
        name='email'
        type='email'
        value={email}
        label="Your Email"
        handleChange={handleChange}
        placeholder="email"
        />
        <FormInput
        name='password'
        type='password'
        value={password}
        label="Input Your Password"
        handleChange={handleChange}
        placeholder="password"
        />
       <FormInput
        name='confirmPassword'
        type='password'
        value={confirmPassword}
        label="Input your password"
        handleChange={handleChange}
        placeholder="password"
        />

      <CustomButton type='submit' >Log In</CustomButton>
      <h4 className="question">Already Have An account ? <span><Link to='/login'>SIGN IN</Link></span></h4>

			</form>
		</div>
	</div> 
  </>
)
}

export default SignUp;