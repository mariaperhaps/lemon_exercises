require 'pry'
require 'csv'

students = []

CSV.foreach(File.path("roster.csv")) do |col|
   if col[0] != nil && col[0] != "Dropouts" && col[0] != "First Name" && col[0] != "Last Name"
     students << "#{col[0]} #{col[1]}"
   end
end

def groups(array, number)
  mixed_up = array.shuffle
  number_of_groups = array.length.to_f / number.to_f
  split = array.each_slice(number_of_groups).to_a


    if split.length > number
     split[-1].each do |extra|
        split[-2] << extra
      end
    end

  split
end

puts groups(students, 2)




