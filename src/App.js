import React from 'react'
import IndustriesEmploying from './components/industries/IndustriesEmploying';
import OccupationOverview from './components/OccupationOverview';
import RegionalTable from './components/trends/RegionalTable';
import data from './data'
// import data from './ProjectSampleResponseData'

function App() {
  console.log(data)

  const occupationData = data.occupation
  const regionData = data.region
  const summaryData = data.summary



  

  const trendComparisonStartYear = data.trend_comparison.start_year
  const trendComparisonEndYear = data.trend_comparison.end_year
  const trendComparisonRegional = data.trend_comparison.regional
  const trendComparisonState = data.trend_comparison.state
  const trendComparisonNation = data.trend_comparison.nation


  
  const employingIndustries = data.employing_industries

  // console.log(trendComparisonRegional)
  return (
    <div className="app-container">
      <OccupationOverview occupation={occupationData} region={regionData} summary={summaryData} />
      
      {/* <RegionalTable startYear = {trendComparisonStartYear} endYear={trendComparisonEndYear} region={trendComparisonRegional} state={trendComparisonState} nation={trendComparisonNation}/> */}
      
      {/* <IndustriesEmploying title={occupationTitle} industries={employingIndustries}/> */}
     
    </div>
  );
}

export default App;
