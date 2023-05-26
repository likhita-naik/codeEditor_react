import React from "react";

import Editor from "./Editor";
 import { Box } from "@mui/system";
import styled from "@emotion/styled";

import { useContext } from "react";
import { DataContext } from "./context/DataProvider";
 const Container= styled(Box)`
 display:flex;
 height:50vh;`


 console.log(DataContext);

const Code=()=>{
    const codejs = useContext(DataContext);
console.log("html value", codejs);

 const [html,setHtml]=codejs[0]
 const [css,setCss]=codejs[1]
 const [js,setJs]=codejs[2]

    return <Container>
       <Editor heading="HTML" value={html} 
       onChange={setHtml} 
        icon="/"color="red" ></Editor>
       <Editor heading="CSS"  value={css} 
        onChange={setCss}
        icon="*"color="skyblue" ></Editor>
       <Editor heading="Javascript" icon="{}"color="yellow"  value={js} onChange={setJs} ></Editor>
    </Container>
}


export  default Code;