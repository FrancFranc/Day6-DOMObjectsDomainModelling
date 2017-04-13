'use strict';


function SalesPerLocation(minCustomers, maxCustomers, avgCookies, location) {
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.location = location;
  this.totalCookies = 0;
  this.simulatedCookiesArray = [];
  this.businessHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
}


SalesPerLocation.prototype.randomCustomers =  function() {
                                                var diffCustomers = this.maxCustomers-this.minCustomers;
                                                return Math.floor((Math.random()*(diffCustomers+1))+this.minCustomers);
                                              };


SalesPerLocation.prototype.simulatedCookiesPerHour =  function() {
                                                        for(var i=0; i<this.businessHours.length; i++) {
                                                          this.simulatedCookiesArray.push(Math.floor(this.avgCookies*this.randomCustomers()));
                                                        }
                                                      };


SalesPerLocation.prototype.totalCookiesFunc =  function() {
                                                  for (var j=0; j<this.simulatedCookiesArray.length; j++) {
                                                    this.totalCookies += this.simulatedCookiesArray[j];
                                                  }
                                                  return this.totalCookies;
                                               };


SalesPerLocation.prototype.saleTableHeading =  function() {
                                              var table =  document.createElement('table');
                                              table.setAttribute("id", "store-table");
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

                                              return table;
                                            }

SalesPerLocation.prototype.saleDataTableRows = function () {
                                             var table, tRow2, tLocations, tData2, tDataDailyTotal;

                                             table = document.getElementById('store-table');
                                             tRow2 = document.createElement('tr');
                                             table.appendChild(tRow2);

                                             tLocations = document.createElement('td');
                                             tLocations.textContent = this.location;
                                             tRow2.appendChild(tLocations);
                                             this.simulatedCookiesPerHour();

                                             for (var i=0; i<this.businessHours.length; i++) {
                                               tData2 = document.createElement('td');
                                               tData2.textContent = this.simulatedCookiesArray[i];
                                               tRow2.appendChild(tData2);
                                             }

                                             tDataDailyTotal = document.createElement('td');
                                             tDataDailyTotal.textContent = this.totalCookiesFunc();
                                             tRow2.appendChild(tDataDailyTotal);
                                           }



var pike = new SalesPerLocation (23, 65, 6.3, "1st & Pike");
var seaTac = new SalesPerLocation (3, 24, 1.2, "SeaTac Airport");
var seattleCenter = new SalesPerLocation (11, 38, 3.7, "Seattle Center");
var capitolHill = new SalesPerLocation (20, 38, 2.3, "Capitol Hill");
var alki = new SalesPerLocation (2, 16, 4.6, "Alki");

var pikeHTMLPosition = document.getElementById('dailysales-table');
var table = pike.saleTableHeading();

pikeHTMLPosition.appendChild(table);

pike.saleDataTableRows();
seaTac.saleDataTableRows();
seattleCenter.saleDataTableRows();
capitolHill.saleDataTableRows();
alki.saleDataTableRows();
