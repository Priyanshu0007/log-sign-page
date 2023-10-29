import {Container} from "./components/Container.styled"
import {StyledImage} from "./components/Image.styled"
import {StyledForm} from "./components/Form.styled"
import {H1Styled} from "./components/Title.styled"
import {H2Styled} from "./components/SubTitle.styled"
import {InputStyled} from "./components/Input.styled"
import myImage from "../public/authentication.png"
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {Icon} from 'react-icons-kit';
import {eye} from 'react-icons-kit/feather/eye'
import { useState } from "react"
import { Box } from "./components/Box.styled"
import { ButtonStyled } from "./components/Button.styled"

function App() {
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const handleToggle = () => {
    if (type==='password'){
       setIcon(eye);
       setType('text')
    } else {
       setIcon(eyeOff)
       setType('password')
    }
 } 
  return (
    <Container>
      <StyledImage src={myImage}/>
      <StyledForm>
        <H1Styled>Login</H1Styled>
        <div>
        <H2Styled>LoginId</H2Styled>
        <InputStyled type="text" id="fname" name="fname" placeholder="Enter Login ID"></InputStyled>
        <H2Styled>Password</H2Styled>
        <InputStyled type={type} id="pwd" name="pwd" placeholder="Enter Password"/>
        <span onClick={handleToggle}><Icon className="absolute mr-10" icon={icon} size={25}/></span>
        <Box>
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label >Remember Me</label>
          </div>
          <a href="#">Change Password</a>
        </Box>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        <label >Agree to <a href="#">Terms & Conditions</a></label>
        </div>
        <ButtonStyled>Login</ButtonStyled>
      </StyledForm>
    </Container>
  )
}

export default App
