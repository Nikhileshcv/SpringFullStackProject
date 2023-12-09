import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function AddBook() {
  let navigate = useNavigate();
  const location = useLocation();
  const userId = useSelector((state) => state.userId);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const book = {
      title: title,
      author: author,
      cost: cost,
      userId: userId,
    };
    await axios.post("http://18.219.44.33:8080/book", book);
    navigate("/Home");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Book</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Book Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Book name"
                name="name"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Author" className="form-label">
                Author Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Author Name"
                name="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Cost" className="form-label">
                Cost
              </label>
              <input
                type={"book"}
                className="form-control"
                placeholder="Enter Book cost"
                name="cost"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/home">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
