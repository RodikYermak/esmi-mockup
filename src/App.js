import React from 'react'
import IndustriesEmploying from './components/IndustriesEmploying';
import OccupationOverview from './components/OccupationOverview';
import RegionalTable from './components/RegionalTable';
import data from './data'
// import data from './ProjectSampleResponseData'

function App() {
  console.log(data)
  const occupationData = data.occupation
  const regionData = data.region
  const summaryData = data.summary
  const trendComparisonData = data.trend_comparison
  
  const employingIndustries = data.employing_industries

  // console.log(trendComparisonRegional)
  return (
    <div className="app-container">
      <OccupationOverview occupation={occupationData} region={regionData} summary={summaryData} />
      <RegionalTable trend={trendComparisonData} />
      
      
      <IndustriesEmploying title={occupationData.title} industries={employingIndustries}/>
     
    </div>
  );
}

export default App;
