class PostsController < ApplicationController

	def index
	  if params[:tag]
	    @posts = Post.tagged_with(params[:tag])
	  else
	    @posts = Post.all
	  end
	end

	def show
		@post = Post.find(params[:id])
	end

	def new
		@post = Post.new
		@posts = Post.all
	end
	

	def create
		@post = Post.new(params[:post])

		if @post.save
			redirect_to :back, :notice => "Magic" #notice: 'Tag was successfully created.'

		else
			render action: "new"
		end
	end
end
