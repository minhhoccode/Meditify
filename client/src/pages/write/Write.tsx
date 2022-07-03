import "./write.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function Write() {
  return (
    <>
      <div className="write">
        <img
          src="https://images.unsplash.com/photo-1579294800821-694d95e86143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
          alt=""
          className="writeImg"
        />
        <form action="" className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="fa-solid fa-plus" id="PlusIcon"></i>{" "}
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
            <input
              type="text"
              id="title"
              placeholder="title"
              className="writeInput"
              autoFocus={true}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              placeholder="write something..."
              className="writeTextarea"
            ></textarea>
          </div>
          <button className="writeSubmit">Publish</button>
        </form>
      </div>
    </>
  );
}
