import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label htmlFor="">Profile Picture</label>
          <div className="settingsPP">
            <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa fa-light fa-user" ></i>
            </label>
            <input type="file" name="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="ahmed" />
          <label>Email</label>
          <input type="email" placeholder="ahmedsayeed138@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="*****" />
          <button className="settingsSubmit " >Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
