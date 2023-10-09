import { Link } from 'react-router-dom';
import './topbar.css';

export default function TopBar() {
  const user = false;
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram" ></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
          <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
          <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
          <li className="topListItem"><Link className="link" to="/">WRITE</Link></li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (<img src="https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58482.jpg?w=740" className="topImg" alt="" />) : (
            <ul className="topList"> <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>
              <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li></ul>)
        }

        <i className="topSearchIcon fa-sharp fa-solid fa-magnifying-glass" Style="color: #2369e1;"></i>
      </div>
    </div>
  )
}
