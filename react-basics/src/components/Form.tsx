import React, { FormEvent, useRef, useState } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // if (nameRef.current && ageRef.current)
    //   console.log(nameRef.current.value + " " + ageRef.current.value);
    console.log(person);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          value={person.name}
          id="name"
          // ref={nameRef}
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          value={person.age}
          id="age"
          // ref={ageRef}
          onChange={(event) =>
            setPerson({ ...person, age: event.target.value })
          }
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
