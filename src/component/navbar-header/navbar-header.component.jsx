import React from 'react'
import './navbar-header.styles.css'
import { connect } from 'react-redux'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { auth } from '../../firebase/firebase.utilites'

const NavbarHeader = ({currentUser}) => {
    const { email,displayName } = currentUser

    return (
    <div className="navbar-header">
        <h1 className="header-tittle">Microsoft Todo</h1>
        <img src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg" 
        width="100px"
        alt="logo" />
        <div className="nav-header-info">
           <h1 onClick={ () => auth.signOut()}>{displayName}</h1>
        <h1 className="gmail">demo@gmail.com</h1>  
        </div>
       
    </div>
    )
}

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(NavbarHeader);