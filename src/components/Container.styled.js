import styled from "styled-components";
export const Container=styled.div`
    width:1000px;
    max-width:100%;
    padding:0 20px;
    margin:10% auto;
    display:flex;
    gap:9rem;
    justify-content:space-between;
    @media only screen and (max-width: 600px) {
        flex-direction:column;
        gap:2rem;
        padding:0 0;
    }
`
