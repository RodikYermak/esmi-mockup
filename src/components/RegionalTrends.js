import React from 'react'
import Chart from './Chart'

function RegionalTrends(props) {
    // trend_comparison 
    let startYear = props.trend.start_year
    let endYear = props.trend.end_year
    let regionalArray = props.trend.regional
    let stateArray = props.trend.state
    let nationArray = props.trend.nation
    // regional array data and calculations
    let startYearRegional = regionalArray[0]
    let endYearRegional = regionalArray[regionalArray.length-1]
    let changeRegional = endYearRegional-startYearRegional
    let percentageChangeRegional = changeRegional/startYearRegional*100
    // state array data and calculations
    let startYearState = stateArray[0]
    let endYearState = stateArray[stateArray.length-1]
    let changeState = endYearState-startYearState
    let percentageChangeState = changeState/startYearState*100
    // nation array data and calculations
    let startYearNation = nationArray[0]
    let endYearNation = nationArray[nationArray.length-1]
    let changeNation = endYearNation-startYearNation
    let percentageChangeNation = changeNation/startYearNation*100

    return (
        <div className="mb">
            <h2 className="border-bottom">Regional Trends</h2>
            <Chart /> 
            <p className="regional-header border-bottom flex pl">
                <span>Region</span>
                <span> 
                    <span className="table-el">{startYear} jobs</span> 
                    <span className="table-el">{endYear} jobs</span> 
                    <span className="table-el"> Change </span> 
                    % Change
                </span> 
            </p>
            <p className="regional-body border-bottom flex">
                <span><img className="icon" src="./assets/eclipse.png" alt="eclipse" />Region</span> 
                <span>
                    <span className="">{startYearRegional.toLocaleString('en-US')}</span> 
                    <span className="ml3">{endYearRegional.toLocaleString('en-US')}</span> 
                    <span className="ml3">{changeRegional.toLocaleString('en-US')}</span> 
                    <span className="ml3">{percentageChangeRegional.toFixed(1)}%</span>
                </span>
            </p>
            <p className="regional-body border-bottom flex">
                <span><img className="icon" src="./assets/rectangle.png" alt="eclipse" />State</span> 
                <span>
                    <span className="">{startYearState.toLocaleString('en-US')}</span> 
                    <span className="ml3">{endYearState.toLocaleString('en-US')}</span> 
                    <span className="ml3">{changeState.toLocaleString('en-US')}</span> 
                    <span className="ml3">{percentageChangeState.toFixed(1)}%</span>
                </span>
            </p>
            <p className="regional-body border-bottom flex">
                <span><img className="icon" src="./assets/polygon.png" alt="eclipse" />Nation</span> 
                <span>
                    <span className="">{startYearNation.toLocaleString('en-US')}</span> 
                    <span className="ml3">{endYearNation.toLocaleString('en-US')}</span> 
                    <span className="ml3">{changeNation.toLocaleString('en-US')}</span> 
                    <span className="ml3">{percentageChangeNation.toFixed(1)}%</span>
                </span>
            </p>
        </div>
    )
}

export default RegionalTrends
