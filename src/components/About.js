import React from 'react'
import { useForm } from "react-hook-form";
export function About() {
  const onSubmit = (data) => {
    console.log(data);
}
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <>
    <div className='container mt-2 mb-2'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" {...register("email",{ required: true, maxLength: 10 })}/>
    {errors.email && errors.email.type === "required" && (
        <span className='text-danger'>This is required</span>
      )}
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" {...register("password",{ required: true, maxLength: 10 })} />
    {errors.password && errors.password.type === "required" && (
        <span className='text-danger'>This is required</span>
      )}
  </div>
  
  <button type="submit" className="btn btn-primary mt-2">Submit</button>
</form>
    </div>
    
    </>
  )
}
