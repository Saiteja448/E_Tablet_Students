var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = mm+'-'+dd+'-'+yyyy;
document.getElementById("date").innerHTML = today;
var time = new Date();

window.onload= function currentTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =h + ":" + m + ":" + s;;
    var t = setTimeout(currentTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
  }