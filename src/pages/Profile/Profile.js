import "./Profile.css"
import UserImg from "../../assets/userimg.jpg"

export default function Profile() {
    return (
        <div className="user_profile">
            <h1 className="title">Account Profile</h1>
            <hr className="line" />
            <img src={UserImg} alt="user" className="user_img" />
            <div className="user_info">User name</div>
            <div className="user_info">Email</div>
            <div className="user_info">Amount left</div>
        </div>
    )
}
