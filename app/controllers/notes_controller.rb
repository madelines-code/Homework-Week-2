class NotesController < ApplicationController
  def index
    @notes = Note.all
    render component: "Notes", props: {notes: @notes}
  end

    #  If method ends here Rails will look for the erb file in 
    # app/views/pages/index.html.erb by default at this point

  def new
    render component: "NotesNew"
  end

  def create
    Note.create(title: params[:note][:title], description: params[:note][:description])

    # want to go back to pages index '/pages'
    # this really does a get request to '/pages'
    redirect_to notes_path
  end

  def show
    @note = Note.find(params[:id])
    render component: "singleNote", props: {note: @note}
  end

    
end
