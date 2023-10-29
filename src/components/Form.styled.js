import styled from "styled-components"
export const StyledForm =styled.div`
    width:80%;
    display:flex;
    flex-direction:column;
    gap:1.5rem;
    span{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        z-index:2;
    }
    p{
        margin: auto;
        font-family: Poppins;
        font-size: 16px;
        font-weight: 300;
        line-height: 27px;
        letter-spacing: 0em;
        text-align: left;

        a{
            font-family: Poppins;
            font-size: 16px;
            font-weight: 400;
            line-height: 27px;
            letter-spacing: 0em;
            text-align: left;
        }
    }
    @media only screen and (max-width: 600px) {
        width:80%;
        padding:0 20px;
        p{font-size:15px;}
        a{font-size:15px;}
    }
`