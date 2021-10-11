import React from "react";
import "../css/sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Developt Soft</h2>
          <h3>
            <FiberManualRecordIcon />
            Sagor
          </h3>
        </div>
        <CreateIcon className="sidebar__create" />
      </div>
    </div>
  );
};

export default Sidebar;
