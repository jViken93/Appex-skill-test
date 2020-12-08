import React, {useState} from 'react';
//Animation
import styled from 'styled-components'; 
import {motion} from 'framer-motion'; 
//Redux and Routes
import { fetchSearch } from '../action/dataAction'; 
import { useDispatch } from 'react-redux';

const SearchBar = () => {
    const dispatched = useDispatch();
    const [textInput, setTextInput] = useState(''); 

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    }

    const submitSearch = (e) => {
        e.preventDefault();
        console.log(textInput);
        dispatched(fetchSearch(textInput));
    }


    return(
        <StyledNav>
            <Logo>
                <h1>Finn Bedrifter</h1>
            </Logo>
            <form className="search">
                <input value={textInput} onChange={inputHandler} type="text"/>
                <button onClick={submitSearch} type="submit">Search</button>
            </form>
        </StyledNav>
    );
}

const StyledNav = styled(motion.nav)`
    padding: 3rem 5rem; 
    text-align: center; 
    input{
        border-style: solid;
        width: 50%; 
        font-size: 1.5rem; 
        padding: 0.5rem;
        margin-top: 1rem;
    }
    button{
        font-size: 1.5rem; 
        border: none; 
        padding: 0.5rem 2rem; 
        cursor: pointer;
        background: lightblue;
        color: white;
    }
`

const Logo = styled(motion.div)`
    cursor: pointer;
`
export default SearchBar; 