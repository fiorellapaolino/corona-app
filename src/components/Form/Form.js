import React from 'react'
import './form.scss'
import { useForm } from 'react-hook-form';

function Form({ data, setData }) {

  const { register, handleSubmit, errors } = useForm();

  function onSubmit(formData) {

    console.log(formData)
    setData(data => data.concat({
      ...formData,
      id: +new Date(), live: true, age: 22, female: true
    }))
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="form">
          <header>
            <h2>Add person</h2>
          </header>
          <section className="form-container">
            <div className="input-container ic1">
              <input name="first_name" {...register("first_name", { required: true, message: 'First Name is required' })} placeholder="First Name" />
            </div>
            <div className="input-container ic2">
              <input name="last_name" {...register("last_name", { required: true, message: 'Last Name is required' })} placeholder="Last Name" />
            </div>
            <div className="input-container ic2">
              <input type="country" {...register("country")} placeholder="Country" />
            </div>
            <div className="input-container q-infected">
              <label>Are you infected?</label>
              <input value="yes" type="checkbox" />
            </div>
            <div>
              <input {...register("age")} className="input-container" type="number" placeholder="Age" />
            </div>
            <div className="circles">
              <div>
                <input id="value1" type="radio" name="radio1" />
                <label htmlFor="value1">Female</label>
              </div>
              <div>
                <input id="value2" type="radio" name="radio1" />
                <label htmlFor="value2">Male</label>
              </div>
            </div>
          </section>
          <div className="input-container">
            <input type="submit" value="submit" />
          </div>
        </section>
        <span>
          {errors?.firstname?.lastname?.message}
        </span>
      </form>
    </div>
  )
}

export default Form
