

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

var hours = ["10am","11am","12pm","1 pm","2 pm","3 pm","4 pm","5 pm"];
var stores =["Pioneer Suarre","Portland Airport","Washington Square","Sellwood","Pearl District"];

//Pioneer Square
var store1Data =["Pioneer Sq"];
function store1(){
var totalDailySales1 = 0;
for (i=0; i<hours.length; i++) {
  var totalHourlySales = Math.round(pioneerSquare.avgNoCookie *pioneerSquare.randomCusNo());
  totalDailySales1 += totalHourlySales;
  store1Data.push(totalHourlySales);
};
store1Data.push(totalDailySales1);
console.log(store1Data);
return store1Data;
}
store1();

function storeList1(){
var list= document.getElementById('list1');
var node = document.createElement('li');
for(i=0; i<=hours.length+(1); i++){
var node = document.createElement('li');
var textnode =document.createTextNode(store1Data[i]);
node.appendChild(textnode);

document.getElementById('list1').appendChild(node);
};
}
storeList1();


//Portland Airport
var store2Data =["Portland Airport"];
function store2(){
var totalDailySales2 = 0;
for (i=0; i<hours.length; i++) {
  var totalHourlySales = Math.round(portlandAirport.avgNoCookie *portlandAirport.randomCusNo());
  totalDailySales2 += totalHourlySales;
  store2Data.push(totalHourlySales);
};
store2Data.push(totalDailySales2);
console.log(store2Data);
return store2Data;
}
store2();

function storeList2(){
var list= document.getElementById('list1');
var node = document.createElement('li');
for(i=0; i<=hours.length+(1); i++){
var node = document.createElement('li');
var textnode =document.createTextNode(store2Data[i]);
node.appendChild(textnode);

document.getElementById('list2').appendChild(node);
};
}
storeList2();


//Washington Square
var store3Data =["Washington Square"];
function store3(){
var totalDailySales3 = 0;
for (i=0; i<hours.length; i++) {
  var totalHourlySales = Math.round(washingtonSquare.avgNoCookie *washingtonSquare.randomCusNo());
  totalDailySales3 += totalHourlySales;
  store3Data.push(totalHourlySales);
};
store3Data.push(totalDailySales3);
console.log(store3Data);
return store3Data;
}
store3();

function storeList3(){
var list= document.getElementById('list1');
var node = document.createElement('li');
for(i=0; i<=hours.length+(1); i++){
var node = document.createElement('li');
var textnode =document.createTextNode(store3Data[i]);
node.appendChild(textnode);

document.getElementById('list3').appendChild(node);
};
}
storeList3();


//Sellwood
var store4Data =["Sellwood"];
function store4(){
var totalDailySales4 = 0;
for (i=0; i<hours.length; i++) {
  var totalHourlySales = Math.round(sellwood.avgNoCookie *sellwood.randomCusNo());
  totalDailySales4 += totalHourlySales;
  store4Data.push(totalHourlySales);
};
store4Data.push(totalDailySales4);
console.log(store4Data);
return store4Data;
}
store4();

function storeList4(){
var list= document.getElementById('list1');
var node = document.createElement('li');
for(i=0; i<=hours.length+(1); i++){
var node = document.createElement('li');
var textnode =document.createTextNode(store4Data[i]);
node.appendChild(textnode);

document.getElementById('list4').appendChild(node);
};
}
storeList4();


//Pearl District
var store5Data =["Pearl District"];
function store5(){
var totalDailySales5 = 0;
for (i=0; i<hours.length; i++) {
  var totalHourlySales = Math.round(pearlDistrict.avgNoCookie *pearlDistrict.randomCusNo());
  totalDailySales5 += totalHourlySales;
  store5Data.push(totalHourlySales);
};
store5Data.push(totalDailySales5);
console.log(store5Data);
return store5Data;
}
store5();

function storeList5(){
var list= document.getElementById('list1');
var node = document.createElement('li');
for(i=0; i<=hours.length+(1); i++){
var node = document.createElement('li');
var textnode =document.createTextNode(store5Data[i]);
node.appendChild(textnode);

document.getElementById('list5').appendChild(node);
};
}
storeList5();
