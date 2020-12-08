import React,{useEffect} from 'react'; 
//Redux
import {useDispatch, useSelector} from 'react-redux';
import {loadData} from '../action/dataAction';
//Styling and animation
import styled from 'styled-components'; 
import {motion} from 'framer-motion';
//Pages
import SearchBar from '../components/SearchBar';


const BedriftSøk = () => {
    //Fetch data
    const dispatch = useDispatch(); 
    useEffect(() => {
        dispatch(loadData());
    }, [dispatch])
    //Extract Data
    const {enhetsregisteret, searched} = useSelector(state => state.enhetsreg);
    console.log(searched.length)
    return (
        <Description>
            <SearchBar />
            {searched.toString().length ? (
            <div>
                <h2>{searched.navn}</h2>
                    <div className="basisinformasjon">
                        <h3>Basisinformasjon</h3>
                        <div className="line"></div>
                            <p className="property">Bedrift navn:</p>
                            <p className="value">{searched.navn}</p>
                            <p className="property">Organisasjonsnummer:</p>
                            <p className="value">{searched.organisasjonsnummer}</p>
                            <p className="property">Organisasjonsform:</p>
                            <p className="value">{searched && searched.organisasjonsform && searched.organisasjonsform.kode}</p>
                            <p className="property">Organisasjonsform beskrivelse:</p>
                            <p className="value">{searched && searched.organisasjonsform && searched.organisasjonsform.beskrivelse}</p>
                            <p className="property">Næringskode:</p>
                            <p className="value">{searched && searched.naeringskode1 && searched.naeringskode1.beskrivelse}</p>
            </div>
            <div className="adress">
                <h3>Adresse</h3>
                    <div className="line"></div>
                    <p className="property">Land:</p>
                    <p className="value">{searched && searched.postadresse && searched.postadresse.land}</p>
                    <p className="property">Postnummer:</p>
                    <p className="value">{searched && searched.postadresse && searched.postadresse.postnummer}</p>
                    <p className="property">Poststed:</p>
                    <p className="value">{searched && searched.postadresse && searched.postadresse.poststed}</p>
                    <p className="property">Bedrift navn:</p>
                    <p className="value">{searched && searched.postadresse && searched.postadresse.adresse}</p>
            </div>
            </div>
           ) : (
               <div>
                   <h2>{enhetsregisteret.navn}</h2>
                    <div className="basisinformasjon">
                        <h3>Basisinformasjon</h3>
                        <div className="line"></div>
                        <p className="property">Bedrift navn:</p>
                        <p className="value">{enhetsregisteret.navn}</p>
                        <p className="property">Organisasjonsnummer:</p>
                        <p className="value">{enhetsregisteret.organisasjonsnummer}</p>
                        <p className="property">Organisasjonsform:</p>
                        <p className="value">{enhetsregisteret && enhetsregisteret.organisasjonsform && enhetsregisteret.organisasjonsform.kode}</p>
                        <p className="property">Organisasjonsform beskrivelse:</p>
                        <p className="value">{enhetsregisteret && enhetsregisteret.organisasjonsform && enhetsregisteret.organisasjonsform.beskrivelse}</p>
                        <p className="property">Næringskode:</p>
                        <p className="value">{enhetsregisteret && enhetsregisteret.naeringskode1 && enhetsregisteret.naeringskode1.beskrivelse}</p>
                    </div>
                    <div className="adress">
                        <h3>Adresse</h3>
                        <div className="line"></div>
                        <p className="property">Land:</p>
                        <p className="value">{enhetsregisteret && enhetsregisteret.postadresse && enhetsregisteret.postadresse.land}</p>
                        <p className="property">Postnummer:</p>
                        <p className="value">{enhetsregisteret && enhetsregisteret.postadresse && enhetsregisteret.postadresse.postnummer}</p>
                        <p className="property">Poststed:</p>
                        <p className="value">{enhetsregisteret && enhetsregisteret.postadresse && enhetsregisteret.postadresse.poststed}</p>
                        <p className="property">Bedrift navn:</p>
                        <p className="value">{enhetsregisteret && enhetsregisteret.postadresse && enhetsregisteret.postadresse.adresse}</p>
                    </div>
                    </div>
           )}
        </Description>
    );
} 

const Description = styled(motion.div)`
    width: 90%;
    padding: 0rem 5rem;

    .basisinformasjon{
        padding: 2rem 0rem;
    }

    .line{
        background: #cccccc;
        height: 0.2rem; 
        margin: 2rem 0rem; 
        width: 100%;
    }    

    .property{
        width: 40%; 
        display: inline-block;
        box-sizing: border-box; 
        text-align: left;
        font-weight: bold;
    }

    .value{
        text-align: left; 
        padding-left: 10px; 
        width: 60%; 
        display: inline-block;
        box-sizing: border-box;
    }
`

export default BedriftSøk; 