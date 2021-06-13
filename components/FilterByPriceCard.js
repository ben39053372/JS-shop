import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export const FilterByPrice = () => {
  const min = 50;
  const max = 5000;
  const [value, setValue] = useState([min, max]);
  return (
    <div className="card">
      <h4>Filter By Price</h4>
      <div style={{ display: "flex", padding: "20px 0" }}>
        <div style={{ flex: 1 }}>Your range:</div>
        <div style={{ flex: 1, fontWeight: "bold" }}>
          ${value[0]} - ${value[1]}
        </div>
      </div>
      <Range
        defaultValue={[min, max]}
        value={value}
        onChange={setValue}
        max={max}
        min={min}
        dotStyle={{ border: "1px solid yellow" }}
      />
    </div>
  );
};
