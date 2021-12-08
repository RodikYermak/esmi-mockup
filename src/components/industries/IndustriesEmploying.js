import React from 'react'

function IndustriesEmploying(props) {
    console.log(
        props.industries
    )
    let year = props.industries.year
    let industriesArray = props.industries.industries
    let jobsTotal = props.industries.jobs
    return (
        <div>
            <h1>Industries Employing {props.title}</h1>
            <p>Industry Occupation jobs in industry({year}) % of Occupation in industry({year}) % of Total Jobs in Industry({year})</p>
            <p className="blue" style={{width: "37.7%"}}> <img className="icon" src="./assets/icon.png" alt="icon" /> {industriesArray[0].title} {industriesArray[0].in_occupation_jobs.toLocaleString('en-US')} {(industriesArray[0].in_occupation_jobs/jobsTotal*100).toFixed(1)}% {(industriesArray[0].in_occupation_jobs/industriesArray[0].jobs*100).toFixed(1)}%</p>
            <p className="blue" style={{width: "60%"}}> <img className="icon" src="./assets/icon.png" alt="icon" /> {industriesArray[1].title} {industriesArray[1].in_occupation_jobs.toLocaleString('en-US')} {(industriesArray[1].in_occupation_jobs/jobsTotal*100).toFixed(1)}% {(industriesArray[1].in_occupation_jobs/industriesArray[1].jobs*100).toFixed(1)}%</p>
            <p className="blue" style={{width: "77%"}}> <img className="icon" src="./assets/icon.png" alt="icon" /> {industriesArray[2].title} {industriesArray[2].in_occupation_jobs.toLocaleString('en-US')} {(industriesArray[2].in_occupation_jobs/jobsTotal*100).toFixed(1)}% {(industriesArray[2].in_occupation_jobs/industriesArray[2].jobs*100).toFixed(1)}%</p>
            <p className="blue" style={{width: "57%"}}> <img className="icon" src="./assets/icon.png" alt="icon" /> {industriesArray[3].title} {industriesArray[3].in_occupation_jobs.toLocaleString('en-US')} {(industriesArray[3].in_occupation_jobs/jobsTotal*100).toFixed(1)}% {(industriesArray[3].in_occupation_jobs/industriesArray[3].jobs*100).toFixed(1)}%</p>
            <p className="blue" style={{width: "100%"}}> <img className="icon" src="./assets/icon.png" alt="icon" /> {industriesArray[4].title} {industriesArray[4].in_occupation_jobs.toLocaleString('en-US')} {(industriesArray[4].in_occupation_jobs/jobsTotal*100).toFixed(1)}% {(industriesArray[4].in_occupation_jobs/industriesArray[4].jobs*100).toFixed(1)}%</p>
        </div>
    )
}

export default IndustriesEmploying
