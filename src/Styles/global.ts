import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --blue: #151577;
        --pink: #df4040;
        --hover-primary: #5a70b0;
        --white: #ffff;
        --grey:  #cccc;
        --green: #0e710e;
    }
    
    * {
       margin:0;
       padding:0;
       box-sizing: border-box;
       font-family: 'Roboto', sans-serif;
      }
    
      button{
          background: var(--blue);
          color: var(--white);
          padding: 10px;
          border-radius:10px;
          font-weight: bold;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
      }

      button:hover{
          background: var(--hover-primary);
      }

      a{
            outline: none;
            text-decoration: none;
        }

`