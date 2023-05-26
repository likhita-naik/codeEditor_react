
import React from "react";
import { useState } from "react";
// import { createContext } from "react";

export const DataContext =  React.createContext('')

const DataProvider=({children})=>{

  //  const CreateContext=createContext()

    const html= useState('');
    const css= useState('');
    const js= useState('');

    return <DataContext.Provider 
    value={[html,css,js]}
    >
      {children}
       </DataContext.Provider>
}


export default DataProvider;