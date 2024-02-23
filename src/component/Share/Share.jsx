import { FaPhotoFilm } from "react-icons/fa6";
import { BiSolidLabel } from "react-icons/bi";
import { MdEmojiEmotions } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import "./share.css";


const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="/assets/person/1.jpeg"
            alt="Profile"
            className="shareProfileImg"
          />
          <input placeholder="What's in your mind ?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <FaPhotoFilm color="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <BiSolidLabel color="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <IoLocationSharp color="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <MdEmojiEmotions color="purple" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};
export default Share;
