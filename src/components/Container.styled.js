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
        margin:0;
    }
    label{
        font-family: Poppins;
        font-size: 18px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color: #737B86;
    }
    a{
        font-family: Poppins;
        font-size: 18px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: right;
        color: #F78719;
    }
    @media only screen and (max-width: 600px) {
        label{font-size:15px;}
        a{font-size:15px;}
    }
`
