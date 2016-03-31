# eztest.js
## Minimalistic Unit Testing for JavaScript


### About
eztest allows quickly-written unit tests without any special syntax, vocab, or conventions.

The goal is to reduce boilerplate to the bare minimum while still providing a useful testing mechanism.

You write simple test expressions, with an optional label, one-per-line or delimted by `~`.


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

