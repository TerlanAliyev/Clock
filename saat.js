var hr=0
var mn=0
var sc=0

function san() {
    sc+=6
    
    document.querySelector('#second').style.transform=`rotate(${sc}deg)`
    if(sc==360){
        console.log(mn);
        mn+=6
        sc=0
        document.querySelector('#minute').style.transform=`rotate(${mn}deg)`
        if(mn%90==0){
            hr+=7.5
            sc=0 
            document.querySelector('#hour').style.transform=`rotate(${hr}deg)`
        }
    }
}



setInterval(san,1000)