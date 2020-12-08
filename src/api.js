//Base URL 
const base_url = "https://data.brreg.no/enhetsregisteret/api/enheter/"; 

//Appex URL 

const appex_orgnr = `994351958`; 

//Appex details

export const appex_url = () => `${base_url}${appex_orgnr}`;

//Search 
export const searchBedriftURL = (org_nr) => `${base_url}${org_nr}`


