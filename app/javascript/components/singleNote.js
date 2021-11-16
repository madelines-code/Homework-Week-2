import React from "react";


const singleNote = (props) =>{

  return (
    <div>
      <h1>{props.note.title}</h1>
      <p>{props.note.description}</p>
      <a href = {'/notes'}>All Notes</a>
    </div>
  );
};

export default singleNote;