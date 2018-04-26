# Fluent API construction

## A growing demo of how to build and efficiently use fluent APIs in JS

### Current included methods

*   `jDonny`: API constructor
*   `addClass`: adds single class to `this.element`
*   `css`: adds a css property and value to element

### Method Chaining

Method Chaining is what makes this a Fluent API. The idea is to have more readable JS by chaining methods in a way that reads more like language.

For example you cant select a DOM Element with the constructor `jDonny('h1')`, and change any css rule on it using `jDonny('h1'.css('backgroundColor', 'blue'))`

Feel free to play around in the console to see what I mean. Also, please fork the project and add some stuff! I would love to see what you come up with!
