import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    color: var(--white);
    justify-content: space-around;
    width: 100%;
    position: relative;
    top: 0px;
    height: 55px;
    background: var(--blue);


    .title{
        cursor: pointer;
        width: 45%;
        text-align: left;
        font-size: 15px;
    }

    .title, .nav-bar{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .nav-bar{
        width: 45%;
        justify-content: space-evenly;
        
        a{
            color: var(--white);
            outline: none;
            text-decoration: none;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .MuiBadge-anchorOriginTopRightRectangle{
            top: -15px;
            right: 0px;
            font-weight: bold;
        }
    }

    @media(min-width: 720px){
        .title{
            padding-left: 2rem;
            justify-content: left;
        }

        .nav-bar{
            width: 15%;
        }
    }

`



