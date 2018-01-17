

class Book 

	attr_accessor :title, :pages, :author

	def initialize(title, pages, author)
			@title = title
			@pages = pages
			@author = author
	end

	def book1
		puts "This is an intro sentence describing this book."
	end
end

@book1 = Book.new("Book 1", "5 million", "Joelian")
puts @book1.title
puts @book1.pages
puts @book1.author