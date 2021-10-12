import styled from "styled-components";

export const Container = styled.div`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
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