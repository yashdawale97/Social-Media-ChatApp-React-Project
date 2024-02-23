import Topbar from "../../component/Topbar/Topbar";
import Sidebar from "../../component/Sidebar/Sidebar";
import Feed from "../../component/Feed/Feed";
import "./Home.css"
import Rightbar from "../../component/Rightbar/Rightbar";

function Home() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Feed />
        <Rightbar/>
      </div>
    </>
  );
}
export default Home;
