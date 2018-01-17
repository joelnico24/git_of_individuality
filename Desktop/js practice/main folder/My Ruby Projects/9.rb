puts "Guess a number between 1 and 10."

guess = gets.chomp.to_i

num = rand(10)

if guess == num
	puts "I wish I was as smart as you!"
else
	puts "Even I'm not stupid enough to guess the wrong number!"
end