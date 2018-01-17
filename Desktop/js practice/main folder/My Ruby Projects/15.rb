class Animal
	attr_accessor :legs, :arms, :color, :noise

	def initialize(legs, arms, color, noise)
			@legs = legs
			@color = color
			@noise = noise
			@arms = arms
	end

	def move
		puts "I just moved a millimeter to the left."
	end

	def eat
		puts "I just ate my food."
	end
end

class Cow < Animal

	def milk
		puts "Have any milk?"
	end
end

class Dog < Animal
	
	def run
		puts "I am super slow."
	end
end

class Monkey < Animal

	def swing
		puts "I swing through the trees very slowly."
	end
end

class Kangaroo < Animal

	def jump
		puts "I cannot jump over a car."
	end
end

@cow = Cow.new(4, 0, "brown", "moo!")
puts @cow.noise
	@cow.move
	@cow.eat

@dog = Dog.new(4, 0, "golden", "bark!")
puts @dog.noise
	@dog.move
	@dog.eat

@monkey = Monkey.new(2, 2, "brown", "ooh ooh aah aah!")
puts @monkey.noise
	@monkey.move
	@monkey.eat

@kangaroo = Kangaroo.new(2, 2, "brown", "boing!")
puts @kangaroo.noise
	@kangaroo.move
	@kangaroo.eat

@cow.milk
@dog.run
@monkey.swing
@kangaroo.jump