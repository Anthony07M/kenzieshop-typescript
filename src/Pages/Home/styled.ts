import styled, { keyframes } from "styled-components";


const animationHome = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`

export const Container = styled.div`
    height: 90vh;
    animation: ${animationHome} 2s normal;
    
    .spnner{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%);
    }
    @media(min-width: 720px){

        .container-product-list{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        .product{
            width: 22%;
        }
    }
`