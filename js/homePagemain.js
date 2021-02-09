/*global document, window*/

//Start Hamburgur Icon
var humIcon = document.getElementById('hamburger');
var times = document.getElementById('times');
window.onload = times.classList.remove('times');
//End Hamburgur Icon

//Start Download Button.
var downloadBtn = document.getElementById('onload');
window.onload = downloadBtn.classList.add("onload");
//End Download Button.

//Start Show And Hide Download and Nav Links Sections.
var links = document.getElementById('links');
var downloads = document.getElementById('download');
humIcon.onclick = function () {
    'use strict';
    links.classList.toggle('show');
    downloads.classList.toggle('show');
    times.classList.toggle('times');
};
//End Show And Hide Download and Nav Links Sections.

//Start Promotion Banner
var closePromoBanner = document.getElementById('closePromo');
var promoBanner = document.getElementById('promoBanner');
closePromoBanner.onclick = function () {
    'use strict';
    promoBanner.style.display = "none";
};
//End Promotion Banner
