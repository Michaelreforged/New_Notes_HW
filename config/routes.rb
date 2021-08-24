Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "notes#index"

  get "/notes", to: "notes#index"          #View All

  get "/notes/new", to: "notes#new"        # View new page w/ form to add new notes

  post "/notes", to: "notes#create"        # Creates new notes
  get "/notes/:id", to: "notes#show"       # Show Individual notes
  get "/notes/:id/edit", to: "notes#edit"  # Edit new note

  patch "/notes/:id", to: "notes#update"   # Updates notes
  put "/notes/:id", to: "notes#update"     #
  delete "/notes/:id", to: "notes#destroy" # Deletes Notes

end
