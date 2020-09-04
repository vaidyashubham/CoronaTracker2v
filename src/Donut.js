import React from 'react'
import ReactStoreIndicator from 'react-score-indicator'

function Donut({ data, title }) {
  return (
    <div>
      <h3 className="text-center">{title}</h3>
      <ReactStoreIndicator
        value={isNaN(data) ? "00" : data}
        maxValue={100}
      />
    </div>
  )
}

export default Donut


