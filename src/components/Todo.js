import React, { useState, useEffect, useRef } from "react";
import DisplayTodo from "./DisplayTodo";
import InputTodo from "./InputTodo";

// get the localStorage data
const getLocalData = () => {
  const lists = localStorage.getItem("myTodoList");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Todo = () => {
  const inputRef = useRef();
  const [inputdata, setInputdata] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [toggleButton, setToggleButton] = useState(false);
  const [editedItem, setEditedItem] = useState("");

  // onpage load input focus
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //   Add the Items
  const addItem = () => {
    if (!inputdata) {
      alert("Please fill the data");
    } else if (inputdata && toggleButton) {
      setItems(
        items.map((curElm) => {
          if (curElm.id === editedItem) {
            return { ...curElm, name: inputdata };
          }
          return curElm;
        })
      );
      setInputdata("");
      setEditedItem(null);
      setToggleButton(false);
    } else {
      const myNewInput = {
        id: new Date().getTime().toString(),
        name: inputdata,
        time: new Date().toLocaleString(),
      };
      setItems([...items, myNewInput]);
      setInputdata("");
    }
  };

  //   Delete Items
  const deleteItem = (id) => {
    const updateItems = items.filter((curElm) => {
      return curElm.id !== id;
    });
    setItems(updateItems);
  };

  //   add localStorage
  useEffect(() => {
    localStorage.setItem("myTodoList", JSON.stringify(items));
  }, [items]);

  //   edit item
  const editItem = (id) => {
    const todo_item_edited = items.find((curElm) => {
      return curElm.id === id;
    });
    setInputdata(todo_item_edited.name);
    setEditedItem(id);
    setToggleButton(true);
  };

  // on enter press
  const keyprss = (key) => {
    if (key === "Enter") {
      if (!inputdata) {
        alert("Please fill the data");
      } else if (inputdata && toggleButton) {
        setItems(
          items.map((curElm) => {
            if (curElm.id === editedItem) {
              return { ...curElm, name: inputdata };
            }
            return curElm;
          })
        );
        setInputdata("");
        setEditedItem(null);
        setToggleButton(false);
      } else {
        const myNewInput = {
          id: new Date().getTime().toString(),
          name: inputdata,
          time: new Date().toLocaleString(),
        };
        setItems([...items, myNewInput]);
        setInputdata("");
      }
    }
  };

  return (
    <div>
      {/* input data  */}
      <InputTodo
        inputRef={inputRef}
        inputdata={inputdata}
        setInputdata={setInputdata}
        keyprss={keyprss}
        addItem={addItem}
        toggleButton={toggleButton}
      />
      {/* todo list display section  */}
      <DisplayTodo items={items} editItem={editItem} deleteItem={deleteItem} />
    </div>
  );
};

export default Todo;
