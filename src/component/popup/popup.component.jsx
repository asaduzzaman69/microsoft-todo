
import React from 'react'
import './popup.styles.css'

//library
import { connect } from 'react-redux'

//action
import { addNewItem,toggleHidden } from '../../redux/new-items/new-items.action'
import { addUnlistedTask,AddNewTask } from '../../redux/items/item.action'


//component
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

class PopUp extends React.Component {
    constructor(props) {
        super()
        this.state = {
            list:'',
           
        }
    }
    handleSubmit = async  e => {
        const { list } = this.state
        const { AddNewTask,toggle,addUnlistedTask } = this.props
        e.preventDefault()

        if(list.length) {

        //adding to the unique key
        addUnlistedTask({title:list})

        //adding item to store
        AddNewTask({title:list, which:'newList',className:'list-item-task-active',icon: "fas fa-bars", routeName:`/${list}`})

        //empty the input state
        this.setState({list:''})

        //toggle the popup
        toggle()  
        }
  


        
 
    
            
    }
    handleChange = e => {
     
        const {name,value} = e.target;
        this.setState({[name]:value})
    }

    render(){

        return (
    <div id="popup1" className="overlay">
	<div className="popup">
		<a className="close" href="#">&times;</a>
		<div className="content">
			Create a new list
            <form  onSubmit={this.handleSubmit}>
                 <div>
            <FormInput 
            name='list'
            type='text' 
            value={this.state.list}
            handleChange={this.handleChange}
           
            placeholder='put your channel name'
            
            
            />
  
            </div>
            <CustomButton>Add List </CustomButton>
            </form>
           
         
            
		</div>
	</div>
</div>
)
    }
} 

const mapDisPatchToProps = dispatch => ({
    AddNewTask: item => dispatch(AddNewTask(item)),
    toggle: () => dispatch(toggleHidden()),
    addUnlistedTask:list => dispatch(addUnlistedTask(list))


})

export default connect(null,mapDisPatchToProps)(PopUp);