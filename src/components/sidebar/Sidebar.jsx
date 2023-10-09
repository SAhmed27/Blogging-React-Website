import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img src="https://images.squarespace-cdn.com/content/v1/59241b1715d5db8838165d1e/1495566875704-5KTYF4R9UNV9HNJSWPCP/Writing+Services+Image.jpg" alt="" height="240px" />
        {/* <img src="https://invedus.com/images/services/content-writing-n.png" alt="" height="400px" /> */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat mollitia iure odit repudiandae dignissimos unde at, illo recusandae totam eum, nihil nisi molestias aliquam qui harum excepturi, laborum quisquam aperiam.</p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <ul className='sidebarSocial'>
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram" ></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        </ul>
      </div>


    </div>
  )
}
