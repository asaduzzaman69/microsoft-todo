import React from "react";
import "./navbar.styles.css";
import { withRouter } from "react-router-dom";
import NavbarHeader from "../navbar-header/navbar-header.component";
import ListComponent from "../list-component/list-component";
import AddButton from "../add-list-button/add-list-button.component";

class Navbar extends React.Component {
  render() {
    const { listData } = this.props;

    return (
      <div className="navbar">
        <NavbarHeader />
        <ul className="demo">
          {listData.map(({ list, id }) =>
            list.length > 0 ? <ListComponent list={list} key={id} /> : null
          )}
        </ul>
        <AddButton />
      </div>
    );
  }
}

export default withRouter(Navbar);

/**


{
          id: 2,
          title: "Important",
          routeName: "/important",
          className: "list-item-important-active",
          iconClass: "icon-important-color",
          icon: "far fa-star",
          iconClassName: "icon-important-color",
        },
        {
          id: 3,
          title: "Planned",
          routeName: "/planned",
          className: "list-item-day-active",
          iconClass: "icon-day-color",
          icon: "far fa-calendar-alt  ",
          iconClassName: "icon-day-color",
        },
        {
          id: 4,
          title: "Assigned",
          routeName: "/assigned",
          className: "list-item-day-active",
          iconClass: "icon-day-color",
          icon: "far fa-user ",
          iconClassName: "icon-day-color",
        },
        {
          id: 1,
          title: "Task",
          routeName: "/task",
          className: "list-item-task-active",
          iconClass: "icon-task-color",
          icon: "fas fa-tasks ",
          iconClassName: "icon-task-color",
        },
 * 
 */
