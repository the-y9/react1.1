import { useState } from "react";

function Entryhanged(e) {
  var val = e.target.value;
  var validated = 1;
  if (!(isNan(val) || parseInt(val) < 0 || parseInt(val) > 9)) {
    validated = val;
  }
}

function InputText() {
  return <input type="text" />;
}

function Label1(props) {
  return (
    <label>
      {" "}
      {props.value} {props.name}{" "}
    </label>
  );
}

function Button1() {
  const shoot = () => {
    alert("Manual Alert!");
  };
  return <button onClick={shoot}>alert</button>;
}

function Display() {
  return (
    <>
      <h1> Dashboard Display </h1>
      <Label1 value="Generate Numbers" />
      <br />
      <InputText />
      <br />
      <Button1 />
      <br />
    </>
  );
}

export default Display;
