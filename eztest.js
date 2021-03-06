(function(global, factory) {
  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
    exports = factory(); // CommonJS
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], factory); // AMD
  } else {
    global.eztest = factory(); // script, wsh, asp
  }
}(this, function () {
  "use strict";
  
  function eztest(strSource) {
	return strSource
	  .trim()
	  .split(/~/.test(strSource) ? "~" : "\n")
	  .filter(String)
	  .map(function(test) {
	  
		var info = test.split(/(^\w+):/).reverse().filter(String),
			name = info[1] ? info[1].replace(/_/g, " ") : "untitled",
			code = info[0].trim(),
			result = null;
	  
		try {
			result = eval(code);
		} catch (err) {
			result = err;
		}

		return {
			name:	name,
			result:	result,
			bool:	!!result,
			test:	code,
		};
	});
}

 return eztest;
 
}));
