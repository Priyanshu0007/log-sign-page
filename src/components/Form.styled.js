import styled from "styled-components"
export const StyledForm =styled.div`
    width:100%;
    span{
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            postion:absolute;
            margin-right:10rem;
        }
    }
    @media only screen and (max-width: 600px) {
        width:80%;
        padding:0 20px;
    }
`