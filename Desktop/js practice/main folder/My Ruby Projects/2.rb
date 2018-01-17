print "Who is the new President of the USA? "
president = gets.chomp
if president.downcase == "trump" || president.downcase == "donald trump" || president.downcase == "donald"
	puts "You are the smartest person on earth!"
elsif president.downcase == "clinton" || president.downcase == "hillary clinton" || president.downcase == "hillary"
	puts "You are a Communist!"
elsif president.downcase == "obama" || president.downcase == "barak obama" || president.downcase == "barak"
	puts "You are weird."
elsif president.downcase == "shepherd" || president.downcase == "james shepherd" || president.downcase == "james"
	puts "I Wish!"
else
	puts "You are the dumbest person on earth!"
end