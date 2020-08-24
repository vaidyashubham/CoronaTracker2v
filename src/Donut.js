import React from 'react'
import ReactStoreIndicator from 'react-score-indicator'
import "./Donut.css"

function Donut({ data, title }) {
  return (
    <div className="donut">
      <h4 className="text-center">{title}</h4>
      <ReactStoreIndicator
        value={isNaN(data) ? "00" : data}
        maxValue={100}
      />
    </div>
  )
}

export default Donut


