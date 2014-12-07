window.onload = function() {
	var svgc = document.getElementById("svg-contain");
	TweenMax.to(svgc, 1, {x:377, repeat:-1, force3D:"true", yoyo:true, ease:Power1.easeInOut});
};