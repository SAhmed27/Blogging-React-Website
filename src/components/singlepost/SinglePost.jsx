import "./singlepost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostwrapper">
        <img src="https://images.unsplash.com/photo-1627327720338-bc871813afa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1505&q=80" className="singlePostImg" alt="" />

        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i class="singlePostIcon fa-regular fa-pen-to-square" aria-hidden="true"></i>
            <i class="singlePostIcon fa far fa-trash-alt" aria-hidden="true"></i>
          </div>

        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Autor: <b>Safak</b></span>
          <span className="singlePostDate"> 1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur inventore eius incidunt culpa, similique adipisci enim magnam veniam quaerat perspiciatis molestias nemo rem. Voluptatum error eveniet illum, magni neque quidem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis libero perspiciatis reiciendis repellendus iure reprehenderit adipisci, corporis aut ducimus temporibus quam eius veritatis, molestias similique aliquid impedit! Error, ea.
          Magni et impedit, vitae delectus molestias saepe ea, corrupti obcaecati beatae quod cum? Repellat, optio eligendi. Sit distinctio illo deleniti facere pariatur, placeat alias sapiente, doloremque necessitatibus reiciendis illum dicta!
          Doloremque repellat quas temporibus culpa autem delectus excepturi aperiam, nemo consectetur quidem alias sequi praesentium accusantium, laboriosam asperiores mollitia et. Culpa obcaecati voluptatem eveniet maxime itaque esse ducimus quae cum!
          Quia atque iste quisquam nostrum rem reprehenderit? Autem, commodi repellendus quia perspiciatis omnis, fugit veritatis ducimus quisquam velit consequatur asperiores quasi fuga est enim culpa mollitia aliquam similique ipsum odio.
          Impedit fugit neque omnis enim id quos at recusandae est sit excepturi, nostrum veniam aut laborum, eaque laboriosam ducimus? Officiis voluptas maxime officia reprehenderit dolores mollitia architecto dignissimos harum voluptatum.
        </p>
      </div>
    </div>
  )
}
