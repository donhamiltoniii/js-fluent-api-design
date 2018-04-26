var jDonny = (function() {
	function jDonny(element) {
		if (element) {
			if (window === this) {
				return new _(element)
			}
			if (document.querySelectorAll(element).length > 1) {
				this.element = document.querySelectorAll(element)
			} else if (
				!(document.querySelectorAll(element) > 1) &&
				document.querySelector(element)
			) {
				this.element = document.querySelector(element)
			} else if (element === 'body') {
				this.element = document.body
			} else this.element = document.createElement(element)

			return this
		} else {
			return console.log('You need to provide an element to ue this API')
		}
	}

	jDonny.prototype = {
		addClass: function(className) {
			if (this.element.length > 1) {
				for (item of this.element) {
					item.classList.add(className)
				}
			} else {
				this.element.classList.add(className)
			}
			return this
		},
		css: function(key, value) {
			if (this.element.length > 1) {
				for (item of this.element) {
					item.style[key] = value
				}
			} else {
				this.element.style[key] = value
			}
			return this
		},
	}

	return jDonny
})()
