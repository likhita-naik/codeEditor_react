import { AppBar,Toolbar,styled} from "@mui/material"

var Container=styled(AppBar)`
background:#060606; 
height:9vh;`


const Header=
()=>{
    return  <Container style={{position:'static'}}>
        <Toolbar></Toolbar>
    </Container>
}


export  default Header;