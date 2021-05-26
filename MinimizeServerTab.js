window.onload = mouseOver();

function mouseOver() {
	var minimizeServerTab = document.getElementById("minimizeServerTab");
	consol.log("foundID");
	minimizeServerTab.onmouseover = function() {
		console.log("mousein");
	};
	minimizeServerTab.onmouseout = function() {
		
	};
	
}
