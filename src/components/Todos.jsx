import React from "react";

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
            <button className="btn btn-success">Add New Task</button>
          </div>

          <ul className="todo-list">
            <li>✅ Complete project design</li>
            <li>📧 Respond to client emails</li>
            <li>🛒 Buy groceries after work</li>
            <li>📚 Read 10 pages of book</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todos;
