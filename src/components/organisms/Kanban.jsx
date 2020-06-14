import React from "react";
import KanbanColumn from "../molecules/Kanban.Column";

export default function Kanban({ data }) {
  console.log("data", data, data.columns, typeof data.columns);

  return (
    <section>
      {typeof data.columns === "undefined" ? (
        <div>unloaded</div>
      ) : (
        Object.entries(data.columns).map((column) => (
          <KanbanColumn title={column[0]} cards={column[1]} />
        ))
      )}
    </section>
  );
}
