import { useState } from "react";

function Button1(props) {
  return <button onClick={props.func}>{props.name}</button>;
}

function Display() {
  const [num, setNum] = useState(0);
  const [list, setList] = useState([1, 2, 3, 4, 5]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    if (value === "" || (parseInt(value) >= 1 && parseInt(value) <= 99)) {
      setInputValue(value);
    }
  };

  const gen = () => {
    const numIntegers = parseInt(inputValue);
    if (numIntegers && numIntegers > 0) {
      const newList = [];
      for (let i = 0; i < numIntegers; i++) {
        newList.push(Math.floor(Math.random() * 100));
      }
      setList(newList);
    } else {
      setList([]);
    }
  };

  return (
    <>
      <h1>Linear Regression</h1>
      <label>Generate Numbers</label>
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Integer between 1 and 99"
      />
      <br />
      <Button1 name="Generate" func={gen} /> <br />
      <h2>List is:</h2>
      <h3>
        {list.map((item, index) => (
          <span key={index}>
            {item}
            {index < list.length - 1 ? ", " : ""}
          </span>
        ))}
      </h3>
    </>
  );
}

export default Display;
