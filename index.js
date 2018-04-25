var myDOM = (function() {
	function myDOM() {}

	myDOM.prototype._gimme = function(element) {
		if (document.querySelectorAll(element).length > 1)
			this.element = document.querySelectorAll(element)
		else if (document.querySelector(element))
			this.element = document.querySelector(element)
		else this.element = document.createElement(element)
		return this
	}

	myDOM.prototype.addClass = function(className) {
		this.element.classList.add(className)
		return this
	}

	myDOM.prototype.css = function(key, value) {
		this.element.style[key] = value
		return this
	}

	return myDOM
})()
