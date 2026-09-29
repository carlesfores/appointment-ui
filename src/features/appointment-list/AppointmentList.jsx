import "./AppointmentList.scss";

function AppointmentList({ list, onReset }) {

  if (!Array.isArray(list)) {
    return (<p> Something went wrong.</p>)
  }

  if (Array.isArray(list) && list.length === 0) {
    return (<p> Empty list.</p>)
  }

  return (
    <div className="appointment-list">
      {list.map((item, index) => <div key={index}>{`${[item.date]}: ${item.name}`}</div>)}
      <button onClick={onReset} style={{ width: 'fit-content'}}>
        Reset list
      </button>
    </div>
  );
}

export default AppointmentList;