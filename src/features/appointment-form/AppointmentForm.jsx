import { useForm } from "react-hook-form";
import { APPOINTMENT_HOURS } from "@/enums";

import "./AppointmentForm.scss";

function AppointmentForm({ onSubmit }) {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label className="label" htmlFor="date"> Date </label>
          <input
            id="date"
            type="date"
            className="input"
            { ...register("date", { 
              required: "Required field."
            })}
          />
          { errors.date && (
            <div className="help is-danger">{errors.date?.message}</div>
          )}
        </div>

        <div className="field">
          <label className="label" htmlFor="hour"> Hour </label>
          <div className="control">
            <div className="select">
              <select
                id="hour"
                className="select"
                { ...register("hour", { 
                  required: "Required field." 
                })}
              >
                {(Object.values(APPOINTMENT_HOURS) || []).map((hour, idx) => (
                  <option key={idx} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
            </div>

          </div>
      
          { errors.hour && (
            <div className="help is-danger">{errors.hour?.message}</div>
          )}
        </div>

        <div className="field">
          <label className="label" htmlFor="name"> Name </label>
          <input
            id="name"
            placeholder="Enter name"
            className="input"
            { ...register("name", { 
              required: "Required field.", 
              maxLength: 255
            })}
          />
          { errors.name && (
            <div className="help is-danger">{errors.name?.message}</div>
          )}
        </div>

        <div className="field">
          <button type="submit" className="button is-primary">Book</button> 
        </div>
    </form>
  );
}

export default AppointmentForm;