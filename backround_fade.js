var colors = ["#030303", "#a3a5a8", "#ffffff", "#04a6b8", "#104c9c", "#30109c", "#21144a" ];
var currentIndex = 0;

setInterval(function() {
	document.body.style.cssText = "transition: background-color 2s cubic-bezier(1, 1, 1, 1); transition-delay: 0s; background-color: " + colors[currentIndex];
	currentIndex++;
	if (currentIndex == undefined || currentIndex >= colors.length) {
		currentIndex = 0;
	}
}, 1000);

// var i = 0;
// function change() {
//   var doc = document.getElementById("page");
//   var color = ["black", "blue", "brown", "green"];
//   doc.style.backgroundColor = color[i];
//   i = (i + 1) % color.length;

// }