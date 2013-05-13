class Post < ActiveRecord::Base
  attr_accessible :content, :tag_list, :new_post, :name, :desc, :tag_list
  acts_as_taggable
 
   # validates :new_post, obscenity: true
   validates :new_post,  obscenity: { sanitize: true, replacement: "[Obscenity - REMOVE]" }
	
end
