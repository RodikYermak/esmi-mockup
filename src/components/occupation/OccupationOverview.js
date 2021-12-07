import React from 'react'

function OccupationOverview(props) {
    return (
        <div>
            <h1>Occupation Overview</h1>
            <p>{props.occupationTitle} in {props.regionTitle}</p>
            <h2>Occupation Summary for {props.occupationTitle}</h2>
            <p>---------------------</p>
        </div>
    )
}

export default OccupationOverview
