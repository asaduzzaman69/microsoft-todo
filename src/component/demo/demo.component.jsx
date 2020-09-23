import React, { useState } from "react";
import "./demo.styles.css";
//library
import { connect } from "react-redux";


//component
import CustomIcon from "../custom-icons/custom.component";
import ThemeDropDown from "../theme-dropdown/theme-dropdown.component";
import PopUp from '../popup/popup.component'
import Task from "../task/task.component";
import FormInput from "../form-input/form-input.component";

//action
import { AddTask } from "../../redux/items/item.action";

//selector
import { selectSpecificList } from "../../redux/items/items.selector";
import { selectNewItemVisibility } from "../../redux/new-items/new-items.selector";




const Demo = ({ data,  match, addTask,showPopup }) => {
  const [hidden, setToggle] = useState(true);
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setTask(value);
  };

  const handlePress = e => {
    if('Enter' == e.key) {
      if(task.length === 0 ) return
      addTask({title:match.params.Id,task:{details:task}})
      setTask('')
      
    }

  }

  const { title, activeBackgroundColor, list } = data;

  return (
    <div
      className="task-container"
      style={{ backgroundImage: activeBackgroundColor,backgroundSize:'cover' }}
    >
      {
        showPopup ? null : <PopUp />
      }
      <div className="task-header">
        <h2 className="task-text">
          <span class="task-icon">
            <i className="fas fa-sun icon-day-color"></i>
          </span>
          {title}{" "}
          <span
            className="date"

          >
           12 March 2019
          </span>
        </h2>
        <div className="btn-task">
          <CustomIcon
            fontClass="far fa-lightbulb"
            onClick={() => setToggle(!hidden)}
          />
          <a href="" className="btn-light">
            <i class="fas fa-caret-square-down"></i>
          </a>
          {hidden ? null : <ThemeDropDown />}
        </div>
      </div>
      <div className="task-content">
        <Task list={data.list} />
      </div>
      <div className="task-input-container" >
        <span className="task-icons" >
          <i className="fas fa-plus"></i>
        </span>
        <FormInput
          name="text"
          type="text"
          isAddInput
          value={task}
          handleChange={handleChange}
          handlePress={handlePress}
          
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownParam) => ({
  data: selectSpecificList(ownParam.match.params.Id)(state),
  showPopup:selectNewItemVisibility(state)
});

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(AddTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
