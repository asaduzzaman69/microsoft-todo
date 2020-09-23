import React from 'react'
import './add-list-button.css'
import { connect  } from 'react-redux'
import { toggleHidden } from '../../redux/new-items/new-items.action'

const AddButton = ({toggle}) => (
    <div class="btn-container">
    <span class="icon-holder">
    <a class="add-btn" onClick={toggle}><i class="fas fa-plus"></i> New List</a>
    </span>
    <span class="group"><i class="fas fa-object-group"></i></span>
 </div>
)

const mapDispatchToProps = dispatch => ({
    toggle:() => dispatch(toggleHidden())
})

export default connect(null,mapDispatchToProps)(AddButton);