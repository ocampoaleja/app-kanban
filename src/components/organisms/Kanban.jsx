import React ,{useContext} from "react";
import KanbanColumn from "../molecules/Kanban.Column";
import {KanbanContext} from "../../context/KanbanContext";

export default function Kanban() {
  const {kanbanData}= useContext(KanbanContext)

  return (
    <section>
      {typeof kanbanData.columns === "undefined" ? (
        <div>unloaded</div>
      ) : (
        Object.entries(kanbanData.columns).map((column) => (
          <KanbanColumn title={column[0]} cards={column[1]} />
        ))
      )}
    </section>
  );
}
