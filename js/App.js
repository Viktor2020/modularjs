

// $( document ).ready( 

// 	function() {

var people = (function() {

	var people = ["test", "test2"];
	
	var $el = $("#peopleModul");
	var $addBtn = $el.find("#addPerson");
	var $input = $el.find("input");
	var $ul = $el.find("ul");
	var template  = $el.find("#people-template") .html();

	$addBtn.on("click", addPerson);
	$ul.delegate("i.btn", "click", deletePerson);
	
	_render();

	function _render() {
		$ul.html(Mustache.render(template, {people : people}));
		events.emit("peopleChange", people.length);
	}
	function addPerson(value) {
		var name = (typeof value === "string") ? value : $input.val();
		people.push(name);
		_render();
		$input.val("");
	}
	function deletePerson(event) {
		var i;
		if (typeof event === "number") {
			i = event;
		} else {
			var $remove = $(event.target).closest("li");
			i = $ul.find("li").index($remove);
		}
		people.splice(i, 1);
		_render();
	}

	return {
		addPerson : addPerson,
		deletePerson : deletePerson
	};

})();


function inherits(ctor, superCtor) {
	ctor.super_ = superCtor;
  	ctor.prototype = Object.create(superCtor.prototype, {
    	constructor: {
      		value: ctor,
      		enumerable: false,
      		writable: true,
      		configurable: true
    	}
  	});
}


function define(namespaces) {
	var path = namespaces.split("."),
		parent = App,
		i;

	if (path[0] == "App") {
		path = path.splice(1);
	}

	for (i = 0; i < path.length; i++) {

		if (typeof parent[path[i]] == "undefined") {
			parent[path[i]] = {};
		}

		parent = parent[path[i]];
	}

	return parent;
}

// 	}

// );


// var template = $("#people=template").html();


// var App = (function () {

// 	var foo = 'message';

// 	var message = function () {
// 		return foo;
// 	};

// 	return {
// 		message:message
// 	};

// });

// alert('dsf', App.message);