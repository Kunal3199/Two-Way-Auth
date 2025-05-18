import React, { useState } from "react";

const TickTackToe = () => {
  const [tickTacBlock, setTickBlock] = useState(new Array(9).fill(null));
  const [isXturn, setXturn] = useState(true);
  const [winner, setWinner] = useState(false);

  const handlePlayerInput = (index) => {
    if (tickTacBlock[index]) {
      return;
    }

    const copyArrayBlock = [...tickTacBlock];
    copyArrayBlock[index] = isXturn ? "X" : "O";
    setTickBlock(copyArrayBlock);
    setXturn((prev) => !prev);
    const win = CheckWinner(copyArrayBlock);
    console.log("winnnnnnn", win);
    if (win) {
      alert(`Player ${isXturn ? "X" : "O"} wins`);
      resetGame();
    }

    if (copyArrayBlock.every((x) => x !== null)) {
      alert(`Match Draw...`);
      resetGame();
    }
  };

  const winnerPossible = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const CheckWinner = (FinalArray) => {
    let checkWinner = false;
    winnerPossible.forEach((arr) => {
      const [i, j, k] = arr;
      console.log([i, j, k], "LLLL");
      console.log(FinalArray, "aa");

      if (
        FinalArray[i] == FinalArray[j] &&
        FinalArray[i] == FinalArray[k] &&
        FinalArray[i] &&
        FinalArray[j] &&
        FinalArray[k]
      ) {
        console.log("weiiber", winner);
        setWinner(true);
        checkWinner = true;
      }
    });
    return checkWinner;
  };

  const resetGame = () => {
    setTickBlock(Array(9).fill(null));
  };

  return (
    <div>
      <h2 style={{ "text-align": "center" }}>
        {" "}
        Current Player Turn : {isXturn ? "X" : "O"}
      </h2>
      <div
        style={{
          display: "grid",
          "grid-template-columns": "auto auto auto",
          "justify-content": "center",
        }}
      >
        {console.log("tickTacBlock", tickTacBlock)}

        {tickTacBlock.map((boardItem, index) => {
          //   {
          //     console.log(i);
          //   }
          return (
            <div
              style={{
                padding: "20px",
                width: "40px",
                height: "40px",
                border: "2px solid black",
                fontSize: "40px",
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => handlePlayerInput(index)}
              //   disabled={boardItem ? true : false}
            >
              {boardItem}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TickTackToe;
