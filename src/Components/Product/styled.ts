import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--grey);
    border-radius: 15px;
    margin: 20px 25px;
    font-size: 15px;

    img{
        height: 260px;
    }

    .span-name{
        margin: 10px;
    }   

    p{
        padding: 0px 15px;
        text-align: center;
    }

    .span-price{
        margin: 10px;
        font-weight: bold;
        color: var(--green);
    }

    button{
        width: 50%;
        height: 100%;
        margin-bottom: 15px;
    }

    .button-remove{
        background: var(--pink);
    }
`