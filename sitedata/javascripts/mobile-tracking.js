/*var jQuery = document.createElement('script');
jQuery.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js";
document.head.appendChild(jQuery);*/ /*Could Work, but Not Tested */

var getStr = window.location.search.substr(1);
var getArray = getStr.split ("&");
var get = {};

for (var i = 0; i < getArray.length; i++) {
    var tmpArray = getArray[i].split("=");
    get[tmpArray[0]] = tmpArray[1];
}

if (screen.width <= 800) { 
    if (get.m == "no") {
	//alert("Mobile Phone on PC");
	$("#mobile-style").attr("href", "/sitedata/stylesheets/stylesheet.css");
	$(document).ready(function(){
		$("a").each(function() {
   			var _href = $(this).attr("href"); 
   			$(this).attr("href", _href + '?m=no');
		});
	});
    }
    else {
	//window.location = "";
	//alert("Mobile Phone" + " SW: " + screen.width);
    }
}
else {
    if (get.m == "yes") {
	//alert("PC on Mobile Phone");
	$("#pc-style").attr("href", "/sitedata/stylesheets/mobile-stylesheet.css");
	$(document).ready(function(){
		$("a").each(function() {
   			var _href = $(this).attr("href"); 
   			$(this).attr("href", _href + '?m=yes');
		});
	});
    }
    else {
	//alert("PC " + screen.width);
    }
}

/* This file is used to allow the user to override the settings that were set by the lines
<link id="mobile-style" rel="stylesheet" type="text/css" href="/sitedata/stylesheets/mobile-stylesheet.css" media="screen and (max-device-width: 800px)"/>
<link id="pc-style" rel="stylesheet" type="text/css" href="/sitedata/stylesheets/stylesheet.css" media="screen and (min-device-width: 800px)">
*/
