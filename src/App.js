import React from 'react'
import axios from 'axios'
import IndustriesEmploying from './components/IndustriesEmploying';
import OccupationOverview from './components/OccupationOverview';
import RegionalTrends from './components/RegionalTrends';

// import data from './data'
import jsonData from './ProjectSampleResponseData'

function App() {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isDisplayed, setIsDisplayed] = React.useState(true)
  const [emsiData, setEmsiData] = React.useState()
  
  const url = "https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32"
    
  React.useEffect(()=>{
    axios
      .get(url)
      .then(response => {
        setEmsiData(response.data);
        setIsLoaded(true);
      })
      .catch(error => {
        setError(error);
      })
  },[])
  
  const handleUpdating = () => {
    setEmsiData(jsonData)
    setIsDisplayed(false)
    // POST METHOD IS NOT WORKING FOR SOME REASONS
    // MAYBE THERE ARE SOME RESTRICTIONS ON UPDATING DATA 
    // axios
    //   .post(url, jsonData)
    //   .then(response => {
    //     console.log(response)
    //   })
    //   .catch(error => {
    //     setError(error);
    //   })
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
    <div className="app-container">
      {isDisplayed && <button className="btn" onClick={handleUpdating}>Display {jsonData.occupation.title} overview</button>}
      {emsiData && <OccupationOverview 
        occupation={emsiData.occupation} 
        region={emsiData.region} 
        summary={emsiData.summary} 
      />}
      {emsiData && <RegionalTrends 
        trend={emsiData.trend_comparison} 
      />}
      {emsiData && <IndustriesEmploying 
        title={emsiData.occupation.title} 
        industries={emsiData.employing_industries}
      />}
    </div>
    );
  } 
}

export default App;
