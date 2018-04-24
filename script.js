

// var a 
// function text(){
//     if (3600000 < msCheMancanoAlPranzo && msCheMancanoAlPranzo < 7200000) { // 60 - 120:'Manca un botto! 
//     a = "... AHHAHAHAHAHA! Too much. You're going to starve to death."
// } else if(1800000 < msCheMancanoAlPranzo && msCheMancanoAlPranzo < 3600000 ){
//      a = "... Still way too much time." // 30 - 60: 'Ti conviene mangiare uno spuntino'
// } else if(600000< msCheMancanoAlPranzo && msCheMancanoAlPranzo < 1800000){
//     a = "... Less than half an hour! Hang in there."            // 10 - 30 : 'Manca poco'
// } else if ( 0 < msCheMancanoAlPranzo && msCheMancanoAlPranzo < 600000) { // 0 - 10 : 'Ci siamo quasi!!!'   
//     a = "... Almost there!!!"
// } else if ( 0 === msCheMancanoAlPranzo) { // 0 : 'IT'S LUNCH TIME MOTHERFUCKERS!!!   
// a = "IT'S LUNCH TIME MOTHERFUCKERS!!!"
// } else {
//     a = "... Stop it. Don't even think about it"
// }
// }


//************************************************************************************************

var timeElement = document.getElementById("timeLeft")  // chiamo in var gli elementi dell'html con l'id che mi interessa
var buttonUpdate = document.getElementById("findOut")
     
    buttonUpdate.addEventListener('click', function() {   // appena clicco cambiami il testo con il contenuto di calcTime()
        timeElement.innerText = calcTime()
})

    //calcola tempo attuale, tempo del pranzo e tempo che manca al pranzo. converti in h:m:s da ms.

function calcTime() {

    var now = new Date()    
    var lunchTime = new Date()
    lunchTime.setHours(19, 30, 00)

    var msTillLunch = lunchTime - now // tempo che manca al pranzo in ms

    if( msTillLunch < 0) {                                      // se ha superato l'ora(diff negativa) aggiungi 24 ore al lunch time precedente
        lunchTime.setHours(lunchTime.getHours() + 24)
        msTillLunch = lunchTime - now
    }

                var timeTillLunch = convertMS(msTillLunch)

                var hours = timeTillLunch.h
                var minutes = timeTillLunch.m
                var seconds = timeTillLunch.s

                var time = hours + ":" + minutes + ":" + seconds
    
                    setInterval(function() {                        // funzione che ha come parametri una f e il tempo in cui la deve eseguire ogni volta
                        timeElement.innerText = calcTime()
                      }, 1000)
                  

                        return time

}

         //funzione che converte i ms in h:m:s
         function convertMS(ms) {                     //!!! ricorda di mettere iil parametro ms dentro f!!!!
            var h
            var m
            var s
            s = Math.floor(ms / 1000);
            m = Math.floor(s / 60);
            s = s % 60;
            h = Math.floor(m / 60);
            m = m % 60;
            h = h % 24;
            return { h: h, m: m, s: s };
          };


           
