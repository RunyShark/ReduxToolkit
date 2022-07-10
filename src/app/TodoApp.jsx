import React, { useState } from "react";
import { useGetTodosQuery, useGetTodoByIdQuery } from "../index";

export const TodoApp = () => {
  //const { data: todos = [], isLoading } = useGetTodosQuery();
  const [pages, setPages] = useState(1);
  const { data: todo, isLoading } = useGetTodoByIdQuery(pages);
  console.log(todo);

  const nextTodo = () => {
    setPages(pages + 1);
  };
  const PrevTodo = () => {
    if (pages === 1) return;
    setPages(pages - 1);
  };

  return (
    <>
      <h1>Todos - RKT Query</h1>
      <hr />
      <h4>isLoading.: {isLoading ? "true" : "false"}</h4>

      <h2>{JSON.stringify(todo)}</h2>
      <button onClick={nextTodo}>Next todo</button>
      <button onClick={PrevTodo}>Previus todo</button>
      {/* <ul>
        {todos.map(({ id, title, completed }) => (
          <li key={id}>
            <p>{title}</p>
            <p style={{ fontFamily: "unset" }}>
              Completed:{" "}
              {completed ? (
                <strong style={{ color: "green" }}>DONE</strong>
              ) : (
                <strong style={{ color: "red" }}>Pending</strong>
              )}
            </p>
          </li>
        ))}
      </ul> */}
    </>
  );
};
