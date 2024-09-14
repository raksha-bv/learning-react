import React, { FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must have atleast 3 characters" }),
  age: z.preprocess(
    (value) => Number(value),
    z.number().min(18, { message: "Must be older than 18" })
  ),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // const [person, setPerson] = useState({
  //   name: "",
  //   age: "",
  // });

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   // if (nameRef.current && ageRef.current)
  //   //   console.log(nameRef.current.value + " " + ageRef.current.value);
  //   console.log(person);
  // };
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          // value={person.name}
          id="name"
          // ref={nameRef}
          // onChange={(event) =>
          //   setPerson({ ...person, name: event.target.value })
          // }
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
        {/* {errors.name?.type === "required" && (
          <p className="text-danger">Name is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">Name should be atleast 3 characters</p>
        )} */}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          // value={person.age}
          id="age"
          // ref={ageRef}
          // onChange={(event) =>
          //   setPerson({ ...person, age: event.target.value })
          // }
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
