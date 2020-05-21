class AddColumnToStudents < ActiveRecord::Migration[6.0]
  def change
    add_column :students, :fav_color, :string
  end
end
