import React from 'react'

function CityInput({value,onChange}){
  return (
    <div>
      <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={value}
          onChange={onChange}
        />
    </div>
  )
}

export default CityInput
