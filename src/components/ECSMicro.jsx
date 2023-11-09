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
        <h2>ECS-Microservices</h2>
        <div className='eventBox'>
            <div className='error'><BrowserEvent title={"Error Box"} value={"5"} /></div>
            <div className='sli'><BrowserEvent title={"SLI/SLO"} value={"00/00"} /></div>
            <div className='disruption'><BrowserEvent  title={"Disruptions"} value={"5"} /></div>
        </div>
        <div className='eventList'>
            <BrowserEventList title={"Response time"} value={"45"} />
            <BrowserEventList title={"Error Rate"} value={"15"}/>
            <BrowserEventList title={"Request Per Minute"} value={"10"} />
            <BrowserEventList title={"5 slowest transactions"} value={">"} />
            <BrowserEventList title={"Apdex Score"} value={"5.21ms"} />
        </div>

    </div>
  )
}

export default Browser