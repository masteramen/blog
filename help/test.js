// build time:Sun Oct 28 2018 21:09:08 GMT+0800 (CST)
window.location.href.match(/localhost:3888/)||(window.location="http://localhost:3888/hello?url="+encodeURIComponent(window.location.href)+(document.querySelector("meta[name='fileName']")?"&fileName="+encodeURIComponent(document.querySelector("meta[name='fileName']").getAttribute("content")):""));
//rebuild by neat 