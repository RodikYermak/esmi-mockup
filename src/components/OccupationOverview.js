import React from 'react'

function OccupationOverview(props) {
    // occupation
    let occupationTitle = props.occupation.title
    // region
    let regionTitle = props.region.title
    // summary -> jobs
    let jobsRegional = props.summary.jobs.regional
    let jobsYear = props.summary.jobs.year
    let jobsNationalAvg = props.summary.jobs.national_avg
    let jobsNationalAvgPercentage = Math.round(jobsRegional/jobsNationalAvg*100)
    // summary -> jobs_growth
    let jobsGrowthRegional = props.summary.jobs_growth.regional
    let jobsGrowthStartYear = props.summary.jobs_growth.start_year
    let jobsGrowthEndYear = props.summary.jobs_growth.end_year
    let jobsGrowthNationalAvg = props.summary.jobs_growth.national_avg
    // summary -> earnings
    let earningsRegional = props.summary.earnings.regional
    let earningsNationalAvg = props.summary.earnings.national_avg
  
    return (
        <div>
            <h1>Occupation Overview</h1>
            <p className="occupation-title">{occupationTitle} in {regionTitle}</p>
            <h2>Occupation Summary for {occupationTitle}</h2>
            <div className="occupation-cards-container">
                <div className="occupation-card">
                    <p className="occupation-card-top">{jobsRegional.toLocaleString('en-US')}</p>
                    <p className="occupation-card-middle">Jobs ({jobsYear})</p>  
                    {jobsNationalAvgPercentage>100 ? <p className="occupation-card-bottom">{jobsNationalAvgPercentage}% <span className="green">above</span> National average</p> : <p className="occupation-card-bottom">{jobsNationalAvgPercentage}% <span className="red">below</span> National average</p>}
                </div>    
                <div className="occupation-card">
                    {jobsGrowthRegional > 0 ? <p className="occupation-card-top green">+{jobsGrowthRegional}%</p> : <p className="occupation-card-top red">{jobsGrowthRegional}%</p>}
                    <p className="occupation-card-middle">% Change ({jobsGrowthStartYear}-{jobsGrowthEndYear})</p>
                    {jobsGrowthNationalAvg > 0 ? <p className="occupation-card-bottom">Nation: <span className="green">+{jobsGrowthNationalAvg}%</span></p> : <p className="occupation-card-bottom">Nation: <span className="red">{jobsGrowthNationalAvg}%</span></p>}
                </div>  
                <div className="occupation-card no-right-border">
                    <p className="occupation-card-top">${earningsRegional}/hr</p>
                    <p className="occupation-card-middle">Median Hourly Earnings</p>
                    <p className="occupation-card-bottom">Nation: ${earningsNationalAvg}/hr</p>
                </div>  
            </div>
        </div>
    )
}

export default OccupationOverview
