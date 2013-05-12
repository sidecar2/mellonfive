class AddNewPostToPost < ActiveRecord::Migration
  def change
    add_column :posts, :new_post, :string
  end
end
