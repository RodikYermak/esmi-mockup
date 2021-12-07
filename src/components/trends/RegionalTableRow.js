import React from 'react'

function RegionalTableRow(props) {
    return (
        <p>icon {props.region} {props.startJobs} {props.endJobs} {props.change} {props.percentage}</p>
    )
}

export default RegionalTableRow
