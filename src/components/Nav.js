import React from 'react'; 
import styled from 'styled-components'; 
import { Link } from 'react-router-dom'; 

const Nav = () => {
    return(
        <StyledNav>
            <Link to="/"><h1>Skill-test</h1></Link>
            <ul>
                <li>
                    <Link to="/hjem">Home</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/">Søk Bedrift</Link>
                </li>
            </ul>
        </StyledNav>
    )
}; 

const StyledNav = styled.nav`
    min-height: 10vh; 
    display: flex; 
    margin: auto; 
    justify-content: space-between; 
    align-items: center; 
    padding: 1rem 10rem;

    a{
        color: black; 
        text-decoration: none; 
    }

    ul{
        display: flex; 
        list-style: none;
    }

    li{
        padding-left: 10rem;
    }
`




export default Nav; 