import React from 'react'

function OccupationOverview(props) {
    return (
        <div>
            <h1>Occupation Overview</h1>
            <p className="occupation-title">{props.occupationTitle} in {props.regionTitle}</p>
            <h2>Occupation Summary for {props.occupationTitle}</h2>
            <div className="occupation-cards-container">
                <div className="occupation-card">
                    <p className="occupation-card-top">{props.summaryJobsRegional.toLocaleString('en-US')}</p>
                    <p className="occupation-card-middle">Jobs ({props.summaryJobsYear})</p>
                    <p className="occupation-card-bottom">{props.summaryJobsNationalAvgPercentage}% <span className="green">above</span> National average</p>
                </div>    
                <div className="occupation-card">
                    <p className="occupation-card-top green">+{props.summaryJobsGrowthRegional}%</p>
                    <p className="occupation-card-middle">% Change ({props.summaryJobsGrowthStartYear}-{props.summaryJobsGrowthEndYear})</p>
                    <p className="occupation-card-bottom">Nation: <span className="green">+{props.summaryJobsGrowthNationalAvg}%</span></p>
                </div>  
                <div className="occupation-card no-right-border">
                    <p className="occupation-card-top">${props.summaryEarningsRegional}/hr</p>
                    <p className="occupation-card-middle">Median Hourly Earnings</p>
                    <p className="occupation-card-bottom">Nation: ${props.summaryEarningsNationalAvg}/hr</p>
                </div>  
            </div>
        </div>
    )
}

export default OccupationOverview
