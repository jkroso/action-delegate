GRAPH=node_modules/.bin/sourcegraph.js -p nodeish,mocha
COMPILE=node_modules/.bin/_bigfile -p nodeish
REPORTER=dot

all: test/built.js

test:
	@node_modules/.bin/mocha test/*.test.js \
		--reporter $(REPORTER) \
		--bail

examples/%.built.js: examples/%.js index.js
	@$(GRAPH) $< | $(COMPILE) -x null > $@

clean:
	@rm -f test/built.js

test/built.js: index.js test/*
	@$(GRAPH) test/browser.js | $(COMPILE) -x null > $@

install:
	packin install

.PHONY: all test clean install
