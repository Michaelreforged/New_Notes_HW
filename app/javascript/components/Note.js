import React from "react";

const Note = (props) => {
  return (
    <div>
      <p>{props.note.title}</p>
      <p>{props.note.desc}</p>
      <a href="/">Notes</a>
    </div>
  );
};

export default Note;