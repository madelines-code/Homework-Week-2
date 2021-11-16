import React from "react";

// A react component is just a function that return JSX - (html embed in js)
const Notes = (props) => {
  console.log("HERE!");
  console.log(props.notes);
  // we want to take this array of objects and convert it to an array of
  // jsx ideas if a method to use here
  const renderNotes = () => {
    console.log("renderNotes called");
    return props.notes.map((note) => {
      return (
        <div>
          <h1>{note.title}</h1>
          <p>{note.description}</p>
          <a href = {`/notes/${note.id}`}>View This Note</a>
        </div>
      );
    });
  };

  return <p>Notes Here: {renderNotes()}</p>;
};
export default Notes;