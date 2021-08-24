import React from 'react'

const Notes = (props) => {
  return ( 
    <div>
      <h1>Notes Page</h1>
      {props.notes.map((note) => {
      return ( 
      <div key={note.id}>
        <p>{note.title}</p>
        <p>{note.desc}</p>
        </div>
      );
      })}
    </div>
  );
}

export default Notes;