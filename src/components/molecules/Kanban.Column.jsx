import React from "react";
import KanbanCard from "./Kanban.Card";
import AddColumn from "./AddColumn";

export default function KanbanColumn({ title, cards }) {
  return (
    <section className="column">
      <div className="column-title">{title}</div>
      <div className="column-cards">
        {cards.map((card) => (
          <KanbanCard data={card} />
        ))}
      </div>
      <div>
        <AddColumn/>
      </div>
    </section>
  );
}
