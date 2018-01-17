def test_method(num)
	puts "If we multiply #{num} by 10 we get #{num * 10}"
end

puts "Enter a number"
var = gets.chomp.to_f
test_method(var)