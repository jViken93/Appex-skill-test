import React from 'react'; 
//style
import styled from 'styled-components';

const Register = ({bedriftNavn, orgnr, note}) => {
        return(
            <SubmitetForm>
               <h3>{bedriftNavn}</h3>
               <div className="line"></div>
                <h4>Orgnr: {orgnr}</h4>
                <div className="line"></div>
                <p>{note}</p>
                <div className="end-line"></div>
            </SubmitetForm>
            );
        }
        

//Styles
const SubmitetForm = styled.div`
    padding: 1rem 2rem;

    h3{
        padding: 0rem;
    }

    .line{
        background: #cccccc;
        height: 0.2rem; 
        margin: 2rem 0rem; 
        width: 15%;
    }    

    .end-line{
        background: #cccccc;
        height: 0.2rem; 
        margin: 2rem 0rem; 
        width: 50%;
    }

`

export default Register; 