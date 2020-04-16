import React, { useContext } from "react";
import { ChoreListContext } from "../context/ChoreListContext";
import Chore from "./Chore";

const ChoreList = () => {
  const { chores } = useContext(ChoreListContext);

  return (
    <div>
      {chores.length ? (
        <ul className="list">
          {chores.map(chore => {
            return <Chore chore={chore} key={chore.id} />;
          })}
        </ul>
      ) : (
        <div className="no-chores">No Chores</div>
      )}
    </div>
  );
};

export default ChoreList;