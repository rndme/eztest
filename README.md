# eztest.js
## Minimalistic Unit Testing for JavaScript


### About
eztest allows quickly-written tests without any special syntax, vocab, or conventions.

You just write simple test expressions, with and optional label, one-per-line or delimted by `~`.


### Usage
browsers:  `<script src=eztest.js></script>` <br>
node.js:   `npm install eztest`


### Syntax
```js
eztest("1_and_2_make_3: 1+2 == 3") == [{
  name: 	"1 and 2 make 3", // label text or "untitled"
  result: 	true,		// returned value
  bool: 	true,		// value is truthy (for collating)
  test: 	"1+2==3"	// the code that was run
}];
```

