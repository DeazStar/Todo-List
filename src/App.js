import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";

const tasks = [
  {
    id: 1,
    task: "Buy groceries for next week",
    addedDate: "Sep 26, 2023",
  },
  {
    id: 2,
    task: "Buy groceries for next week",
    addedDate: "Sep 26, 2023",
  },
  {
    id: 3,
    task: "Buy groceries for next week",
    addedDate: "Sep 26, 2023",
  },
];
function App() {
  return (
    <div className="app">
      <Todo />
    </div>
  );
}

function Todo() {
  return (
    <div className="todo">
      <div>
        <h1>
          <span className="todo-icon-container">
            <i className="bi bi-check-square-fill"></i>
          </span>
          <span>My Todo-s</span>
        </h1>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="input-container">
          <form>
            <input
              type="text"
              placeholder="Add new..."
              className="item-input"
            />
            <input type="date" className="date-picker" />
            <i className="bi bi-calendar-week-fill date-picker-icon"></i>
            <button type="submit">ADD</button>
          </form>
        </div>
      </div>

      <hr />

      <ItemList />
    </div>
  );
}

function ItemList() {
  return (
    <div className="item-list">
      <div className="features">
        <div className="filter select">
          <label>Filter</label>
          <select>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="active">Active</option>
            <option value="dueDate">Has due date</option>
          </select>
        </div>

        <div className="sort select">
          <label>Sort</label>
          <select>
            <option value="addedDate">Added date</option>
            <option value="dueDate">Due date</option>
          </select>
        </div>
      </div>

      {tasks.map((el) => (
        <Items tasks={el} key={el.id} />
      ))}
    </div>
  );
}

function Items({ tasks }) {
  return (
    <div className="items">
      <div className="item">
        <input
          type="checkbox"
          style={{
            marginRight: "10px",
            width: "30px",
            height: "17px",
            borderStyle: "solid",
            borderWidth: "2px",
          }}
        />
        <p>{tasks.task}</p>
      </div>
      <div className="item-option">
        <div className="item-icons">
          <i className="bi bi-pencil-fill edit"></i>
          <i className="bi bi-trash-fill delete"></i>
        </div>
        <div className="added-date">
          <i
            style={{ marginRight: "5px" }}
            className="bi bi-info-circle-fill"
          ></i>
          <p>{tasks.addedDate}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
