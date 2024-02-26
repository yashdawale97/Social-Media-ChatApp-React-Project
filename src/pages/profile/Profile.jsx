import Topbar from "../../component/Topbar/Topbar";
import Sidebar from "../../component/Sidebar/Sidebar";
import Feed from "../../component/Feed/Feed";
import Rightbar from "../../component/Rightbar/Rightbar";
import "./profile.css"

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={require("../../component/data/Images/post/3.jpeg")}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={require("../../component/data/Images/person/7.jpeg")}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Yash Dawale</h4>
              <span className="profileInfoDesc">Hello my Friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
