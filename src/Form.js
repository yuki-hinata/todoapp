import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        {/* <button
          onClick={() => {
            setValue(value);
          }}
        >
          ボタン
        </button> */}
      </form>
    </div>
  );
};
export default Form;
