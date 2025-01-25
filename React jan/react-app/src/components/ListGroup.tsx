function ListGroup() {
  const items = ["New York", "San Francisco", "Italy", "Berlin", "Mumbai"];
  return (
    <>
      <h1>List</h1>
      <ul className="List-group">
        {items.map((item) => (
          <li key= {item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
