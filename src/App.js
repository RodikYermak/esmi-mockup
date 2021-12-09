import React from 'react'
import IndustriesEmploying from './components/IndustriesEmploying';
import OccupationOverview from './components/OccupationOverview';
import RegionalTable from './components/RegionalTrends';
import Chart from './components/Chart';
import data from './data'
// import data from './ProjectSampleResponseData'

function App() {
  // occupation
  const occupationData = data.occupation
  // region
  const regionData = data.region
  // summary
  const summaryData = data.summary
  // trend_comparison
  const trendComparisonData = data.trend_comparison
  // employing_industries
  const employingIndustries = data.employing_industries

  return (
    <div className="app-container">
      <OccupationOverview occupation={occupationData} region={regionData} summary={summaryData} />
      <Chart /> 
      <RegionalTable trend={trendComparisonData} />
      <IndustriesEmploying title={occupationData.title} industries={employingIndustries}/> 
      

    </div>
  );
}

export default App;
