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

	#@newtags = Post.all(:conditions => ["created_at >= ?", DateTime.now - 30.minutes]).order("created_at DESC").limit(1)
		@newtags = Post.where("created_at >= ?", DateTime.now - 30.seconds).order("created_at DESC").limit(1)


#@newtags = Post.where("created_at < '#{Time.now - 2.minutes.ago}'" + \
   #    " OR updated_at < '#{Time.now - 2.minutes.ago}'").order("created_at DESC").limit(1)

	#	@newtags = Post.where("created_at <= '#{Time.now - 2.days}'" + \
     #   " OR updated_at <= '#{Time.now - 3.days}'").order("created_at DESC").limit(1)

#@newtags = Post.tagged_with(params[:tag]).where("created_at >= '#{Time.now - 20.days}'" + \
 #       " OR updated_at >= '#{Time.now - 20.days}'")
	

		#@newtags = Post.all(:conditions => ["created_on >= ?", DateTime.now - 2.minutes])

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
