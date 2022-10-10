var let_e = document.getElementById("colorful-text-e")
var let_s = document.getElementById("colorful-text-s")
var let_s2 = document.getElementById("colorful-text-s2")
var let_a = document.getElementById("colorful-text-a")
var let_w = document.getElementById("colorful-text-w")

var basic_css = "font-size: 80px; font-weight: bold;"

var text_colors = ["red", "green", "blue", "yellow", "orange"]

indexer = 0

setInterval(function() {
let_e.style.cssText = basic_css + "color: " + text_colors[(indexer ) % text_colors.length]
let_s.style.cssText = basic_css + "color: " + text_colors[(indexer + 1) % text_colors.length]
let_s2.style.cssText = basic_css + "color: " + text_colors[(indexer + 2 ) % text_colors.length]
let_a.style.cssText = basic_css + "color: " + text_colors[(indexer + 3 ) % text_colors.length]
let_w.style.cssText = basic_css + "color: " + text_colors[(indexer + 4 ) % text_colors.length]

indexer++;
	
}, 500);

