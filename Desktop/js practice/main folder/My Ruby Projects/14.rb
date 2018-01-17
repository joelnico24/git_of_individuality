class Animal
	attr_accessor :name, :color, :number_of_legs, :noise

	def initialize(name, color, number_of_legs, noise)
			@name = name
			@color = color
			@number_of_legs = number_of_legs
			@noise = noise
	end
end

class Search
	def initialize(animals, search_request)
			@search_request = search_request
			@animals = animals
	end

	def search_animals
			puts "Okay, I am searching all your animals to find #{@search_request}."

			@animals.each do |animal|
					if animal.number_of_legs.downcase == @search_request.downcase
							puts "#{animal.name} #{animal.color} #{animal.number_of_legs} #{animal.noise} matches the search!."
					elsif animal.name.downcase == @search_request.downcase
							puts "#{animal.name} #{animal.color} #{animal.number_of_legs} #{animal.noise} matches the search!."
					elsif animal.color.downcase == @search_request.downcase
							puts "#{animal.name} #{animal.color} #{animal.number_of_legs} #{animal.noise} matches the search!"
					elsif animal.noise.downcase == @search_request.downcase
							puts "#{animal.name} #{animal.color} #{animal.number_of_legs} #{animal.noise} matches the search!"
					else
							puts "#{animal.name} #{animal.color} #{animal.number_of_legs} #{animal.noise} doesn't match the search."
					end
			end
	end
end

animals = Array.new
response = "add"

while response != "exit" do
	if response == "add"
			puts "Let's add an animal to our list."
			puts "---------------"

			puts "Enter the name of your animal."
			name = gets.chomp

			puts "Enter the color of your animal."
			color = gets.chomp

			puts "Enter the number of legs of your animal."
			number_of_legs = gets.chomp

			puts "Enter the noise of your animal."
			noise = gets.chomp

			@animal = Animal.new(name, color, number_of_legs, noise)
			animals << @animal
	elsif response == "search"
			puts "What would you like to search for?"
			search_request = gets.chomp

			@new_search = Search.new(animals, search_request)
			@new_search.search_animals
	else
			puts "I don't understand that word, try again."
			puts
	end
	puts "Please type add or search to either add an animal or search for an animal or type exit to exit this ruby file."
	response = gets.chomp.downcase
end