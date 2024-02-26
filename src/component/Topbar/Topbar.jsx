import { FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { CiChat1 } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import "./Topbar.css";


const Topbar = () => {
  return (
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Lets Chat</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <FaSearch className="searchIcon" />
            <input
              placeholder="Search for Friend,Post or Video "
              className="searchInput"
            />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
            <IoPerson />
            <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
            <CiChat1 />
            <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
            <IoIosNotifications />
            <span className="topbarIconBadge">1</span>
            </div>
          </div>
          {/* { packageName = require('assets/person/1.jpeg')} */}
          <img src={require("../data/Images/person/2.jpeg")} alt="Yash" className="topbarImg" />
        </div>
      </div>
  );
};

export default Topbar;
