import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const userId = useSelector((state) => state.counter);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Home">
            Book Shop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link
            className="btn btn-outline-light"
            to="/adduser"
            state={{ userId: userId }}
          >
            Add Book
          </Link>
          <Link className="btn btn-outline-light" to="/">
            LogOut
          </Link>
        </div>
      </nav>
    </div>
  );
}
