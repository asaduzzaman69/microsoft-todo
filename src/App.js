import React from 'react';
import './App.css';
import { Switch,Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import HomePage from './page/Homepage/homepage.component'
import LoginPage from './page/Login-page/login.component'
import PrivateRoute from './page/private-page/private.component'
import SignUp from './page/sign-up/sign-up.component';
import { auth,createUserProfileDocument } from './firebase/firebase.utilites';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';

class  App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser:null
    }
  }

  componentDidMount() {
    const { setUser } = this.props
    auth.onAuthStateChanged( async userAuth => {
      if(userAuth) {
           const userRef = await createUserProfileDocument(userAuth)
      userRef.onSnapshot(el => {
        setUser({id:el.id,...el.data()})

        
      })
      }
   
      console.log(userAuth)
    })
  }


  render() {
    const { currentUser } = this.props
    return (
    <Switch>
       <Redirect exact from="/" to="homepage" />
      <PrivateRoute  path='/homepage' component={HomePage} />
      <Route exact path='/login' render={() => currentUser ? (<Redirect to='/homepage' />) : <LoginPage />}  />
      <Route exact path='/signup' render={() => currentUser ? (<Redirect to='/homepage' />) : <SignUp />}   />

    </Switch>
  );
  }
} 

const mapStateToProps = state => ({
  currentUser:selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
  setUser:user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
