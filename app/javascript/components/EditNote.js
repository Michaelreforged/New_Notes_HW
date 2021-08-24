import React from "react";

const EditNote = (props) =>{
  return (
    <div>
      <h1>New Note</h1>
      <form action ={`/notes/${props.note.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <p>Title</p>
        <input defaultValue={props.note.title} name= "note[title]"/>
        <p>Description</p>
        <input defaultValue={props.note.desc} name= "note[desc]"/>
        <button type="submit">Update Note</button>
      </form>
      <a href="/">Notes</a>
    </div>
  );
};


export default EditNote;