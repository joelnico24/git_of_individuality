def addition_method(num1, num2)
	puts "The answer is: #{num1 + num2}"
end

def subtraction_method(num1, num2)
	puts "The answer is: #{num1 - num2}"
end

def multiplication_method(num1, num2)
	puts "The answer is: #{num1 * num2}"
end

def division_method(num1, num2)
	puts "The answer is: #{num1 / num2}"
end

var = nil

while var != "exit" do
	puts "What would you like to do?"
	puts
	puts "you can type multiply, divide, add, or subtract. (If your done, type exit)"
	var = gets.chomp.downcase
	if var == "exit"
		puts "I hate you!"
		break
end

	puts "Okay, enter the two numbers you would like to #{var} together."
	num_one = gets.chomp.to_f
	num_two = gets.chomp.to_f
	puts "Got it, I will #{var} the numbers #{num_one} and #{num_two}"

	if var == "multiply"
		multiplication_method(num_one, num_two)
	elsif var == "divide"
		division_method(num_one, num_two)
	elsif var == "add"
		addition_method(num_one, num_two)
	elsif var == "subtract"
		subtraction_method(num_one, num_two)
	else
		puts "I don't recognize the command #{var}, try again."
	end
	puts "Hit any key to continue"
	gets

	puts
	puts "Here we go again!"
	puts
end