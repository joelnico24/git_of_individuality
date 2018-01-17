class SodaCan
	attr_accessor :color, :flavor, :name
	def initialize(color,flavor,name)
		@color = color
		@flavor = flavor
		@name = name
	end
end

@sodacan = SodaCan.new("green", "lemon-lime", "mtn. dew")

puts @soda.color
puts @soda.flavor
puts @soda.name