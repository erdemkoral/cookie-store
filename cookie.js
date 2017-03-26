
function Store(name, minCusNo, maxCusNo, avgNoCookie) {
    this.name = name;
    this.minCusNo = minCusNo;
    this.maxCusNo = maxCusNo;
    this.avgNoCookie = avgNoCookie;
    this.storeData = function(){
      var totalDailySales=0;
      var totalHourlySales;
      var TotalData=[];
      TotalData.push(this.name);
      for (i=0; i<hours.length; i++) {
        totalHourlySales = Math.floor(((Math.random() * (this.maxCusNo - this.minCusNo + 1) ) + this.minCusNo) * this.avgNoCookie);
         totalDailySales += totalHourlySales;
        TotalData.push(totalHourlySales);
    };
      TotalData.push(totalDailySales);
      return TotalData;
  };
}

var pioneerSquare = new Store('Pioneer Square',17, 88, 5.2);
var portlandAirport = new Store('Portland Airport',6, 24, 1.2);
var washingtonSquare = new Store('Washington Square',11, 38, 1.9);
var sellwood = new Store('Sellwood',20, 48, 3.3);
var pearlDistrict = new Store('Pearl District', 3, 24, 2.6);
var beaverton = new Store ('Beaverton',9, 24,5.9);

var hours = ["10am","11am","12pm","1 pm","2 pm","3 pm","4 pm","5 pm"];
var stores =["Pioneer Suarre","Portland Airport","Washington Square","Sellwood","Pearl District"];


function createNewStore(){
  var name = document.getElementById("NewName").value;
  var minCusNo = document.getElementById("NewMinCusNo").value;
  var maxCusNo = document.getElementById("NewMaxCusNo").value;
  var avgNoCookie = document.getElementById("NewAvgNoCookie").value;
  var newStore = new Store(name, minCusNo, maxCusNo, avgNoCookie);
  storesData.push(newStore.storeData());
  createTable();
  
}

var storesData = [];
storesData.push(pioneerSquare,portlandAirport);


var storesData = [pioneerSquare.storeData(), portlandAirport.storeData(), washingtonSquare.storeData(), sellwood.storeData(), pearlDistrict.storeData() ,beaverton.storeData()];

function createTable(){
var table = document.getElementById("tableDom");
table.innerHTML ="";
var tableRow = document.createElement("tr");
var tableData = document.createElement("th");
tableRow.appendChild(tableData);

for (var i=0; i < hours.length; i++){
  tableData = document.createElement("th");
  tableData.textContent= hours[i];
  tableRow.appendChild(tableData);
}
tableData = document.createElement("th");
tableData.textContent = "Total";
tableRow.appendChild(tableData);
table.appendChild(tableRow);

for(var storeIndex = 0; storeIndex < storesData.length; storeIndex++){
  var storeToUse = storesData[storeIndex];
  tableRow = document.createElement("tr");
  for(var index = 0; index < storeToUse.length; index++){
    tableData = document.createElement("td");
    tableData.textContent = storeToUse[index];
    tableRow.appendChild(tableData);
  }

table.appendChild(tableRow);
}
}
createTable();
