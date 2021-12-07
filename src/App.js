
import IndustriesEmploying from './components/industries/IndustriesEmploying';
import OccupationOverview from './components/occupation/OccupationOverview';
import OccupationSummaryCard from './components/occupation/OccupationSummaryCard';
import RegionalTable from './components/trends/RegionalTable';
import RegionalTableRow from './components/trends/RegionalTableRow';
import RegionalTrends from './components/trends/RegionalTrends';
import data from './data'

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


  const employingIndustriesJobs = data.employing_industries.jobs
  const employingIndustries = data.employing_industries.industries




  console.log(
    occupationTitle, 
    regionTitle, 
    summaryJobsRegional, 
    summaryJobsYear, 
    summaryJobsNationalAvg,
    summaryJobsGrowthRegional,
   summaryJobsGrowthStartYear,
   summaryJobsGrowthEndYear,
   summaryJobsGrowthNationalAvg,
   summaryEarningsRegional,
   summaryEarningsNationalAvg,
   trendComparisonStartYear,
   trendComparisonEndYear,
   trendComparisonRegional,
   trendComparisonState,
   trendComparisonNation,
   employingIndustriesJobs,
   employingIndustries)
  return (
    <>
      <OccupationOverview occupationTitle={occupationTitle} regionTitle={regionTitle}/>
      <OccupationSummaryCard top={summaryJobsRegional} middle={`Jobs (${summaryJobsYear})`} bottom={`${summaryJobsNationalAvgPercentage}% above National average`}/>
      <OccupationSummaryCard top={`+${summaryJobsGrowthRegional}%`} middle={`% Change (${summaryJobsGrowthStartYear}-${summaryJobsGrowthEndYear}) `} bottom={`Nation: +${summaryJobsGrowthNationalAvg}%`}/>
      <OccupationSummaryCard top={`$${summaryEarningsRegional}/hr`} middle={`Median Hourly Earnings`} bottom={`Nation: $${summaryEarningsNationalAvg}/hr`}/>
      <RegionalTrends />
      <RegionalTable startYear = {trendComparisonStartYear} endYear={trendComparisonEndYear}/>
      <RegionalTableRow region={'Region'} startJobs={data.trend_comparison.regional[0]} endJobs={data.trend_comparison.regional[data.trend_comparison.regional.length-1]} change={data.trend_comparison.regional[data.trend_comparison.regional.length-1]-data.trend_comparison.regional[0]} percentage={10.2}/>
      <RegionalTableRow region={'State'} startJobs={13103} endJobs={14469} change={1366} percentage={10.4}/>
      <RegionalTableRow region={'Nation'} startJobs={300651} endJobs={326205} change={25554} percentage={8.5}/>
      
      <IndustriesEmploying title={occupationTitle}/>
    </>
  );
}

export default App;
