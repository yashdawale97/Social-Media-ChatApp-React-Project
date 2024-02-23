import { BsThreeDotsVertical } from "react-icons/bs";
import "./Post.css"
import { Users } from "../../dummyData";
import { useState } from "react";

const Post =({post})=>{
    const [like,setLike]= useState(post.like)
    const [isLike,setIsLike] =useState(false)

    const clickLikeHandler =()=>{
        setLike(isLike ? like+1: like-1)
        setIsLike(!isLike)
    }
    

    return <>
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                <img src={Users.filter((u)=>u.id === post.userId)[0].profilePicture} alt="Profile Img" className="postProfileImg" />
                <span className="postUserName">{Users.filter((u)=>u.id === post.userId)[0].username}</span>
                <span className="postDate">
                   {post.date}
                </span>
                </div>
                <BsThreeDotsVertical  className="postTopRight"/>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="CenterImg" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="assets/like.png" alt="Like" className="likeIcon"onClick={clickLikeHandler} />
                    <img src="assets/heart.png" alt="heart" className="likeIcon" />
                    <span className="postLikeCounter" >{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} Comments</span>
                </div>
            </div>
        </div>
    </div>
</>
}

export default Post;