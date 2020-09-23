import React from 'react'
import { Route,withRouter } from 'react-router-dom';

//component
import Demo from '../../component/demo/demo.component'
import Navbar from '../../component/navbar/navbar.component'

//library
import { connect } from 'react-redux'

//selector
import { selectListData } from '../../redux/items/items.selector'


const HomePage = ({match,listData}) => {
  console.log(listData)
   return (  
     <div>
       <Navbar listData={listData} />
        <Route  path={`${match.path}/:Id`} component={Demo} />
     </div>
    
    
)}

const mapStateToProps = state => ({
  listData: selectListData(state)
})

export default withRouter(connect(mapStateToProps)(HomePage));