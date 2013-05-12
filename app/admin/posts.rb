ActiveAdmin.register Post do
	index do                            
	    column :id
	    column :tag_list
	    column :new_post        
	    default_actions 
 	end
menu :priority => 1 
  
end
