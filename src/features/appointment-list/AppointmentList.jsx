import "./AppointmentList.scss";

function AppointmentList({ list, onReset }) {

  if (Array.isArray(list) && list.length === 0) {
    return (<p> Empty list.</p>)
  }

  return (
    <div className="appointment-list">
      <div className="appointment-list__content">
        {list.map((item, index) => <div key={index}>{`${[item.date]}: ${item.name}`}</div>)}
      </div>
      {list.length > 0 && (
        <button onClick={onReset} style={{ width: 'fit-content'}}>
          Reset list
        </button>
      )}
    </div>
  );
}

export default AppointmentList;