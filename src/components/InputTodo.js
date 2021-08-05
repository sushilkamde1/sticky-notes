import React from "react";

const InputTodo = ({
  inputRef,
  inputdata,
  setInputdata,
  keyprss,
  addItem,
  toggleButton,
}) => {
  return (
    <div className="container">
      <h3 className="my-3">Add Your List Here</h3>
      <div className="input-group mb-3">
        {/* input section  */}
        <input
          type="text"
          className="form-control"
          placeholder="Add Items"
          ref={inputRef}
          value={inputdata}
          onChange={(event) => setInputdata(event.target.value)}
          onKeyPress={(e) => keyprss(e.key)}
        />
        {toggleButton ? (
          <button className="btn btn-outline-secondary" onClick={addItem}>
            Update
          </button>
        ) : (
          <button className="btn btn-outline-secondary" onClick={addItem}>
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default InputTodo;
