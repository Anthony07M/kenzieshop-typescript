import styled, { keyframes } from "styled-components";

const animationCart = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }

`

export const Container = styled.div`
    height: 90vh;
    animation: ${animationCart} 1.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const CartVazio = styled.div`
    h3{
        margin: 3rem 0;
    }

    button{
        font-weight: bold;
    }
`