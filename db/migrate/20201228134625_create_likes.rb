class CreateLikes < ActiveRecord::Migration[6.1]
  def change
    create_table :likes do |t|
      t.references :account
      t.references :posts
      t.timestamps
    end
  end
end
