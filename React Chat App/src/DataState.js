import { createContext, useContext, useReducer }from "react";

const DataContext=createContext();

const DataState=({children,reducer,initialState})=>{
    return (
    <DataContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </DataContext.Provider>);

}
export const useDataState=()=>useContext(DataContext);

export default DataState;