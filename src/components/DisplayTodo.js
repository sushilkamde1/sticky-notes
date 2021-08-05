import React from "react";

const DisplayTodo = ({ items, editItem, deleteItem }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          {items.map((curElm) => {
            return (
              <div className="card shadow my-2 col-sm-3" key={curElm.id}>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">
                    {curElm.time}
                  </h6>
                  <h5 className="card-text py-3">{curElm.name}</h5>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-outline-success btn-sm"
                      onClick={() => editItem(curElm.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => deleteItem(curElm.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DisplayTodo;
