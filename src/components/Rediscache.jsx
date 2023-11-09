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
        <h2>Redis Cache</h2>
        <div className='eventBox'>
            <div className='error'><BrowserEvent title={"Error Box"} value={"4"} /></div>
            <div className='sli'><BrowserEvent title={"SLI/SLO"} value={"00/00"} /></div>
            <div className='disruption'><BrowserEvent  title={"Disruptions"} value={"15"} /></div>
        </div>
        <div className='eventList'>
            <BrowserEventList title={"Network"} value={"580Mb/sec"} />
            <BrowserEventList title={"Cache Miss Count"} value={"21"} />
            <BrowserEventList title={"Evictions"} value={"12"} />
            <BrowserEventList title={"ReplicationLog"} value={"2"} />
            <BrowserEventList title={"CPU"} value={"21%"} />
            <BrowserEventList title={"Memory"} value={"45%"} />
            <BrowserEventList title={"CurrConnections"} value={"45"} />
        </div>

    </div>
  )
}

export default Browser