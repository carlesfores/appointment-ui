import { useForm } from "react-hook-form";
import { APPOINTMENT_HOURS } from "@/enums";
import './Form.scss';

function Form({onSubmit}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>

      <div className="form__group">
        <label className="form__label" htmlFor="date"> Date </label>
        <input
          id="date"
          type="date"
          className="form__input"
          { ...register("date", { 
            required: "Required field."
          })}
        />
        { errors.date && <div className="form__error">{errors.date?.message}</div>}
      </div>

      <div className="form__group">
        <label className="form__label" htmlFor="hour"> Hour </label>
        <select
          id="hour"
          className="form__input"
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
        { errors.hour && <div className="form__error">{errors.hour?.message}</div>}
      </div>

      <div className="form__group">
        <label className="form__label" htmlFor="name"> Name </label>
        <input
          id="name"
          className="form__input"
          { ...register("name", { 
            required: "Required field.", 
            maxLength: 255
          })}
        />
        { errors.name && <div className="form__error">Required field</div>}
      </div>

      <div className="form__group form__submit">
        <input type="submit" />
      </div>

    </form>
  );
}

export default Form;