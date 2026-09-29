import "./List.scss";

function List({items}) {

  if (Array.isArray(items) && items.length === 0) {
    return (<p> Empty list.</p>)
  }

  return (
    <div className="list">
      {items.map((item, index) => <div key={index}>{`${[item.date]}: ${item.name}`}</div>)}
    </div>
  );
}

export default List;