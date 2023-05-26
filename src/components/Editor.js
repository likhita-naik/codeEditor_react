

import { Box ,styled} from "@mui/system";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

import {Controlled as ControlledEditor} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import '../App.css'
import { useState } from "react";
const  Heading= styled(Box)`
background:#1d1e22;
display:flex;
padding:0px 8px;`

const Container=styled(Box)`
flex-grow:1;
background-color:#060606;
margin:
`

const Header=styled(Box)`
display:flex;
background:#060606;
color:#ffff;
justify-content:space-between;
font-weight:760;`

const Editor=(props)=>{
    const [open,setOpen]=useState(false)
const onHandlerChange=(editor,data,value)=>{
  console.log(editor,data,value)
  props.onChange(value)
}

  return <Container style={open?null:{flexGrow:0}}>
    <Header>
    
    <Heading>
        <Box component="span" style={{background:props.color,display:'flex',width:20,height:20,placeContent:'center',marginRight:5,borderRadius:4,color:'black'}} >{props.icon}</Box>
{
  props.heading
}    </Heading>
    <CloseFullscreenIcon fontSize="small" onClick={()=>setOpen(prevState=>!prevState) } />
    </Header>
  <ControlledEditor fontSize="small" className=""  value={props.value} onBeforeChange={onHandlerChange} options={{lineNumbers:true,theme:'material'}} ></ControlledEditor>
  </Container>

}


export default Editor;