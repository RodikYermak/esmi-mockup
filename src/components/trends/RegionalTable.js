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
        <>
            <h1>Regional Trends</h1>
            <p>Region {props.startYear} jobs {props.endYear} jobs Change % Change </p>
            <p> <img className="icon" src="./assets/eclipse.png" alt="eclipse" />Region {startYearRegional.toLocaleString('en-US')} {endYearRegional.toLocaleString('en-US')} {changeRegional.toLocaleString('en-US')} {percentageChangeRegional.toFixed(1)}%</p>
            <p> <img className="icon" src="./assets/rectangle.png" alt="rectangle" />State {startYearState.toLocaleString('en-US')} {endYearState.toLocaleString('en-US')} {changeState.toLocaleString('en-US')} {percentageChangeState.toFixed(1)}%</p>
            <p> <img className="icon" src="./assets/polygon.png" alt="polygon" />Nation {startYearNation.toLocaleString('en-US')} {endYearNation.toLocaleString('en-US')} {changeNation.toLocaleString('en-US')} {percentageChangeNation.toFixed(1)}%</p>
        </>
    )
}

export default RegionalTable
