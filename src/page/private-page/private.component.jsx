import React from 'react'
import { Route,Redirect,withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.utilites'
import { selectCurrentUser } from '../../redux/user/user.selector'

//const isAuthenticated = true


const PrivateRoute = ({component:Component,isAuthenticated,...rest}) => {


    return (
      <Route 
      {...rest}
      render={props => 
        isAuthenticated ? (
            <Component {...props} />
        ) :  (
            <Redirect
            to={{
                pathname:'/login',
               
            }}
            />
        )
    
    }
      />
    )

}

const mapStateToProps = state => ({
    isAuthenticated: selectCurrentUser(state)
})

export default connect(mapStateToProps)(PrivateRoute);