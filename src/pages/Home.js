import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useParams } from "react-router-dom";
import Navbar from "../layout/Navbar";
import { useSelector } from "react-redux";

export default function Home() {
  const [books, setBooks] = useState([]);
  const userId = useSelector((state) => state.userId);
  console.log("state", userId);

  const { id } = useParams();

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const result = await axios.get(
      `http://18.219.44.33:8080/books/${userId}`
      // `http://localhost:8080/books/${userId}`
    );
    setBooks(result.data);
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://18.219.44.33:8080/book/${id}`);
    loadBooks();
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Cost</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.cost}</td>
                  <td>
                    <Link
                      className="btn btn-primary mx-2"
                      to={`/viewuser/${book.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-primary mx-2"
                      to={`/edituser/${book.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => deleteBook(book.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
