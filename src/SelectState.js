import React, { useEffect, useState } from 'react'
import {
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core";
import StateData from "./StateData"
import "./SelectState.css"


function SelectState() {
  const [stateCode, setStateCode] = useState('')
  const [states, setStates] = useState([])
  const [distData, setDistrictsData] = useState({})

  const onStateSelect = (e) => {
    const stateCode = e.target.value;
    setStateCode(stateCode)
  }

  useEffect(() => {
    const getStateData = async () => {
      fetch("https://api.covid19india.org/state_district_wise.json")
        .then((response) => response.json())
        .then((data) => {
          const states = Object.getOwnPropertyNames(data)
          const removeFirstElement = states.shift()
          // console.log(data[stateCode])
          const a = "districtData"
          const distData = data[stateCode] && data[stateCode][a]
          setDistrictsData(distData)
          // console.log(distData)
          setStates(states)
        });
    };

    getStateData();
  }, [stateCode]);

  return (
    <div className="state">
      <FormControl className="app__dropdown">
        <Select
          variant="outlined"
          value={setStates}
          onChange={onStateSelect}
        >
          <MenuItem value="maharashtra">Maharashtra</MenuItem>
          {states.map((state) => (
            <MenuItem value={state}>{state}</MenuItem>
          ))}

        </Select>
      </FormControl>
      <StateData districtsData={distData} />
    </div>
  )
}

export default SelectState
