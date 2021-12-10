import React from 'react'
import IndustriesEmploying from './components/IndustriesEmploying';
import OccupationOverview from './components/OccupationOverview';
import RegionalTable from './components/RegionalTrends';
// import data from './data'
import jsonData from './ProjectSampleResponseData'

function App() {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [emsiData, setEmsiData] = React.useState()
  const url = "https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32"
  React.useEffect(()=>{
    
    fetch(url)
      .then(res=>res.json())
      .then(result=>{
        setIsLoaded(true);
        setEmsiData(result); 
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  },[])
  
  const handleUpdating = () => {
    console.log('updating', jsonData)
    setEmsiData(jsonData)
    //  Send data to the backend via POST
    // fetch(url, {  // Enter your IP address here
    //   method: 'POST', 
    //   headers: {
    //     "Content-Type" : "application/json"
    //   }, 
    //   body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
    // })
    //   .then(res=>res.json())
    //   .then(result=>{
    //     console.log(result)
    //   })
  }

  // console.log('data:', data, url, items)
  // occupation
  // const occupationData = data.occupation
  // region
  // const regionData = data.region
  // summary
  // const summaryData = data.summary
  // trend_comparison
  // const trendComparisonData = data.trend_comparison
  // employing_industries
  // const employingIndustries = data.employing_industries

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
    <div className="app-container">
      <button onClick={handleUpdating}>Get Data for Graphic Designers</button>
      {emsiData && <OccupationOverview 
        occupation={emsiData.occupation} 
        region={emsiData.region} 
        summary={emsiData.summary} 
      />}
      {emsiData && <RegionalTable 
        trend={emsiData.trend_comparison} 
      />}
      {emsiData && <IndustriesEmploying 
        title={emsiData.occupation.title} 
        industries={emsiData.employing_industries}
      />}
    </div>
    // <div className="app-container">
    //   <OccupationOverview 
    //     occupation={occupationData} 
    //     region={regionData} 
    //     summary={summaryData} 
    //   />
    //   <RegionalTable 
    //     trend={trendComparisonData} 
    //   />
    //   <IndustriesEmploying 
    //     title={occupationData.title} 
    //     industries={employingIndustries}
    //   /> 
    // </div>
    );
  } 
}

export default App;
