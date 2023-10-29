import styled from "styled-components";
export const Box=styled.div`
    display:flex;
    justify-content:space-between;
    padding-bottom:10px;
    padding-top:10px;
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
        text-decoration: none;
    }
    @media only screen and (max-width: 600px) {
        label{font-size:15px;}
        a{font-size:15px;}
    }
`
