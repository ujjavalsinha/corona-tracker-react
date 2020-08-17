import logo from './logo.svg';
import styles from './App.module.css';
import React, { Component } from 'react';
// import Cards from './components/Cards/Cards.jsx';
import image from './images/corona.png';
// import Chart from './components/Chart/Chart.jsx';
// import CountryPicker from './components/CountryPicker/CountryPicker.jsx';

import  { Cards, Chart, CountryPicker} from './components';
import { fetchData } from './api';
class App extends Component {
  state = {
    data : {},
    country :''
  }
  async componentDidMount(){
    const { data : { confirmed, recovered, deaths, lastUpdate } } = await fetchData()
    const fetchedData = {
      confirmed : confirmed,
      recovered : recovered,
      deaths : deaths,
      lastUpdate : lastUpdate
    }
    
    this.setState({ data : fetchedData })
    this.setState({country : ''})
  }
  handleCountryChange = async ( country ) => {
    if(country==='global'){
      this.componentDidMount()
    }
    else{
      const { data : { confirmed, recovered, deaths, lastUpdate } } = await fetchData(country)
      const fetchedData = {
        confirmed : confirmed,
        recovered : recovered,
        deaths : deaths,
        lastUpdate : lastUpdate
      }
      this.setState({country:country})
      this.setState({data:fetchedData})
  }
  }
  render() { 
    const { data } = this.state;
    const { country } = this.state;
    return (
      
        <div className={styles.container}>
          <img className={styles.image} src={image} alt='COVID-19'/>
          <Cards data={data}/>
          <CountryPicker handleCountryChange={this.handleCountryChange} data={data} country={country}/>
          <Chart data={data} country={country}/>
          
        </div>
      
      );
  }
}
 
export default App;