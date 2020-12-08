import React, {useState} from 'react'; 
//Add Components
import Register from '../components/Register';
import AddBedrift from '../components/AddBedrift';


const RegisterList = () =>{
    const [formList, setFormList] = useState([
        {
            bedriftNavn: 'AIBEL AS',
            orgnr: '984 735 227',
            note: 'Å eie, drive og ha interesser i virksomhet innen utvikling,  fremstilling og salg av produkter og tjenester til olje- og  energisektoren, samt annet som naturlig står i forbindelse med dette,  herunder deltagelse i andre selskaper med tilsvarende virksomhet. ',
        },
    ]);

    return(
    <div>
        <h1>RegisterList</h1>
        <AddBedrift setFormList={setFormList}/>
        {formList.map(list => (
            <Register bedriftNavn={list.bedriftNavn} orgnr={list.orgnr} note={list.note} />
        ))}
    </div>
    );
}



export default RegisterList; 