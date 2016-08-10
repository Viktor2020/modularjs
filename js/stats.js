
var stats = (function() {
	var count = 0;

	var $stats = $("#statsModul");
	var $lable = $stats.find("#lable");
	var template = $lable.find("#stats-template").html();

	events.on("peopleChange", setCount);

	_render();

	function _render() {
		$lable.html(Mustache.render(template, {count : count})); 
	}

	function setCount(newCount) {
		count = newCount;
		_render();
	}

	function destroy() {
		$stats.remove();

	}


})();
