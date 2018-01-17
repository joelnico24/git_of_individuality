puts "Name a friend."

friend_one = gets.chomp

friend_array = []

friend_array << friend_one

name = "Messi"

friend_array.each do |f|
	if f.downcase == name.downcase
		puts "Since you like Messi, I think you should know that #{f.capitalize} is arrogant!"
	else
		puts "#{f.capitalize} is an amazing name. You should never change it."
	end
end