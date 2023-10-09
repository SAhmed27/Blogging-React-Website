import "./write.css"

export default function Write() {
  return (
    <div className="write">
      <img className="writeImg" src="https://unsplash.com/blog/content/images/2023/09/Banner-Travel.jpg" alt="" />
      <form className="writeForm"> {/* Update the class name to "writeForm" */}
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
          <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
          <i className="fa-solid fa-rotate-right" style={{ color: "#54e356" }}></i>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}

