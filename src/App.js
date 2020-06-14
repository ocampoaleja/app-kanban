import React, { useState, useEffect } from "react";
import "./App.css";
import KanbanProvider from "./context/KanbanContext";

import { Kanban, Header } from "./components/organisms";
import axios from "axios";

function App() {

 
  return (
    <KanbanProvider>
      <div className="kanban">
        <Header />
        <Kanban />
      </div>
    </KanbanProvider>
  );
}

export default App;
