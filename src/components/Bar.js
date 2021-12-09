import React from 'react'

function Bar(props) {
    // employing_industries -> industries 
    let industriesArray = props.industries.industries
    // year
    // let year = props.industries.year
    // jobs
    let jobsTotal = props.industries.jobs
    
    // let percentage = 30
    return (
        <>
            <div className="loadbar border-bottom">
                <span className="bar" style={{width: `${(industriesArray[0].in_occupation_jobs/jobsTotal*100).toFixed(1)}%`}}></span>
                <span>
                    <img className="icon2" src="./assets/icon.png" alt="icon" />
                    {industriesArray[0].title}
                    {industriesArray[0].in_occupation_jobs.toLocaleString('en-US')} 
                    {(industriesArray[0].in_occupation_jobs/jobsTotal*100).toFixed(1)}%
                    {(industriesArray[0].in_occupation_jobs/industriesArray[0].jobs*100).toFixed(1)}%
                </span>
            </div>
            <div className="loadbar border-bottom">
                <span className="bar" style={{width: `${(industriesArray[1].in_occupation_jobs/jobsTotal*100).toFixed(1)}%`}}></span>
                <span>
                    <img className="icon2" src="./assets/icon.png" alt="icon" />
                    {industriesArray[1].title}
                    {industriesArray[1].in_occupation_jobs.toLocaleString('en-US')} 
                    {(industriesArray[1].in_occupation_jobs/jobsTotal*100).toFixed(1)}%
                    {(industriesArray[1].in_occupation_jobs/industriesArray[1].jobs*100).toFixed(1)}%
                </span>
            </div>
            <div className="loadbar border-bottom">
                <span className="bar" style={{width: `${(industriesArray[2].in_occupation_jobs/jobsTotal*100).toFixed(1)}%`}}></span>
                <span>
                    <img className="icon2" src="./assets/icon.png" alt="icon" />
                    {industriesArray[2].title}
                    {industriesArray[2].in_occupation_jobs.toLocaleString('en-US')} 
                    {(industriesArray[2].in_occupation_jobs/jobsTotal*100).toFixed(1)}%
                    {(industriesArray[2].in_occupation_jobs/industriesArray[2].jobs*100).toFixed(1)}%
                </span>
            </div>
            <div className="loadbar border-bottom">
                <span className="bar" style={{width: `${(industriesArray[3].in_occupation_jobs/jobsTotal*100).toFixed(1)}%`}}></span>
                <span>
                    <img className="icon2" src="./assets/icon.png" alt="icon" />
                    {industriesArray[3].title}
                    {industriesArray[3].in_occupation_jobs.toLocaleString('en-US')} 
                    {(industriesArray[3].in_occupation_jobs/jobsTotal*100).toFixed(1)}%
                    {(industriesArray[3].in_occupation_jobs/industriesArray[3].jobs*100).toFixed(1)}%
                </span>
            </div>
            <div className="loadbar border-bottom">
                <span className="bar" style={{width: `${(industriesArray[4].in_occupation_jobs/jobsTotal*100).toFixed(1)}%`}}></span>
                <span>
                    <img className="icon2" src="./assets/icon.png" alt="icon" />
                    {industriesArray[4].title}
                    {industriesArray[4].in_occupation_jobs.toLocaleString('en-US')} 
                    {(industriesArray[4].in_occupation_jobs/jobsTotal*100).toFixed(1)}%
                    {(industriesArray[4].in_occupation_jobs/industriesArray[4].jobs*100).toFixed(1)}%
                </span>
            </div>
        </>
    )
}

export default Bar
