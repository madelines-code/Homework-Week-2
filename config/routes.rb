Rails.application.routes.draw do
  root 'notes#index'
  # get '/about', to: 'static_pages#about'
  get '/notes', to: 'notes#index'
  get '/notes/new', to: 'notes#new'
  post '/notes', to: 'notes#create'
  get '/notes/:id', to:'notes#show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
