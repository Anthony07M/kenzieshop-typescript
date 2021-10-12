import styled from "styled-components";
import { keyframes } from "styled-components";


const AnimationForm = keyframes`
    0%{
        position: relative;
        opacity: 0;
        transform: translateX(-100px);
    }
    100%{
        opacity: 1;
        transform: translateX(0px);
    }
`


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid var(--grey);
    border-radius: 15px;
    width: 80%;
    height: 50%;
    margin: 0 auto;
    animation: ${AnimationForm} 1.8s normal;

    input{
        padding: 0.75rem;
    }

    button{
        width: 80%;
        font-weight: bold;
    }
    a{
        color: var(--pink);
        font-size: 1rem;
    }
`