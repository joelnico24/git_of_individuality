class Friend
	attr_accessor :name, :month, :day, :year

	def initialize(name, month, day, year)
			@name = name
			@month = month
			@day = day
			@year = year
			@birth_date = Time.local(year, month, day)
	end

	def first_birthday
			puts "Nice to meet you #{@name.capitalize}, you were born on #{@birth_date.strftime("%a,%B %d %Y")}."
	end

def next_birthday
				@next_birthday = Time.local(2017, @month, @day)

				@sec_till_birthday = @next_birthday - Time.now

				@minutes = @sec_till_birthday / 60
				@hours = @minutes / 60
				@days = @hours / 24

				puts "You only have #{@days.round} days until your next birthday!"
		end
end
name_array = []
response = "add"
@friends = []
while response != "exit" do
		if response == "add"
			puts "Let's add somebody's birthday to our list."
			puts "----------------"

			puts "Enter your name."
			name = gets.chomp

			puts "Enter the month you were born.(Jan = 1 Feb = 2, etc.)"
			month = gets.chomp.to_i

			puts "Enter the day you were born."
			day = gets.chomp.to_i

			puts "Enter the year you were born."
			year = gets.chomp.to_i

			friend = Friend.new(name, month, day, year)

			@friends << friend
		elsif response == "search"
			puts "What would you like to search by? You can type 'name', 'month', 'day', or 'year'."
			search_type = gets.chomp.downcase
			puts
			puts "Okay, I will search for the #{search_type}."
			puts "Which #{search_type} would you like me to find?"
			search_request = gets.chomp

			@friends.each do |friend|
				if friend.name.downcase == search_request.downcase
					puts "I found your friend #{friend.name} #{friend.month} #{friend.day}, #{friend.year}."
					puts "-----------------------"
				elsif friend.month.to_i == search_request.to_i
					puts "I found your friend #{friend.name} #{friend.month} #{friend.day}, #{friend.year}."
					puts "-----------------------"
				elsif friend.day.to_i == search_request.to_i
					puts "I found your friend #{friend.name} #{friend.month} #{friend.day}, #{friend.year}."
					puts "-----------------------"
				elsif friend.year.to_i == search_request.to_i
					puts "I found your friend #{friend.name} #{friend.month} #{friend.day}, #{friend.year}."
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