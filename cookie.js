function Store(name, minCusNo, maxCusNo, avgNoCookie) {
    this.name = name;
    this.minCusNo = minCusNo;
    this.maxCusNo = maxCusNo;
    this.avgNoCookie = avgNoCookie;
    this.randomCusNo = function (){
       return Math.floor(Math.random() * (this.maxCusNo - this.minCusNo + 1) ) + this.minCusNo;
    };

    }

var pioneerSquare = new Store('Pioneer Square',17, 88, 5.2);
var portlandAirport = new Store('Portland Airport',6, 24, 1.2);
var washingtonSquare = new Store('Washington Square',11, 38, 1.9);
var sellwood = new Store('Sellwood',20, 48, 3.3);
var pearlDistrict = new Store('Pearl District', 3, 24, 2.6);

function liste(){
var hours = ["10am","11am","12pm","1 pm","2 pm","3 pm","4 pm","5 pm"];
var totalDailySales0 = 0; //Pioneer Square
var totalDailySales1 = 0; //Portaland Airport
var totalDailySales2 = 0; //Washington Square
var totalDailySales3 = 0; //Sellwood
var totalDailySales4 = 0; //Pearl District


for (i=0; i<hours.length; i++) {
  //Pioneer Square
  var idName0 = "la" + (i+1);
  var el = document.getElementById(idName0);
  var totalHourlySales = Math.round(pioneerSquare.avgNoCookie *pioneerSquare.randomCusNo());
  totalDailySales0 += totalHourlySales;
  el.innerHTML = /*hours[i]+ ": " + */ totalHourlySales;

  //Portaland Airport
  var idName1 = "lb"  + (i+1);
  var el = document.getElementById(idName1);
  var totalHourlySales =  Math.round(portlandAirport.avgNoCookie * portlandAirport.randomCusNo());
  totalDailySales1 += totalHourlySales;
  el.innerHTML = totalHourlySales;

  //Washington Square
  var idName2 = "lc" + (i+1);
  var el = document.getElementById(idName2);
  var totalHourlySales =  Math.round(washingtonSquare.avgNoCookie * washingtonSquare.randomCusNo());
  totalDailySales2 += totalHourlySales;
  el.innerHTML = totalHourlySales;

  //Sellwood
  var idName3 = "ld"  + (i+1);
  var el = document.getElementById(idName3);
  var totalHourlySales = Math.round(sellwood.avgNoCookie * sellwood.randomCusNo());
  totalDailySales3 += totalHourlySales;
  el.innerHTML =totalHourlySales;

  //Pearl District
  var idName4 = "le"  + (i+1);
  var el = document.getElementById(idName4);
  var totalHourlySales =  Math.round(pearlDistrict.avgNoCookie * pearlDistrict.randomCusNo());
  totalDailySales4 += totalHourlySales;
  el.innerHTML =totalHourlySales;
  }


console.log(pioneerSquare.randomCusNo());


//var total= [totalDailySales0, totalDailySales1, totalDailySales2, totalDailySales3, totalDailySales4 ]
/*for (i=0; i<5; i++){
var idNameTotal = "lt" + (i);
var el = document.getElementById(idNameTotal);
el.innerHTML = "Total: " + (totalDailySales)+ (i);

}*/
//Pioneer Square
var total0= document.getElementById('lt0');
total0.innerHTML=/* "Total: " +*/ totalDailySales0;
//Portaland Airport
var total1= document.getElementById('lt1');
total1.innerHTML= totalDailySales1;
//Washington Square
var total2= document.getElementById('lt2');
total2.innerHTML= totalDailySales2;
//Sellwood
var total3= document.getElementById('lt3');
total3.innerHTML= totalDailySales3;
//Pearl District
var total4= document.getElementById('lt4');
total4.innerHTML= totalDailySales4;

};
liste();
