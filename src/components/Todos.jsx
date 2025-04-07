import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const Todos = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="todo-box">
          <h3 className="todo-title">📝 My To-Do List</h3>
          <div className="date-time">Sunday, April 6, 2025 - 10:45 AM</div>

          <div className="todo-input">
            <input
              type="text"
              className="form-control"
              placeholder="Add a new task..."
            />
            <button type="submit" className="btn btn-success">
              Add New Task
            </button>
          </div>

          <ul className="todo-list">
            <li style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Respond to client emails</p>
              <span>
                <FaCheck
                  style={{
                    color: "white",
                    backgroundColor: "green",
                    padding: "4px",
                    borderRadius: "15px",
                  }}
                />
                <MdDeleteForever
                  style={{
                    color: "white",
                    backgroundColor: "red",
                    padding: "4px",
                    borderRadius: "15px",
                  }}
                />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todos;
