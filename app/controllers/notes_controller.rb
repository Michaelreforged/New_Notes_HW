class NotesController < ApplicationController

  def index
    notes = Note.all
    render component: "Notes", props: {notes: notes}
  end

  def new
    render component: "NewNote"
  end

  def create
    note = Note.new(user_params)
    if note.save
      redirect_to notes_path
    else
    end
  end

  def show
    note = Note.find(params[:id])
    render component: "Note", props: {note: note}
  end

  private 
  def user_params
    params.require(:note).permit(:title, :desc)
  end
end
