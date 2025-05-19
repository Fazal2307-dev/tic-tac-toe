import React from "react"
import Square from "./Square";


const Board = ()=>{
  return (
    <div className="board-container">
      <div className="Board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="Board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="Board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  )
}
export default Board;