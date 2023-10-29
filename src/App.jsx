import {Container} from "./components/Container.styled"
import {StyledImage} from "./components/Image.styled"
import {StyledForm} from "./components/Form.styled"
import {H1Styled} from "./components/Title.styled"
import {H2Styled} from "./components/SubTitle.styled"
import {InputStyled} from "./components/Input.styled"
import myImage from "../public/authentication.png"
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import { useState } from "react"

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
        <H2Styled>LoginId</H2Styled>
        <InputStyled type="text" id="fname" name="fname" placeholder="Enter Login ID"></InputStyled>
        <H2Styled>Password</H2Styled>
        <InputStyled type="password" id="pwd" name="pwd"/>
        <span onClick={handleToggle}>
          <img icon={icon} size={25}/>
        </span>
      </StyledForm>
    </Container>
  )
}

export default App
