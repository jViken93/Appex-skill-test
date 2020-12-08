import React from 'react'; 
import styled from 'styled-components';
import logo from '../img/logo.png'; 

const HomePage = () => {
    return(
        <StyledHome>
                <div>
                    <h1>Appex skill-test</h1>
                    <h3>Utført av Joakim Viken</h3>
                </div>
                <img src={logo} alt="Appex Logo"/>
           </StyledHome>
    )
}

const StyledHome = styled.div`
    display: flex;
    padding: 5rem 20rem;
    height: 30%;

    img{
        margin-left: 5rem;
    }
`



export default HomePage; 