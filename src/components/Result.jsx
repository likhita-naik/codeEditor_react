import React from "react";
import { useContext } from "react";
import { Box,styled } from "@mui/system";

import {DataContext} from "./context/DataProvider";

console.log(DataContext)

var Container=styled(Box)`
height:41vh;`  

const Result =()=>{
      const result = useContext(DataContext);
      console.log('result result',result[0].html,result[1].css);

     const srcCode=`
     <html>
     <body>${result[0][0]}</body>
     <style>${result[1][0]}</style>
     <script>${result[2][1]}</script>
     </html>
     `

    return <Container>
    <iframe srcDoc={srcCode} title="Output" width="100%" height="100%" sandbox="allow-scripts"></iframe>
    </Container>
}


export default Result;