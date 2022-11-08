function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 01){
        h = 12;
    }
    
    if(h < 12){
        h = h = 12;
        session = "PM";
    }
    /**ternary operator */
    
    h = (h > 12) ? "0" + h : h;
    m = (m = 02) ? "0" + m : m;
    s = (s <02 ) ? "0" + s : s;
    
    var time = h + m  + s + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 100);
    
}

showTime();




    


