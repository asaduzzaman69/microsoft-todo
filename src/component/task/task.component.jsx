import React from "react";
import "./task.styles.scss";

import { connect } from 'react-redux'

const Task = ({list}) => {
  return (
    <ul className="tasks">
      {
        list.map(el => {
          return (
          <li><span><a href="#"><i class="far fa-circle"></i></a></span>{el.details}</li>
          )
        })
      }
  
    </ul>
  );
};




export default Task;
