import "./post.css"

export default function post() {
  return (
    <div className='post'>
      <img className="postImg" src="https://images.unsplash.com/photo-1570051008600-b34baa49e751?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1485&q=80" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium eligendi repudiandae ipsa nemo ex odit officiis, a reprehenderit corrupti sint molestiae voluptate voluptatum omnis cumque fugit optio placeat. Asperiores, quam!Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium eligendi repudiandae ipsa nemo ex odit officiis, a reprehenderit corrupti sint molestiae voluptate voluptatum omnis cumque fugit optio placeat. Asperiores, quam!Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium eligendi repudiandae ipsa nemo ex odit officiis, a reprehenderit corrupti sint molestiae voluptate voluptatum omnis cumque fugit optio placeat. Asperiores, quam!Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
    </div>
  )
}
