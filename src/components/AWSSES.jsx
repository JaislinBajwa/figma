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
        <h2>AWS SES</h2>
        <div className='eventBox'>
            <div className='error'><BrowserEvent title={"Error Box"} value={"4"} /></div>
            <div className='sli'><BrowserEvent title={"SLI/SLO"} value={"00/00"} /></div>
            <div className='disruption'><BrowserEvent  title={"Disruptions"} value={"15"} /></div>
        </div>
        <div className='eventList'>
            <BrowserEventList title={"Complaint"} value={"2"} />
            <BrowserEventList title={"Delivery"} value={"5.2ms"} />
            <BrowserEventList title={"Send"} value={"125"} />
           
        </div>

    </div>
  )
}

export default Browser