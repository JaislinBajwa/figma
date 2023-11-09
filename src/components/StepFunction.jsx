import React from 'react'
//mport './Styles.css'

function BrowserEvent({title, value}) {
    return (
        <div title={title} value={value}>
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    )
}

function BrowserEventList({title, value}) {
    return (
        <div className='eventPair'>
            <div className='title'>{title}</div>
            <div className='value'>{value}</div>
        </div>
    )
}



function Browser() {
  return (
    <div className='card'>
        <h2>StepFunction</h2>
        <div className='eventBox'>
            <div className='error'><BrowserEvent title={"Error Box"} value={"5"} /></div>
            <div className='sli'><BrowserEvent title={"SLI/SLO"} value={"00/00"} /></div>
            <div className='disruption'><BrowserEvent  title={"Disruptions"} value={"5"} /></div>
        </div>
        <div className='eventList'>
            <BrowserEventList title={"Execution Time"} value={"45"} />
            <BrowserEventList title={"Execution Aborted"} value={"10"} />
            <BrowserEventList title={"Execution TimedOut"} value={"45"} />
            <BrowserEventList title={"Execution Throttled"} value={"15"} />
            <BrowserEventList title={"Execution Failed"} value={"5"} />
        </div>

    </div>
  )
}

export default Browser