
# action-delegate

  event delegation for [action](//github.com/jkroso/action)

## Getting Started

_With [component](//github.com/component/component), [packin](//github.com/jkroso/packin) or [npm](//github.com/isaacs/npm)_  

	$ {package mananger} install jkroso/action-delegate

then in your app:

```js
var delegator = require('action-delegate')
```

## API

- [action-delegate()](#action-delegate)
- [presenter()](#presenter)

### action-delegate()

```js
delegator()
	.on('> button.ok', submit)
	.on('> button.cancel', cancel)
```

### with [presenter](//github.com/jkroso/presenter)

```js
presenter.action('mousedown', delegator())
	.on('> button.ok', submit)
	.on('> button.cancel', cancel)
```

## Running the tests

```bash
$ npm install
$ make
```
Then open your browser to the `./test` directory.

_Note: these commands don't work on windows._ 

## License 

[MIT](License)