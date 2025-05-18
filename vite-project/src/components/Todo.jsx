import React, { useState } from "react";
import { styled } from "styled-components";

const TODO = "TODO";
const DOING = "DOING";
const DONE = "DONE";

const Task = styled.div`
display:'flex';
'text-align':'center'
`;
const Todo = () => {
  const [title, setTitle] = useState("");
  const [Todos, setTodo] = useState([]);
  const [dragObj, setDragObj] = useState({});

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAddTodo = (e) => {
    console.log("handleAddTodo", e.target.value);
    if (e.keyCode === 13 && e.target.value != "") {
      setTodo([
        ...Todos,
        {
          title: title,
          id: Date.now(),
          status: TODO,
        },
      ]);
      setTitle("");
    }
  };

  const handleDragDone = (e, TodoStatus, todoObj) => {
    // console.log("TodoStatus", TodoStatus);
    // console.log("id", todoObj);
    // console.log("event", e);
    e.preventDefault();
    // const todoCopy = Todos.filter((todo) => todo.id !== todoObj.id);
    // setTodo([
    //   ...todoCopy,
    //   { id: todoObj.id, status: TodoStatus, title: todoObj.title },
    // ]);
  };

  const handleDrop = (e, TodoStatus) => {
    console.log("asd", e);
    console.log("DOING", DOING);
    const todoCopy = Todos.filter((todo) => todo.id !== dragObj.id);
    setTodo([
      ...todoCopy,
      { id: dragObj.id, status: TodoStatus, title: dragObj.title },
    ]);
  };

  const handleDeleteTodo = (e, TodoObj) => {
    const todoCopy = Todos.filter((todo) => todo.id !== TodoObj.id);
    setTodo([...todoCopy]);
  };
  // const handleEditTodo = (e, TodoObj) => {
  //   const todoCopy = Todos.filter((todo) => todo.id !== TodoObj.id);
  //   setTodo([...todoCopy]);
  // };

  return (
    <div>
      <div style={{ display: "flex", "justify-content": "space-around" }}>
        <input
          type="text"
          style={{
            width: "80%",
            padding: "10px",
            margin: "5px",
            textAlign: "center",
          }}
          placeholder="Enter the Task Name"
          onChange={handleChange}
          value={title}
          onKeyDown={(e) => handleAddTodo(e)}
        />
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <div
          style={{
            width: "33%",
            textAlign: "center",
            // "font-size": "40px",
            background: "turquoise",
            height: "72vh",
            "overflow-y": "scroll",
          }}
          onDragOver={(e) => handleDragDone(e)}
          onDrop={(e) => handleDrop(e, TODO)}
        >
          <h2>Todo</h2>
          <div>
            {Todos.map((Todoi) => {
              return (
                Todoi.status === TODO && (
                  <div
                    style={{
                      border: " 2px solid black",
                      display: "flex",
                      background: "lightgray",
                      "text-align": "center",
                      " align-items": "center",
                      "justify-content": "space-around",
                      "font-size": "18px",
                      alignItems: "center",
                    }}
                    draggable
                    key={Todoi.id}
                    onDrag={(e) => {
                      // console.log("ams", e, Todoi);
                      setDragObj(Todoi);
                    }}
                    // onDragEnd={(e) => handleDragDone(e, DOING, Todoi)}
                    // onDragOver={(e) => handleDragDone(e, DOING, Todoi)}
                    // onDrop={(e) => console.log(",,,,,,,,,,")}
                  >
                    <h5>{Todoi.title}</h5>
                    <div>
                      <button onClick={(e) => handleDeleteTodo(e, Todoi)}>
                        &#xf2ed; delete
                      </button>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
        <div
          style={{
            width: "33%",
            textAlign: "center",
            // "font-size": "40px",
            background: "Lightblue",
            height: "72vh",
            "overflow-y": "scroll",
          }}
          onDragOver={(e) => handleDragDone(e, DOING)}
          onDrop={(e) => handleDrop(e, DOING)}
        >
          <h2>Doing</h2>
          <div>
            {Todos.map((Todoi) => {
              return (
                Todoi.status === DOING && (
                  <div
                    style={{
                      border: " 2px solid black",
                      display: "flex",
                      background: "lightgray",
                      "text-align": "center",
                      " align-items": "center",
                      "justify-content": "space-around",
                      "font-size": "18px",
                      alignItems: "center",
                    }}
                    draggable
                    key={Todoi.id}
                    onDrag={(e) => {
                      // console.log("ams", e, Todoi);
                      setDragObj(Todoi);
                    }}
                  >
                    <h5>{Todoi.title}</h5>
                    <div>
                      <button onClick={(e) => handleDeleteTodo(e, Todoi)}>
                        &#xf2ed; delete
                      </button>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
        <div
          style={{
            width: "33%",
            textAlign: "center",
            // "font-size": "40px",
            background: "Lightgreen",
            height: "72vh",
            "overflow-y": "scroll",
          }}
          onDragOver={(e) => handleDragDone(e)}
          onDrop={(e) => handleDrop(e, DONE)}
        >
          <h2>Done</h2>
          <div>
            {Todos.map((Todoi) => {
              return (
                Todoi.status === DONE && (
                  <div
                    style={{
                      border: " 2px solid black",
                      display: "flex",
                      background: "lightgray",
                      "text-align": "center",
                      " align-items": "center",
                      "justify-content": "space-around",
                      "font-size": "18px",
                      alignItems: "center",
                    }}
                    draggable
                    key={Todoi.id}
                    onDrag={(e) => {
                      // console.log("ams", e, Todoi);
                      setDragObj(Todoi);
                    }}
                  >
                    <h5>{Todoi.title}</h5>
                    <div>
                      <button onClick={(e) => handleDeleteTodo(e, Todoi)}>
                        &#xf2ed; delete
                      </button>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
