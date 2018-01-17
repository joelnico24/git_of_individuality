puts "Type out 3 names and hit enter after each one"

name_array = []

name_one = gets.chomp.downcase
name_array << name_one
name_two = gets.chomp.downcase
name_array << name_two
name_three = gets.chomp.downcase
name_array << name_three

num_array = ["first", "second", "third"]
num = 0
name_array.each do |name|
	puts "The #{num_array[num]} name is #{name.capitalize}."
	num += 1
end