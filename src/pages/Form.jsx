import { useState } from "react";

function Form() {
  const [nam, setName] = useState("sohaib");
  let handleChange = (e) => {
    // console.log(e, "I am event");
    console.log("first");
    setName(e.target.value);
  };
  return (
    <div
      style={{
        backgroundColor: "lightBlue",
        color: "white",
        padding: "20px",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        height: "100vh",
      }}
    >
      {/* <h1>Form</h1> */}
      <label>Name</label>
      <br />
      <input
        type="text"
        value={nam}
        onChange={handleChange}
      />
      <br />
      <br />

      {/* <input value="ALi" /> */}
    </div>
  );
}

export default Form;
