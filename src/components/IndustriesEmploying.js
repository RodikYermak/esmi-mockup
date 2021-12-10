import React from 'react'

function IndustriesEmploying(props) {
    // employing_industries -> industries 
    let industriesArray = props.industries.industries
    // year
    let year = props.industries.year
    // jobs
    let jobsTotal = props.industries.jobs
    
    const industriesElements = industriesArray.map((element)=>{
        let jobs = element.in_occupation_jobs.toLocaleString('en-US');
        let percent = (element.in_occupation_jobs/jobsTotal*100).toFixed(1);
        let change = (element.in_occupation_jobs/industriesArray[0].jobs*100).toFixed(1);
        return(
            <div className="loadbar border-bottom" key={`${element.title}`}>
                <span className="bar" style={{width: `${percent}%`}}></span>
                <span className="flex3">
                    <span className="left3">
                        <img className="icon3" src="./assets/icon.png" alt="icon" />
                        {element.title}
                    </span>
                    <span className="right3">
                        {jobs} 
                        <span className="ml3">{percent}%</span>
                        <span className="ml3">{change}%</span>
                    </span>
                </span>
            </div>     
        )
    })

    return (
        <>
            <h2>Industries Employing {props.title}</h2>
            <p className="border-bottom bold flex3 height3">
                <span>Industry</span>
                <span className="right4 flex3"> 
                    <span className="ml4">Occupation jobs in industry ({year})</span> 
                    <span className="ml4">% of Occupation in industry ({year})</span>
                    <span className="ml4">% of Total Jobs in Industry ({year})</span>
                </span> 
            </p>
            {industriesElements} 
        </>
    )
}

export default IndustriesEmploying