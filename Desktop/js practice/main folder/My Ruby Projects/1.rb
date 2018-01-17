print "What Is Your Name??? "
name = gets.chomp
puts "Your Name Is #{name.capitalize}"

diah = gets
puts ''

i = 0
loop do
	i += 1
	if i == 100
		print "HACKED #{name.capitalize}! "
	else
		print rand(2)
	end
	
end