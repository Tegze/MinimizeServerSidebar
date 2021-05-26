window.onload = mouseOver();

function mouseOver() {
	var minimizeServerTab = document.getElementById("minimizeServerTab");
	minimizeServerTab.onmouseenter = function() {
		console.log("mousein");
	};
	minimizeServerTab.onmouseleave = function() {
		
	};
	
}