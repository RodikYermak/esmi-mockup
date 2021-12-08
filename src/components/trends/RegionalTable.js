import React from 'react'

function RegionalTable(props) {
    let startYearRegional = props.region[0]
    let endYearRegional = props.region[props.region.length-1]
    let changeRegional = endYearRegional-startYearRegional
    let percentageChangeRegional = changeRegional/startYearRegional*100
    
    let startYearState = props.state[0]
    let endYearState = props.state[props.state.length-1]
    let changeState = endYearState-startYearState
    let percentageChangeState = changeState/startYearState*100
    
    let startYearNation = props.nation[0]
    let endYearNation = props.nation[props.nation.length-1]
    let changeNation = endYearNation-startYearNation
    let percentageChangeNation = changeNation/startYearNation*100
    


    return (
        <div className="mb">
            <h2 className="border-bottom">Regional Trends</h2>
            <p className="regional-header border-bottom flex pl"><span>Region</span><span> <span className="table-el">{props.startYear} jobs</span> <span className="table-el">{props.endYear} jobs</span> <span className="table-el"> Change </span> % Change</span> </p>
            <p className="regional-body border-bottom flex"><span><img className="icon" src="./assets/eclipse.png" alt="eclipse" />Region</span> <span><span className="tbl-row1">{startYearRegional.toLocaleString('en-US')}</span> <span className="tbl-row1">{endYearRegional.toLocaleString('en-US')}</span> <span className="tbl-row1">{changeRegional.toLocaleString('en-US')}</span> {percentageChangeRegional.toFixed(1)}%</span></p>
            <p className="regional-body border-bottom flex"><span><img className="icon" src="./assets/rectangle.png" alt="eclipse" />State</span> <span><span className="tbl-row1">{startYearState.toLocaleString('en-US')}</span> <span className="tbl-row1">{endYearState.toLocaleString('en-US')}</span> <span className="tbl-row1">{changeState.toLocaleString('en-US')}</span> {percentageChangeState.toFixed(1)}%</span></p>
            <p className="regional-body border-bottom flex"><span><img className="icon" src="./assets/polygon.png" alt="eclipse" />Nation</span> <span><span className="tbl-row1">{startYearNation.toLocaleString('en-US')}</span> <span className="tbl-row1">{endYearNation.toLocaleString('en-US')}</span> <span className="tbl-row1">{changeNation.toLocaleString('en-US')}</span> {percentageChangeNation.toFixed(1)}%</span></p>
        </div>
    )
}

export default RegionalTable
