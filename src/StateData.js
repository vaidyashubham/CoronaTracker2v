import React, { useEffect } from 'react'
import numeral from "numeral";

function StateData({ districtsData }) {
  // const covidData = districtsData ? districtsData : "";
  let arrData = [];

  // console.log(covidData)
  const mapData = () => {
    if (districtsData) {
      // console.log(1);
      console.log(districtsData["Maharashtra"])
      fetch("https://api.covid19india.org/state_district_wise.json")
        .then((response) => response.json())
        .then((data) => {
          const a = "districtData"
          const distData = data["Maharashtra"] && data["Maharashtra"][a]
          console.log(distData)
          for (const prop in distData) {
            const { active, confirmed, deceased, recovered } = distData[prop];
            arrData.push({
              district: prop,
              active: active,
              confirmed: confirmed,
              deaths: deceased,
              recovered: recovered
            })
            // console.log(arrData)
          }
        });
    } else {
      for (const prop in districtsData) {
        const { active, confirmed, deceased, recovered } = districtsData[prop];
        arrData.push({
          district: prop,
          active: active,
          confirmed: confirmed,
          deaths: deceased,
          recovered: recovered
        })
        // console.log(arrData)
      }
    }
  }
  mapData()

  useEffect(() => {
    const formatTable = (data) => {
      console.log(data)
      data.map(district => console.log(district.district))
      for (const prop in data) {
        const { district, active, confirmed, deceased, recovered } = data[prop];
        console.log(district)
        return (
          <tr>
            <td>{district}</td>
            <td>
              {numeral(active)}
            </td>
            <td>
              {numeral(confirmed).format("0,0")}
            </td> <td>
              {numeral(recovered).format("0,0")}
            </td> <td>
              {numeral(deceased).format("0,0")}
            </td>
          </tr>
        )
      }
    }
    formatTable(districtsData)
  }, [arrData])



  return (
    <div className="table">
      <tr>
        <td>District</td>
        <td>Active</td>
        <td>Confirmed</td>
        <td>Recovered</td>
        <td>Deaths</td>
      </tr>
      {/* {formatTable(arrData)} */}
    </div>
  )
}

export default StateData
