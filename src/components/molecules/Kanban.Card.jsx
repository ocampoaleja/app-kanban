import React from "react";

export default function KanbanCard({ data }) {
  console.log(data);
  return <div>{data.title}</div>;
}
