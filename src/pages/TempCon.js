import React, { useState } from "react";

export default function Display() {
  const [celcius, setCelcius] = useState("");
  const [kelvin, setKelvin] = useState("");
  const [f, setf] = useState("");

  const celchange = (e) => {
    const c = parseFloat(e.target.value);
    setCelcius(c);
    setKelvin(c + 273.15);
    setf((9 * c) / 5 + 32);
  };

  const kelchange = (e) => {
    const k = parseFloat(e.target.value);
    setCelcius(k - 273.15);
    setKelvin(k);
    setf(((k - 273.15) * 9) / 5 + 32);
  };

  const fchange = (e) => {
    const f = parseFloat(e.target.value);
    setCelcius(((f - 32) * 5) / 9);
    setKelvin(((f - 32) * 5) / 9 + 273.15);
    setf(f);
  };

  return (
    <>
      <h1 className="text-center">Temperature Converter</h1>
      <div className="container-sm round-box-container">
        <h3>Celcius</h3>
        <input
          className="ml-6 form-control"
          id="celcius"
          type="number"
          value={celcius}
          onChange={celchange}
          placeholder="in °C"
        />
        <h3>Kelvin</h3>
        <input
          className="ml-6 form-control"
          id="kelvin"
          type="number"
          value={kelvin}
          onChange={kelchange}
          placeholder="in K"
        />
        <h3>Fahrenheit</h3>
        <input
          className="ml-6 form-control"
          id="F"
          type="number"
          value={f}
          onChange={fchange}
          placeholder="in °F"
        />
      </div>
    </>
  );
}
