import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 90vh;

    a{
        font-family: monospace;
        font-size: 1rem;
        color: var(--pink);
    }
    @media(min-width: 720px){
        form{
            height: 70%;
            width: 30%;
            
        }
        
        input{
            width: 290px;
        }
    }
`