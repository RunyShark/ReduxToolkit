import { useGetTodosQuery } from "../index";

export const TodoApp = () => {
  const { data: todos = [], isLoading } = useGetTodosQuery();

  return (
    <>
      <h1>Todos - RKT Query</h1>
      <hr />
      <h4>isLoading.: {isLoading ? "true" : "false"}</h4>

      <pre>...</pre>
      <ul>
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
      </ul>
      <button>Next todo</button>
    </>
  );
};
