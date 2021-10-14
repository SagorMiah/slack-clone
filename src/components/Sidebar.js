import React, { useEffect, useState } from "react";
import "../css/sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import db from "../firebase";
import { useStateValue } from "../StateProvider";

const Sidebar = () => {
  const [{ user }] = useStateValue();
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Developt Soft</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <div className="sidebar__createWrap">
          <CreateIcon className="sidebar__create" />
        </div>
      </div>
      <SidebarOption title="Threads" Icon={InsertCommentIcon} />
      <SidebarOption title="Mentions & reactions" Icon={InboxIcon} />
      <SidebarOption title="Saved items" Icon={DraftsIcon} />
      <SidebarOption title="Channel browser" Icon={BookmarkBorderIcon} />
      <SidebarOption title="People & user groups" Icon={PeopleAltIcon} />
      <SidebarOption title="Apps" Icon={AppsIcon} />
      <SidebarOption title="File browser" Icon={FileCopyIcon} />
      <SidebarOption title="Show less" Icon={ExpandLessIcon} />
      <hr />
      <SidebarOption title="Channels" Icon={ExpandMoreIcon} />
      <hr />
      <SidebarOption title="Add channel" addChannelOption Icon={AddIcon} />
      {channels.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id} />
      ))}
    </div>
  );
};

export default Sidebar;
