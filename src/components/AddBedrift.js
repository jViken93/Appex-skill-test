import React, {useState} from 'react'; 
import styled from 'styled-components'; 


const AddBedrift = ({setFormList}) => {
    const [name, setName] = useState(''); 
    const [orgnr, setOrgNr] = useState('');
    const [notat, setNotat] = useState('');

    const upDateName = (e) => {
        setName(e.target.value); 
    }

    const upDateOrgNr = (e) => {
        setOrgNr(e.target.value); 
    }

    const upDateNotat = (e) => {
        setNotat(e.target.value); 
    }

    const addNotat = (e) => {
        e.preventDefault(); 

        setFormList(state => [...state, {bedriftNavn: name, orgnr: orgnr, note: notat}])
    }

    return(
        <FormStyle>
        <form onSubmit={addNotat}>
            <label for="bname">Bedriftsnavn
                <input type="text" name="bedriftNavn" value={name} onChange={upDateName}></input>
            </label>
            <label for="orgnr">Organiasjonsnummer
                <input type="text" name="orgnr" value={orgnr} onChange={upDateOrgNr}></input>
            </label>
            
            <label for="note">Notat
                <textarea className="bigger-input" type="text" name="note" value={notat} onChange={upDateNotat}></textarea>
            </label>
            <button>Submit</button>
        </form>
        </FormStyle>
    ); 
}

//Styles
const FormStyle = styled.div`
    padding: 2rem 3rem;

    label{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        text-align: right;
        width: 400px;
        line-height: 26px;
        margin-bottom: 10px;
    }

    input {
        height: 20px;
        flex: 0 0 200px;
        margin-left: 10px;
    }

    textarea {
        height: 20px;
        flex: 0 0 200px;
        margin-left: 10px;
    }

    button {
        margin-left: 200px;
        font-size: 1rem; 
        border: none; 
        padding: 0.5rem 2rem; 
        cursor: pointer;
        background: lightblue;
        color: white;
    }

    .bigger-input{
        height: 5rem;
    }
`

export default AddBedrift;