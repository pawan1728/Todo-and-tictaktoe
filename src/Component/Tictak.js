import { useState, useEffect } from "react";
import Input from "./Input";
const Tictak = () => {
  const [tictoeInput, setTictoeInput] = useState(null);
  const [inputCondition, setInputCondition] = useState(true);
  const [inputValue] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [checkInputField, setCheckInputField] = useState(true);
  const [isWinner,setIsWinner] = useState(true)
  // const [possibleIndex] = useState([
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8],
  //   [0, 3, 6],
  //   [1, 4, 7],
  //   [2, 5, 8],
  //   [0, 4, 8],
  //   [2, 4, 6],
  // ]);
  useEffect(() => {
    // console.log(inputValue);
  }, [tictoeInput]);

  const onClickHandler = (e, index) => {
    e.preventDefault();
    let inputIndex = index;
    if(isWinner){
    if (checkInputField) {
      inputValue.forEach((value, index) => {
        if (index === inputIndex) {
          if (value === null) {
            if (inputCondition) {
              setTictoeInput((e.target.value = "X"));
              inputValue[inputIndex] = "X";
            } else {
              setTictoeInput((e.target.value = "O"));
              inputValue[inputIndex] = "O";
            }
          } else {
            setCheckInputField(!checkInputField);
          }
        }
      });
    } else {
      return;
    }
  }
    if(isWinner){
    if (
      (inputValue[0] === "O" &&
        inputValue[1] === "O" &&
        inputValue[2] === "O") ||
      (inputValue[0] === "X" && inputValue[1] === "X" && inputValue[2] === "X")
    ) {
      console.log("Winner is", inputValue[0]);
       setIsWinner(false);
       return;
    } else if (
      (inputValue[3] === "O" &&
        inputValue[4] === "O" &&
        inputValue[5] === "O") ||
      (inputValue[3] === "X" && inputValue[4] === "X" && inputValue[5] === "X")
    ) {
      setIsWinner(false);
      return console.log("Winner is", inputValue[3]);
    } else if (
      (inputValue[6] === "O" &&
        inputValue[7] === "O" &&
        inputValue[8] === "O") ||
      (inputValue[6] === "X" && inputValue[7] === "X" && inputValue[8] === "X")
    ) {
      setIsWinner(false);
      return console.log("Winner is", inputValue[6]);
    } else if (
      (inputValue[0] === "O" &&
        inputValue[3] === "O" &&
        inputValue[6] === "O") ||
      (inputValue[0] === "X" && inputValue[3] === "X" && inputValue[6] === "X")
    ) {
      setIsWinner(false);
      return console.log("Winner is", inputValue[0]);
    } else if (
      (inputValue[1] === "O" &&
        inputValue[4] === "O" &&
        inputValue[7] === "O") ||
      (inputValue[1] === "X" && inputValue[4] === "X" && inputValue[7] === "X")
    ) {
      setIsWinner(false);
      return console.log("Winner is", inputValue[1]);
    } else if (
      (inputValue[2] === "O" &&
        inputValue[5] === "O" &&
        inputValue[8] === "O") ||
      (inputValue[2] === "X" && inputValue[5] === "X" && inputValue[8] === "X")
    ) {
      setIsWinner(false);
      return console.log("Winner is", inputValue[2]);
    } else if (
      (inputValue[0] === "O" &&
        inputValue[4] === "O" &&
        inputValue[8] === "O") ||
      (inputValue[0] === "X" && inputValue[4] === "X" && inputValue[8] === "X")
    ) {
      setIsWinner(false);
      return console.log("Winner is", inputValue[0]);
    } else if (
      (inputValue[2] === "O" &&
        inputValue[4] === "O" &&
        inputValue[6] === "O") ||
      (inputValue[2] === "X" && inputValue[4] === "X" && inputValue[6] === "X")
    ) {
      setIsWinner(false);
      return console.log("Winner is", inputValue[2]);
    }
  }
    setInputCondition(!inputCondition);
  };
  return (
    <div className="w-44 text-center m-auto">
      <div className="flex m-1 flex-wrap bg-pink-300">
        {Array(9)
          .fill(null)
          .map((v, index) => (
            <div key={index} className="line">
              <Input
                className="w-12 h-12 m-1 cursor-default text-center"
                onClick={(e) => onClickHandler(e, index)}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
export default Tictak;
