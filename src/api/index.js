import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';
const dailydata = url+'/daily';
const countryUrl = url + '/countries'
export const fetchData = async (country) => {
    let changedUrl = url;
    if(country){
        changedUrl = `${url}/countries/${country}`;
    }
    try{
        console.log("URL :",changedUrl)
        const response = await axios.get(changedUrl);
        return response
    }catch(error){
        
    }
        
}

export const fetchDailyData = async () => {
    try{
        const { data } = await axios.get(dailydata)
        return data
    }
    catch(error){}
}

export const fetchCountries = async () => {
    try {
        const { data : {countries} } = await axios.get(countryUrl)
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error)
    }
}