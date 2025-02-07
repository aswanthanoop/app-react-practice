function ListGroup() {
  let items = ["New York", "San Francisco", "Italy", "Berlin", "Mumbai"];
  items = [];

  const getMessage = () => {
    items.length === 0 ? <p>No item</p> : null
  }

  return (
    <>
      <h1>List</h1>
      {getMessage}
      <ul className="List-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
