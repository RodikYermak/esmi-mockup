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
            {industriesArray.map((element)=>{
                return (
                    <p 
                        key={element.title} 
                        className="regional-body border-bottom flex "
                    > 
                    <span>
                        <img className="icon2" src="./assets/icon.png" alt="icon" /> {element.title}
                    </span> 
                    
                    <span>
                        <span className="tbl-row1">{element.in_occupation_jobs.toLocaleString('en-US')}</span> 
                        <span className="tbl-row1">{(element.in_occupation_jobs/jobsTotal*100).toFixed(1)}%</span> 
                        {(element.in_occupation_jobs/element.jobs*100).toFixed(1)}%
                    </span>
                    </p>
                )
            })}
        </div>
    )
}

export default IndustriesEmploying
