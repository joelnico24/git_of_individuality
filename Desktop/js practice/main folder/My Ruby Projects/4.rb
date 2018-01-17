def long_name(fname)
	if fname.length > 4
		puts "You have a long name."
	else
		puts "You have a short name."
	end	
end

def welcome(fname)
	puts "Die in a hole, #{fname}."
end

names = []

puts "Type a name."
name_one = gets.chomp.capitalize
names << name_one

puts "Type another name."
name_two = gets.chomp.capitalize
names << name_two

puts "Type another name."
name_three = gets.chomp.capitalize
names << name_three

names.each do |name|
	
	long_name(name)
end