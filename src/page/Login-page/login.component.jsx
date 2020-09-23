import React,{useState} from 'react'
import FormInput from '../../component/form-input/form-input.component'
import CustomButton from '../../component/custom-button/custom-button.component'
import { Link } from 'react-router-dom'
import { createUserProfileDocument,auth } from '../../firebase/firebase.utilites'
import './login-page.styles.css'



const LoginPage = () => {
  const [userCredentials,setUserCredentials] = useState({email:'',password:''})
  const {email,password} = userCredentials;

  const handleChange = e => {
    const { name,value } = e.target
    setUserCredentials({...userCredentials,[name]:value})
  }

  const handleSubmit = async  e => {
    e.preventDefault();
    const {user} = await auth.signInWithEmailAndPassword(email,password);
    const res = await createUserProfileDocument(user)
    const res1 = await res.get().then(el => el.data())
    await console.log(res1)


  }
   return (  
     <>
    <div className="container-contact100">
		<div className="wrap-contact100">
			<form className="contact100-form validate-form" onSubmit={handleSubmit}>
				<span className="contact100-form-title">
					Login
				</span>
        <FormInput
        name='email'
        type='email'
        value={email}
        label="Your name"
        handleChange={handleChange}
        placeholder="Your name"
        />
        <FormInput
        name='password'
        type='password'
        value={password}
        label="Input Your Password"
        handleChange={handleChange}
        placeholder="Your name"
        />

      <CustomButton type='submit'>Log In</CustomButton>
      <h4 className="question">Don't Have an account?<span><Link to='/signup'>SIGN UP</Link></span></h4>

			</form>
		</div>
	</div> 
  </>
)
}

export default LoginPage;