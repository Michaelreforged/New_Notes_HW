import React from "react";

const NewNote = () =>{
  return (
    <div>
      <h1>New Note</h1>
      <form action ="/notes" method="post">
        <p>Title</p>
        <input name= "note[title]"/>
        <p>Description</p>
        <input name= "note[desc]"/>
        <button type="submit">Add New Note</button>
      </form>
      <a href="/">Notes</a>
    </div>
  );
};


export default NewNote;