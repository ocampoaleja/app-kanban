import React , {useState , createContext, useEffect} from 'react'
import axios from  'axios';
export const KanbanContext = createContext()

export default function KanbanProvider({children}){
    const [kanbanData, setKanbanData] = useState({
        


    });

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

    return(
        <KanbanContext.Provider 
        value={{kanbanData ,setKanbanData}}
        >{children}
        </KanbanContext.Provider>
    )
}