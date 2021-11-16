import React from "react";

// A react component is just a function that return JSX - (html embed in js)
const newNotes = () => {
  console.log("HERE!");
  return (
    <div>
      <h1>New Post Form Here!</h1>
      <form action="/notes" method="post">
        <p>title</p>
        {/* <input name='model[attr]'/> */}

        <input name="note[title]" />
        <p>description</p>
        {/* <input name='model[attr]'/> */}

        <input name="note[description]" />
        <button type="submit">add</button>
      </form>
    </div>
  );

  // return <p>New Notes Here: {renderNotes()}</p>;
};
export default newNotes;