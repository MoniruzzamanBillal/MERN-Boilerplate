import { useState } from "react";

export default function Todo() {
  // states:
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([]);

  // handle functions:
  const handleAddTodo = () => {
    if (userInput.trim().length <= 0) return;
    setTodos((prev) => [...prev, { context: userInput.trim(), state: false }]);
    setUserInput("");
  };

  return (
    <section className="todo-page-container flex flex-col items-center h-screen p-4">
      {/* Add Todo */}
      <div className="add-todo-container p-2 bg-yellow-600 w-full max-w-[720px] flex items-center justify-between gap-2 mb-[12px] rounded-md cursor-pointer">
        <input
          type="text"
          className="w-full h-[37px] px-2 text-xl rounded-md outline-yellow-100"
          value={userInput}
          onChange={(e) => {
            e.preventDefault();
            setUserInput(e.target.value);
          }}
        />
        <button
          className="text-yellow-100 font-bold text-2xl uppercase outline-yellow-100"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      {/* Add Todo */}

      {/* Render Todo(s) */}
      <div className="display-todo-container w-full max-w-[720px] p-2 flex flex-col gap-1 cursor-pointer">
        {todos.map((ele, index) => (
          <TodoItem key={index} index={index} value={ele} setTodos={setTodos} />
        ))}
      </div>
      {/* Render Todo(s) */}
    </section>
  );
}

// eslint-disable-next-line react/prop-types
const TodoItem = ({ index, value, setTodos }) => {
  return (
    <div className="todo-container bg-yellow-200 p-1 px-2 text-lg flex items-start justify-between border-[3px] border-yellow-500">
      <p className="w-[80vw] break-words h-full flex items-center">
        {/* eslint-disable-next-line react/prop-types */}
        {value.context}
      </p>

      <div className="buttons-container flex items-center gap-2 select-none">
        <div
          className={`circle w-[1.7rem] aspect-square border-[3px] rounded-full active:scale-90 transition-[background-color] duration-300 ${
            // eslint-disable-next-line react/prop-types
            value.state
              ? "bg-green-300 border-green-500"
              : "bg-yellow-50 border-yellow-500"
          }`}
          onClick={() => {
            console.log("hello clicked!");
            setTodos((prev) => {
              const res = [...prev];
              res[index] = {
                ...prev[index],
                state: !prev[index].state,
              };
              return res;
            });
          }}
        ></div>

        <div
          className={`circle w-[1.7rem] aspect-square flex items-center justify-center text-3xl text-blue-400 font-bold active:scale-90`}
          onClick={() => {
            console.log("hello clicked!");
            setTodos((prev) => {
              const res = [...prev];

              if (index > 0) {
                const prevIndex = index - 1;
                [res[index], res[prevIndex]] = [res[prevIndex], res[index]];
                return res;
              }

              res.push(res.shift());
              return res;
            });
          }}
        >
          ^
        </div>

        <div
          className={`circle w-[1.7rem] aspect-square flex items-center justify-center text-3xl text-red-400 font-bold active:scale-90`}
          onClick={() => {
            console.log("hello clicked!");
            setTodos((prev) => {
              const res = [...prev];
              res.splice(index, 1);
              return res;
            });
          }}
        >
          X
        </div>
      </div>
    </div>
  );
};
