function updateclock(){
    let now = new Date();
    let hours =now.getHours().toString()
 

// head.textContent = hours






    let minutes = now.getMinutes().toString()

    // minutes = document.getElementById("minutes");

    
    // heads.textContent =minutes;


    let second = now.getSeconds().toString()

    // second = document.getElementById('seconds');
    // heade.textContent = second;


    let finalvalue = `${hours}:${minutes}:${second}`
    
    hours = document.getElementById('hours')
    hours.textContent = finalvalue;


}



setInterval(updateclock,1000)
updateclock()

