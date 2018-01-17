puts "Give me a number to start with and press enter"
num = gets.chomp.to_f

puts "Give me a 2nd number"
num_two = gets.chomp.to_f

puts "Give me a 3rd number"
num_three = gets.chomp.to_f

puts "Give me a 4th number"
num_four = gets.chomp.to_f

num_sum = ((num + num_two )* num_three )- num_four

puts "The answer is: #{num_sum}."

puts "We took #{num} and added #{num_two} which is #{num + num_two} then we multiplied that by #{num_three} which is #{(num + num_two) * num_three} then we subtracted #{num_four} which gave us #{num_sum}."