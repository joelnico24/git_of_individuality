horse_array = []
var = "YES"
while var == "YES" do
puts "Enter the name of a horse."
horse = gets.chomp.capitalize
horse_array << horse
puts "would you like to add a horse 'YES' or 'NO'"
var = gets.chomp.upcase
end

horse_array.each do |horse|
	puts "#{horse} is the name of your horse!"
end