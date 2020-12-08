import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0; 
        padding: 0; 
        box-sizing: border-box; 
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }

        &::-webkit-scrollbar-thumb{
            background-color: darkgray;
        }
    }

    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }
    
    h2{
        font-size: 3rem; 
        font-family: 'Abril FatFace', cursive;
        font-weight: lighter;
    }
    
    h3{
        font-size: 1.3rem;
        color: #333; 
        padding: 1.5rem;
    }
    
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    
    a{
        text-decoration: none;
    }

    *{
        scrollbar-width: thin;
        scrollbar-color: rgba(155,155,155,0.5) transparent;
    }

    *::-webkit-scrollbar{
        width: 5px; 
    }

    *::-webkit-scrollbar-track{
        background: transparent; 
    }

    *::-webkit-scrollbar-thumb{
        background-color: rgba(155,155,155,0.5);
        border-radius: 20px;
    }

`

export default GlobalStyles;