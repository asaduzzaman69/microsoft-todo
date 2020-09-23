import React from "react";
import { NavLink,withRouter } from "react-router-dom";
import CustomList from "../custom-list/custom-list.component";

const ListComponent = ({list}) => {
  //console.log(props)
  return (
    <>
    <div className="lists">
      <ul className="list-container">
        {
        list.map( el => <CustomList listDetails={el} /> )
        }
      </ul>
    </div>
    <div className="underline"></div>
    </>
  );
};

export default withRouter(ListComponent);
