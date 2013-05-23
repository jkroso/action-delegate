
var Presenter = require('presenter').Base
  , delegator = require('..')

var car = new Presenter(document.getElementById('car'))

car.action('mousedown', delegator())
	.on('> .wheel.fr', function(e, pres){
		console.log(e.delegate.className)
	})
	.on('> .wheel.fl', function(e, pres){
		console.log('bang!')
		e.delegate.style.padding = '0px'
	})
