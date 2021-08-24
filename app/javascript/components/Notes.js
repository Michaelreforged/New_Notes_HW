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
          <div>
            <a href={`/notes/${note.id}`}>Show Note on Full Page</a>
            <a href={`/notes/${note.id}/edit`}>Edit Note Page</a>
            <a href={`/notes/${note.id}/`} data-method="delete">Delete Note </a>
          </div>
        </div>
      );
      })}
    </div>
  );
}

export default Notes;