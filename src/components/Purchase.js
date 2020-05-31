import React from "react";
import useForm from "react-hook-form";
import { A } from "hookrouter";

const active = {
  fontSize: "15px"
};
export default function Purchase() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div>
      <button>
        <A style={{ textDecoration: "none" }} href="/">
          HOME
        </A>{" "}
        <br />
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Full Name</label>
        <input name="fullname" ref={register} />
        <label>Beer Name</label>
        <input
          name="beerName"
          ref={register({ required: true, maxLength: 10 })}
        />

        <select style={active} name="Title" ref={register({ required: true })}>
          <option value="">Select...</option>
          <option value="six-pack">Six Pack</option>
          <option value="twelve-pack">Twelve Pack</option>
        </select>
        <label>
          <input type="checkbox" placeholder="+18" name="+18" ref={register} />I
          am 18 and above
        </label>
        {errors.beerType && <p>This field is required</p>}
        <input type="submit" value="Pay Here" />
      </form>
    </div>
  );
}
