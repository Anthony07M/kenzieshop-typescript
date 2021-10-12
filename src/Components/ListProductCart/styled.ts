import styled from "styled-components";

export const Container = styled.div`
    height: 90vh;

`

export const SectionProducts = styled.section`
    
`

export const SectionResume = styled.section`

    border:  1px solid var(--pink);
    border-radius: 15px;
    width: 80%;
    margin: 0 auto;
    margin-top: 3rem;
    padding: 0.5rem;
    h3{
        text-align: center
    }

    p{
        display: flex;
        justify-content: space-between;
        margin: 5px 0px;
    }
    p .right{
        font-weight: bold;
    }

    p .total {
        color: var(--blue);
        font-weight: bold;
    }

    .contentButton{
        justify-content: center;
    }

    .contentButton button {
        margin: 10px 0;
        font-weight: bold;
    }
` 