import React, {useState,useEffect} from 'react';
import { FormControl, NativeSelect} from '@material-ui/core';
import { fetchCountries } from '../../api'
import styles from './CountryPicker.module.css'
const CountryPicker = ({handleCountryChange, data}) => {
    const [ countries,setCountries] = useState([])
    useEffect(()=>{
        const fetchAPI = async ()=> {
            setCountries(await fetchCountries())
        }
        fetchAPI()
    },[])
    console.log("DATA FROM APP>JS : ",data)
    return (
        <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e)=>{handleCountryChange(e.target.value)}}>
        <option value='global'>Global</option>
        {countries.map(country => <option key={country} value={country}>{country}</option>)}
        </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker;