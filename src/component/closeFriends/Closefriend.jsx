import "./closefriend.css"

export default function Closefriend({user}) {
  return (
    <li className="sidebarFriend">
    <img src={user.profilePicture} alt="friend" className="sidebarFriendImg" />
    {/* src={require("../data/Images/person/2.jpeg")} */}
    <span className="sidebarFriendName">{user.username}</span>
</li>
    
  )
}
