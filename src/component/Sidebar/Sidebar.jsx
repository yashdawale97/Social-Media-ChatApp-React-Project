import { MdRssFeed ,MdEvent} from "react-icons/md";
import { CiChat1 } from "react-icons/ci";
import { FaBookmark ,FaQuestion,FaVideo,FaLayerGroup} from "react-icons/fa";
import { IoBagRemove } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";
import "./sidebar.css"
import { Users } from "../data/dummyData";
import Closefriend from "../closeFriends/Closefriend"

const Sidebar =()=>{
    return <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <MdRssFeed className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <CiChat1 className="sidebarIcon"/>
                    <span className="sidebarListItemText">Chat</span>
                </li>
                <li className="sidebarListItem">
                    <FaVideo className="sidebarIcon"/>
                    <span className="sidebarListItemText">Video</span>
                </li>
                <li className="sidebarListItem">
                    <FaLayerGroup className="sidebarIcon"/>
                    <span className="sidebarListItemText">Group</span>
                </li>
                <li className="sidebarListItem">
                    <FaBookmark className="sidebarIcon"/>
                    <span className="sidebarListItemText">Bookmark</span>
                </li>
                <li className="sidebarListItem">
                    <FaQuestion className="sidebarIcon"/>
                    <span className="sidebarListItemText">Question</span>
                </li>
                <li className="sidebarListItem">
                    <IoBagRemove className="sidebarIcon"/>
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <MdEvent className="sidebarIcon"/>
                    <span className="sidebarListItemText">Event</span>
                </li>
                <li className="sidebarListItem">
                    <GiGraduateCap className="sidebarIcon"/>
                    <span className="sidebarListItemText">Courses</span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr" />
            <ul className="sidebarFriendList">
                {Users.map((u)=>(
                    <Closefriend key={u.id} user={u}/>
                ))}
            </ul>
        </div>
    </div>
}
export default Sidebar;