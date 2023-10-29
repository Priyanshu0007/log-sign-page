import styled from "styled-components"
export const StyledForm =styled.div`
    width:80%;
    display:flex;
    flex-direction:column;
    span{
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    @media only screen and (max-width: 600px) {
        width:80%;
        padding:0 20px;
    }
`