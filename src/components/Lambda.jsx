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
        <h2>Lambda</h2>
        <div className='eventBox'>
            <div className='error'><BrowserEvent title={"Error Box"} value={"12"} /></div>
            <div className='sli'><BrowserEvent title={"SLI/SLO"} value={"00/00"} /></div>
            <div className='disruption'><BrowserEvent  title={"Disruptions"} value={"5"} /></div>
        </div>
        <div className='eventList'>
            <BrowserEventList title={"Invocations Success"} value={"2"} />
            <BrowserEventList title={"Invocations Failed"} value={"15"} />
            <BrowserEventList title={"Deadletters Error"} value={"10"} />
            <BrowserEventList title={"Throttles"} value={"5"} />
            <BrowserEventList title={"Durations"} value={"5.22ms"} />
        </div>

    </div>
  )
}

export default Browser