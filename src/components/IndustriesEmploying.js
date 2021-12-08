import React from 'react'

function IndustriesEmploying(props) {
    // employing_industries -> industries 
    let industriesArray = props.industries.industries
    // year
    let year = props.industries.year
    // jobs
    let jobsTotal = props.industries.jobs
    return (
        <div>
            <h2 className="border-bottom">Industries Employing {props.title}</h2>
            <p className="regional-header border-bottom flex pl"><span>Industry</span><span> <span className="table-el">Occupation jobs in industry({year})</span> <span className="table-el">% of Occupation in industry({year})</span>% of Total Jobs in Industry({year})</span> </p>
            <p className="regional-body border-bottom flex "> <span><img className="icon2" src="./assets/icon.png" alt="icon" /> {industriesArray[0].title}</span> <span><span className="tbl-row1">{industriesArray[0].in_occupation_jobs.toLocaleString('en-US')}</span> <span className="tbl-row1">{(industriesArray[0].in_occupation_jobs/jobsTotal*100).toFixed(1)}%</span> {(industriesArray[0].in_occupation_jobs/industriesArray[0].jobs*100).toFixed(1)}%</span></p>
            <p className="regional-body border-bottom flex "> <span><img className="icon2" src="./assets/icon.png" alt="icon" /> {industriesArray[1].title}</span> <span><span className="tbl-row1">{industriesArray[1].in_occupation_jobs.toLocaleString('en-US')}</span> <span className="tbl-row1">{(industriesArray[1].in_occupation_jobs/jobsTotal*100).toFixed(1)}%</span> {(industriesArray[1].in_occupation_jobs/industriesArray[1].jobs*100).toFixed(1)}%</span></p>
            <p className="regional-body border-bottom flex "> <span><img className="icon2" src="./assets/icon.png" alt="icon" /> {industriesArray[2].title}</span> <span><span className="tbl-row1">{industriesArray[2].in_occupation_jobs.toLocaleString('en-US')}</span> <span className="tbl-row1">{(industriesArray[2].in_occupation_jobs/jobsTotal*100).toFixed(1)}%</span> {(industriesArray[2].in_occupation_jobs/industriesArray[2].jobs*100).toFixed(1)}%</span></p>
            <p className="regional-body border-bottom flex "> <span><img className="icon2" src="./assets/icon.png" alt="icon" /> {industriesArray[3].title}</span> <span><span className="tbl-row1">{industriesArray[3].in_occupation_jobs.toLocaleString('en-US')}</span> <span className="tbl-row1">{(industriesArray[3].in_occupation_jobs/jobsTotal*100).toFixed(1)}%</span> {(industriesArray[3].in_occupation_jobs/industriesArray[3].jobs*100).toFixed(1)}%</span></p>
            <p className="regional-body border-bottom flex blue"> <span><img className="icon2" src="./assets/icon.png" alt="icon" /> {industriesArray[4].title}</span> <span><span className="tbl-row1">{industriesArray[4].in_occupation_jobs.toLocaleString('en-US')}</span> <span className="tbl-row1">{(industriesArray[4].in_occupation_jobs/jobsTotal*100).toFixed(1)}%</span> {(industriesArray[4].in_occupation_jobs/industriesArray[4].jobs*100).toFixed(1)}%</span></p>
        </div>
    )
}

export default IndustriesEmploying
