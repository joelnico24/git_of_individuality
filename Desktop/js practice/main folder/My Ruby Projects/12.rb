friends = []
response = "add"
while response != "exit" do
		if response == "add"
			puts "Let's add a friend to our list."
			puts "----------------"

			puts "Enter the first name of your friend."
			first_name = gets.chomp

			puts "Enter the last name of your friend."
			last_name = gets.chomp

			puts "Enter the favorite color of your friend."
			favorite_color = gets.chomp

			friend = {"first_name" => first_name, "last_name" => last_name, "favorite_color" => favorite_color}

			friends << friend
		elsif response == "search"
			puts "What would you like to search by? You can type 'first_name', 'last_name', or 'favorite_color'."
			search_type = gets.chomp.downcase
			puts
			puts "Okay, I will search for the #{search_type}."
			puts "Which #{search_type} would you like me to find?"
			search_request = gets.chomp

			friends.each do |friend|
				if friend[search_type] == search_request
					puts "I found your friend #{friend['first_name']} #{['last_name']}."
					puts "Their favorite color is #{favorite_color}."
					puts "-----------------------"
				end
			end
		else
			puts "I don't understand that word, try again."
			puts
		end
		puts "Please type add or search to either add a friend or search for a friend or type exit."
		response = gets.chomp
	end