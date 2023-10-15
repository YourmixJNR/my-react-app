function Dad() {
  // Sample data - an array of items
  const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];

  // Use .map() to create an array of JSX elements
  const itemElements = items.map((item) => <p>{item}</p>);

  return (
    <div>
      <h1>Fruit List</h1>
      <ul>{itemElements}</ul>
    </div>
  );
}

export default Dad;
