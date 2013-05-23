
var should = require('chai').should()
  , delegate = require('..')
  , Presenter = require('presenter').Base
  , happen = require('happen/src/happen')

describe('action-delegate', function () {
	var car = document.getElementById('car')
	var fr = car.querySelector('.fr')

	it('basic case', function (done) {
		new Presenter(car)
			.action('mousedown', delegate())
				.on('> .wheel.fr', function(e, pres){
					e.delegate.should.equal(fr)
					done()
				})
		happen.mousedown(fr)
	})
})
