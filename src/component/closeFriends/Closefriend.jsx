import "./closefriend.css"

export default function Closefriend({user}) {
  return (
    <li className="sidebarFriend">
    <img src={user.profilePicture} alt="friend" className="sidebarFriendImg" />
    <span className="sidebarFriendName">{user.username}</span>
</li>
    
  )
}