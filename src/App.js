import React, { useState, useEffect } from "react";
import "./App.css";

import { Kanban, Header } from "./components/organisms";
import axios from "axios";

function App() {
  const [kanbanData, setKanbanData] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/kanban");
        setKanbanData(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  console.log(kanbanData);

  return (
    <div className="kanban">
      <Header data={kanbanData} />
      <Kanban data={kanbanData} />
    </div>
  );
}

export default App;
