import React, { useState } from "react";

const Forummaaz = () => {
  const [name, setName] = useState({
    naam: "",
    age: "20",
  });

  const change = (ev) => {
    setName({
      naam: ev.target.value,
      age: name.age,
    });
  };
  const change2 = (ev) => {
    setName({
      naam: name.naam,
      age: ev.target.value,
    });

  };
  const btnClick = () => {
    console.log(name);



  };
  return (
    <>
    <div className="flex flex-col items-center">
    <h1 className=" text-6xl font-scorch">Form</h1>
      <label htmlFor="">Name: </label>
      <input type="text" value={name.naam} onChange={change} />
      <label htmlFor="">Age: </label>
      <input type="text" value={name.age} onChange={change2} />
      <button onClick={btnClick}>Click Me</button>
    </div>
    </>
  );
};

export default Forummaaz;
