
var unique = require('unique-selector')
  , action = require('action')

/**
 * Create a delegating action
 * 
 * () -> Action
 */

module.exports = function(){
	var path = 'BODY '
	return action(function delegator(e, pres){
		var view = pres.view
		if (e.target === view) return

		if (view.parentNode.querySelector(path) !== view) {
			path = unique(view) + ' '
		}
		var selectors = this.pins
		for (var selector in selectors) {
			var targ = find(view, e.target, path + selector)
			if (targ) {
				e.delegate = targ
				this.dispatch(selector, e, pres)
			}
		}
	})
}

/**
 * Return the first Element between `bottom` and 
 * `top` that matches the selector
 * 
 * (Element, Element, String) -> Element
 * @api private
 */

function find(top, bottom, selector) {
	var nodes = top.querySelectorAll(selector)
	var len = nodes.length

	while (bottom && bottom !== top) {
		for (var i = 0; i < len; i++) {
			if (nodes[i] === bottom) return bottom
		}
		bottom = bottom.parentElement
	}
}
