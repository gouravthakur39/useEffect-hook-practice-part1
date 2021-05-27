import React, { Fragment, useState, useEffect } from "react";

function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <Fragment>
      <div>
        <button onClick={() => setResourceType("posts")}> Go to Posts </button>
        <button onClick={() => setResourceType("users")}> Go to Users </button>
        <button onClick={() => setResourceType("comments")}> Go to Comments </button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </Fragment>
  );
}

export default App;
