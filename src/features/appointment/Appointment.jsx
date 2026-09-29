import { useState } from "react";
import "./Appointment.scss";

const hoursMap = [
  { key: 0, value: "10:00" },
  { key: 1, value: "12:00" },
  { key: 2, value: "14:00" },
  { key: 3, value: "17:00" },
  { key: 4, value: "19:00" },
];

// TODO : use react hook form lib 

function Appointment() {
  const [model, setModel] = useState({
    date: "",
    hour: hoursMap.at(0).value,
    name: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setModel((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const validate = () => {
    const errors = {};

    if (!model.date) {
      errors.date = 'Required field.';
    }

    if (!model.hour) {
      errors.hour = 'Required field.';
    }

    if (!model.name) {
      errors.name = 'Required field.';
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = validate();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log('Form is valid');
      return;
    }

    console.log('Invalid form');
  };

  return (
    <div className="appointment">
      <div className="appointment__date">
        <div className="form">
          <div className="form__group">
            <label className="form__label" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="form__input"
              value={model.date}
              onChange={handleChange}
              aria-invalid={model.date}
            />
            { errors.date && <div className="form__error">{errors.date}</div>}
          </div>

          <div className="form__group">
            <label className="form__label" htmlFor="hour">
              Hour
            </label>
            <select
              name="hour"
              id="hour"
              className="form__input"
              value={model.hour}
              onChange={handleChange}
              aria-invalid={model.hour}
            >
              {hoursMap.map((h) => (
                <option key={h.key} value={h.value}>
                  {h.value}
                </option>
              ))}
            </select>
            { errors.hour && <div className="form__error">{errors.hour}</div>}
          </div>

          <div className="form__group">
            <label className="form__label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form__input"
              value={model.name}
              onChange={handleChange}
              aria-invalid={model.name}
            />
            { errors.name && <div className="form__error">{errors.name}</div>}
          </div>

          <div className="form__group">
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;