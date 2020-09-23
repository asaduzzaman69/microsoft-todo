import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import CustomIcon from "../custom-icons/custom.component";
import "./custom-list.styles.css";

const CustomList = ({
  listDetails: { className, routeName, icon, iconClass, title },
  match,
}) => {
  
  return (
    <NavLink
      exact
      activeClassName={className}
      to={`${match.path}${routeName}`}
      className="list-item"
    >
      <span class="list-icon">
        <i class={`${icon} ${iconClass}`}></i>
      </span>
      {title}
    </NavLink>
  );
};
export default withRouter(CustomList);
