import React from 'react'
import IndustriesEmploying from './components/industries/IndustriesEmploying';
import OccupationOverview from './components/OccupationOverview';
import RegionalTable from './components/trends/RegionalTable';
import data from './data'
// import data from './ProjectSampleResponseData'

function App() {
  console.log(data)
  const occupationTitle = data.occupation.title
  const regionTitle = data.region.title
  const summaryJobsRegional = data.summary.jobs.regional
  const summaryJobsYear = data.summary.jobs.year
  const summaryJobsNationalAvg = data.summary.jobs.national_avg
  const summaryJobsNationalAvgPercentage = Math.round(summaryJobsRegional/summaryJobsNationalAvg*100)


  const summaryJobsGrowthRegional = data.summary.jobs_growth.regional
  const summaryJobsGrowthStartYear = data.summary.jobs_growth.start_year
  const summaryJobsGrowthEndYear = data.summary.jobs_growth.end_year
  const summaryJobsGrowthNationalAvg = data.summary.jobs_growth.national_avg

  const summaryEarningsRegional = data.summary.earnings.regional
  const summaryEarningsNationalAvg = data.summary.earnings.national_avg


  const trendComparisonStartYear = data.trend_comparison.start_year
  const trendComparisonEndYear = data.trend_comparison.end_year
  const trendComparisonRegional = data.trend_comparison.regional
  const trendComparisonState = data.trend_comparison.state
  const trendComparisonNation = data.trend_comparison.nation


  
  const employingIndustries = data.employing_industries

  // console.log(trendComparisonRegional)
  return (
    <div className="app-container">
      <OccupationOverview 
        occupationTitle={occupationTitle} 
        regionTitle={regionTitle}
        summaryJobsRegional={summaryJobsRegional} 
        summaryJobsYear={summaryJobsYear} 
        summaryJobsNationalAvg={summaryJobsNationalAvg}
        summaryJobsGrowthRegional={summaryJobsGrowthRegional}
        summaryJobsGrowthStartYear={summaryJobsGrowthStartYear}
        summaryJobsGrowthEndYear={summaryJobsGrowthEndYear}
        summaryJobsGrowthNationalAvg={summaryJobsGrowthNationalAvg}
        summaryEarningsRegional={summaryEarningsRegional}
        summaryEarningsNationalAvg={summaryEarningsNationalAvg}
        summaryJobsNationalAvgPercentage={summaryJobsNationalAvgPercentage}
      />
      
      <RegionalTable startYear = {trendComparisonStartYear} endYear={trendComparisonEndYear} region={trendComparisonRegional} state={trendComparisonState} nation={trendComparisonNation}/>
      
      <IndustriesEmploying title={occupationTitle} industries={employingIndustries}/>
     
    </div>
  );
}

export default App;
