'use strict';


function SalesPerLocation(minCustomers, maxCustomers, avgCookies, location) {
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.location = location;
  this.totalCookies = 0;
  this.simulatedCookiesArray = [];
  this.businessHours = ['6am : ', '7am : ', '8am : ', '9am : ', '10am : ', '11am : ', '12pm : ', '1pm : ', '2pm : ', '3pm : ', '4pm : ', '5pm : ', '6pm : ', '7pm : ', '8pm : '];
}


SalesPerLocation.prototype.randomCustomers =  function() {
                                                var diffCustomers = this.maxCustomers-this.minCustomers;
                                                return Math.floor((Math.random()*(diffCustomers+1))+this.minCustomers);
                                              };


SalesPerLocation.prototype.simulatedCookiesPerHour =  function() {
                                                        for(var i=0; i<this.businessHours.length; i++) {
                                                          this.simulatedCookiesArray.push(this.avgCookies*this.randomCustomers());
                                                        }
                                                      };


SalesPerLocation.prototype.totalCookiesFunc =  function() {
                                                  for (var j=0; j<this.simulatedCookiesArray.length; j++) {
                                                    this.totalCookies = this.totalCookies + this.simulatedCookiesArray[j];
                                                  }
                                               };


SalesPerLocation.prototype.saleTable =  function() {
                                          var table =  document.createElement('table');

                                          var tRow1, tData1, tDataEmpty, tDataDailyTotalString ;

                                            tRow1 = document.createElement('tr');
                                            tDataEmpty = document.createElement ('td');
                                            tRow1.appendChild(tDataEmpty);

                                            for (var i=0; i<this.businessHours.length; i++) {
                                                tData1 = document.createElement('td');
                                                tData1.textContent = this.businessHours[i];
                                                tRow1.appendChild(tData1);
                                              }

                                            tDataDailyTotalString = document.createElement('td');
                                            tRow1.appendChild(tDataDailyTotalString);
                                            tDataDailyTotalString.textContent = "Daily Location Total";
                                            table.appendChild(tRow1);


                                          for (var i=0; i<6; i++) {

                                            var tRows, tDatum, tLocations;

                                              tRows = document.createElement('tr');
                                              tLocations = document.createElement ('td');
                                              tLocations.textContent = this.Location;
                                              tRows.appendChild(tLocations);

                                              for (var i=0; i<this.simulatedCookiesArray.length; i++) {
                                                  tDatum = document.createElement('td');
                                                  tRows.appendChild(tDatum);
                                                  tDatum.textContent = this.simulatedCookiesArray[i];

                                              }

                                              tDataDailyTotal = document.createElement('td');
                                              tRows.appendChild(tDataDailyTotal);
                                              tDataDailyTotal.textContent = this.totalCookiesFunc();

                                              table.appendChild(tRow2);
                                          }

                                          return table;
                                        }

var pike = new SalesPerLocation (23, 65, 6.3, "1st & Pike");
var pikeTable = pike.saleTable();
var pikePosition = document.getElementById('dailysales-table');
pikePosition.appendChild(pikeTable);

var SeaTac = new SalesPerLocation (3, 24, 1.2, "SeaTac Airport");
var seaTacTable = seaTac.saleTable();
var seaTacPosition = document.getElementById('dailysales-table');
seaTacPosition.appendChild(seaTacTable);

var seattleCenter= new SalesPerLocation (11, 38, 3.7, "Seattle Center");
var seattleCenterTable = seattleCenter.saleTable();
var seattleCenterPosition = document.getElementById('dailysales-table');
seattleCenterPosition.appendChild(pikeTable);

var capitolHill = new SalesPerLocation (20, 38, 2.3, "Capitol Hill");
var capitolHillTable = capitolHill.saleTable();
var capitolHillPosition = document.getElementById('dailysales-table');
capitolHillPosition.appendChild(capitolHillTable);

var alki = new SalesPerLocation (2, 16, 4.6, "Alki");
var alkiTable = alki.saleTable();
var alkiPosition = document.getElementById('dailysales-table');
alkiPosition.appendChild(alkiTable);
