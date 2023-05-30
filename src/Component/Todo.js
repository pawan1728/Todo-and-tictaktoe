import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Todo = () =>{
    const [inputValue, SetInputvalue] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [editedIndex, setEditedIndex] = useState();
    const handleInputField = (e) => {
      SetInputvalue(e.target.value);
      
    };
    
    const handleButtonClick = () => {
      if (inputValue === "") {
        alert("pls filled input box");
      } else {
        setTodoList([...todoList, inputValue]);
        SetInputvalue("");
      }
      
    };
  
    const removeHandler = (listIndex) => {
     
      let newTodoList = todoList.filter((value, index) => {
        return index !== listIndex;
      });
      setTodoList(newTodoList);
      if(isEdit){
        console.log(listIndex);
        setIsEdit(false)
        SetInputvalue("");
      }
    };
  
    const editHandler = (editIndex) => {
      setIsEdit(true);
      setEditedIndex(editIndex);
      todoList.forEach((value, index) => {
        if (index === editIndex) {
          SetInputvalue(value);
        }
      });
    };
  
    const updateButtonClick = () => {
      let newInputValue = todoList;
      todoList[editedIndex] = inputValue;
      setTodoList(newInputValue);
      setIsEdit(false);
      SetInputvalue("");
    };
  
    return(
<div className="App">
      <Input
        type="text"
        id="inputField"
        className="border p-2 m-0"
        onChange={handleInputField}
        value={inputValue} placeholder='Input todo value'
      />
      {isEdit ? (
        <Button
          className="bg-gray-600 border p-2 m-2 text-white cursor-pointer"
          onClick={updateButtonClick}
          Name="update"
        />
      ) : (
        <Button
          className="bg-gray-600 border p-2 m-2 text-white cursor-pointer"
          onClick={handleButtonClick}
          Name="Submit"
        />
      )}
      <ul>
        {todoList.map((v, i) => {
          return (
            <div className="flex justify-center items-center">
              <li
                key={i}
                className="border bg-amber-200 text-white p-2 m-2 mr-0 w-40"
              >
                {v}
              </li>
              <Button
                className="bg-green-300 m-2 p-2"
                Name="Edit"
                onClick={() => editHandler(i)}
              />
              <Button
                className="bg-red-400 ml-1 p-2 cursor-pointer hover:bg-red-800 text-white mr-0"
                Name="X"
                onClick={() => removeHandler(i)}
              />
            </div>
          );
        })}
      </ul>
    </div>
    )
}
export default Todo