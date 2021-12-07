import React from 'react'

function OccupationSummaryCard(props) {
    return (
        <>
            <p>{props.top}</p>
            <p>{props.middle}</p>
            <p>{props.bottom}</p>
        </>
    )
}

export default OccupationSummaryCard
