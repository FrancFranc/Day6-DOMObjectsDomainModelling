'use strict';

var pike = {
            minCustomers : 23,
            maxCustomers : 65,
            avgCookies : 6.3,
            diffCustomers : this.maxCustomers-this.minCustomers,
            simulatedCookiesArray : [],
            businessHours : ['6am : ', '7am : ', '8am : ', '9am : ', '10am : ', '11am : ', '12pm : ', '1pm : ', '2pm : ', '3pm : ', '4pm : ', '5pm : ', '6pm : ', '7pm : ', '8pm : ', 'Total : '],

            randomCustomers : function() {
                                return Math.floor((Math.random()*(this.diffCustomers+1))+this.minCustomers);
                              },

            simulatedCookiesPerHour : function() {
                                        for(var i=0; i<15; i++) {
                                          this.avgCookies*this.randomCustomers();
                                          this.simulatedCookiesArray.push();
                                        }
                                      },
            totalCookies : function() {
                              var totalCookiesLoop = 0;
                              for (var j=0; j<this.simulatedCookiesArray.length; j++) {
                                  totalCookiesLoop = totalCookiesLoop + this.simulatedCookiesArray[j];
                              }
                           }
}


// add business hours into the list

var pikeBusinessHoursUl = document.getElementById('pike-business-hours');
var pikeBusinessHoursLi;
    for (var i=0; i<pike.businessHours.length; i++) {
      pikeBusinessHoursLi = document.createElement('li');
      pikeBusinessHoursLi.textContent = pike.businessHours[i];
      pikeBusinessHoursUl.appendChild(pikeBusinessHoursLi);
    }

// add Cookies sales into the list

var pikeCookiesSaleListUl = document.getElementById('pike-salelist');
var pikeCookiesSaleListLi;
    for (var i=0; i<pike.simulatedCookiesArray.length; i++) {
      pikeCookiesSaleListLi = document.createElement('li');
      pikeCookiesSaleListLi.textContent = pike.simulatedCookiesArray[i];
      pikeCookiesSaleListUl.appendChild(pikeCookiesSaleListLi);
    }









var seaTac = {
              minCustomers : 3,
              maxCustomers : 24,
              avgCookies : 1.2,
              diffCustomers : this.maxCustomers-this.minCustomers,
              simulatedCookiesArray : [],
              businessHours : ['6am : ', '7am : ', '8am : ', '9am : ', '10am : ', '11am : ', '12pm : ', '1pm : ', '2pm : ', '3pm : ', '4pm : ', '5pm : ', '6pm : ', '7pm : ', '8pm : ', 'Total : '],
              randomCustomers : function() {
                                  return Math.floor((Math.random()*(this.diffCustomers+1))+this.minCustomers);
                                },
              simulatedCookiesArray = [],
              simulatedCookiesPerHour : function() {
                                          for(var i=0; var<15; i++) {
                                            this.avgCookies*this.randomCustomers();
                                            this.simulatedCookiesArray.push();
                                          }
                                        },
              totalCookies : function() {
                                var totalCookiesLoop = 0;
                                for (var j=0; j<seaTac.simulatedCookiesArray.length; j++) {
                                    totalCookiesLoop = totalCookiesLoop + seaTac.simulatedCookiesArray[j];
                                }
                             }
}

var seatacBusinessHoursUl = document.getElementById('seatac-business-hours');
var seatacBusinessHoursLi;
    for (var i=0; i<seaTac.businessHours.length; i++) {
      seatacBusinessHoursLi = document.createElement('li');
      seatacBusinessHoursLi.textContent = seaTac.businessHours[i];
      seatacBusinessHoursUl.appendChild(seatacBusinessHoursLi);
    }

// add Cookies sales into the list

var seatacCookiesSaleListUl = document.getElementById('seaTac-salelist');
var seatacCookiesSaleListLi;
    for (var i=0; i<seaTac.simulatedCookiesArray.length; i++) {
      seatacCookiesSaleListLi = document.createElement('li');
      seatacCookiesSaleListLi.textContent = seaTac.simulatedCookiesArray[i];
      seatacCookiesSaleListUl.appendChild(seatacCookiesSaleListLi);
    }







var seattleCenter = {
                      minCustomers : 11,
                      maxCustomers : 38,
                      avgCookies : 3.7,
                      diffCustomers : this.maxCustomers-this.minCustomers,
                      simulatedCookiesArray : [],
                      businessHours : ['6am : ', '7am : ', '8am : ', '9am : ', '10am : ', '11am : ', '12pm : ', '1pm : ', '2pm : ', '3pm : ', '4pm : ', '5pm : ', '6pm : ', '7pm : ', '8pm : ', 'Total : '],
                      randomCustomers : function() {
                                          return Math.floor((Math.random()*(this.diffCustomers+1))+this.minCustomers);
                                        },
                      simulatedCookiesArray = [],
                      simulatedCookiesPerHour : function() {
                                                  for(var i=0; var<15; i++) {
                                                    this.avgCookies*this.randomCustomers();
                                                    this.simulatedCookiesArray.push();
                                                  }
                                                },
                      totalCookies : function() {
                                        var totalCookiesLoop = 0;
                                        for (var j=0; j<seattleCenter.simulatedCookiesArray.length; j++) {
                                            totalCookiesLoop = totalCookiesLoop + seattleCenter.simulatedCookiesArray[j];
                                        }
                                     }
}

var seacenBusinessHoursUl = document.getElementById('seacen-business-hours');
var seacenBusinessHoursLi;
    for (var i=0; i<seattleCenter.businessHours.length; i++) {
      seacenBusinessHoursLi = document.createElement('li');
      seacenBusinessHoursLi.textContent = seattleCenter.businessHours[i];
      seacenBusinessHoursUl.appendChild(seacenBusinessHoursLi);
    }

// add Cookies sales into the list

var seacenCookiesSaleListUl = document.getElementById('seacen-salelist');
var seacenCookiesSaleListLi;
    for (var i=0; i<seattleCenter.simulatedCookiesArray.length; i++) {
      seacenCookiesSaleListLi = document.createElement('li');
      seacenCookiesSaleListLi.textContent = seattleCenter.simulatedCookiesArray[i];
      seacenCookiesSaleListUl.appendChild(seacenCookiesSaleListLi);
    }





var capitolHill = {
                    minCustomers : 20,
                    maxCustomers : 38,
                    avgCookies : 2.3,
                    diffCustomers : this.maxCustomers-this.minCustomers,
                    simulatedCookiesArray : [],
                    businessHours : ['6am : ', '7am : ', '8am : ', '9am : ', '10am : ', '11am : ', '12pm : ', '1pm : ', '2pm : ', '3pm : ', '4pm : ', '5pm : ', '6pm : ', '7pm : ', '8pm : ', 'Total : '],
                    randomCustomers : function() {
                                        return Math.floor((Math.random()*(this.diffCustomers+1))+this.minCustomers);
                                      },
                    simulatedCookiesArray = [],
                    simulatedCookiesPerHour : function() {
                                                for(var i=0; var<15; i++) {
                                                  this.avgCookies*this.randomCustomers();
                                                  this.simulatedCookiesArray.push();
                                                }
                                              },
                    totalCookies : function() {
                                      var totalCookiesLoop = 0;
                                      for (var j=0; j<capitolHill.simulatedCookiesArray.length; j++) {
                                          totalCookiesLoop = totalCookiesLoop + capitolHill.simulatedCookiesArray[j];
                                      }
                                   }
}

var caphillBusinessHoursUl = document.getElementById('caphill-business-hours');
var caphillBusinessHoursLi;
    for (var i=0; i<capitolHill.businessHours.length; i++) {
      caphillBusinessHoursLi = document.createElement('li');
      caphillBusinessHoursLi.textContent = capitolHill.businessHours[i];
      caphillBusinessHoursUl.appendChild(caphillBusinessHoursLi);
    }

// add Cookies sales into the list

var cookiesSaleListUl = document.getElementById('caphill-salelist');
var cookiesSaleListLi;
    for (var i=0; i<capitolHill.simulatedCookiesArray.length; i++) {
      cookiesSaleListLi = document.createElement('li');
      cookiesSaleListLi.textContent = capitolHill.simulatedCookiesArray[i];
      cookiesSaleListUl.appendChild(cookiesSaleListLi);
    }




var alki = {
            minCustomers : 2,
            maxCustomers : 16,
            avgCookies : 4.6,
            diffCustomers : this.maxCustomers-this.minCustomers,
            simulatedCookiesArray : [],
            businessHours : ['6am : ', '7am : ', '8am : ', '9am : ', '10am : ', '11am : ', '12pm : ', '1pm : ', '2pm : ', '3pm : ', '4pm : ', '5pm : ', '6pm : ', '7pm : ', '8pm : ', 'Total : '],
            randomCustomers : function() {
                                return Math.floor((Math.random()*(this.diffCustomers+1))+this.minCustomers);
                              },
            simulatedCookiesArray = [],
            simulatedCookiesPerHour : function() {
                                        for(var i=0; var<15; i++) {
                                          this.avgCookies*this.randomCustomers();
                                          this.simulatedCookiesArray.push();
                                        }
                                      },
            totalCookies : function() {
                              var totalCookiesLoop = 0;
                              for (var j=0; j<alki.simulatedCookiesArray.length; j++) {
                                  totalCookiesLoop = totalCookiesLoop + alki.simulatedCookiesArray[j];
                              }
                           }
}

var alkiBusinessHoursUl = document.getElementById('alki-business-hours');
var alkiBusinessHoursLi;
    for (var i=0; i<alki.businessHours.length; i++) {
      alkiBusinessHoursLi = document.createElement('li');
      alkiBusinessHoursLi.textContent = alki.businessHours[i];
      alkiBusinessHoursUl.appendChild(alkiBusinessHoursLi);
    }

// add Cookies sales into the list

var alkiCookiesSaleListUl = document.getElementById('alki-salelist');
var alkiCookiesSaleListLi;
    for (var i=0; i<alki.simulatedCookiesArray.length; i++) {
      alkiCookiesSaleListLi = document.createElement('li');
      alkiCookiesSaleListLi.textContent = alki.simulatedCookiesArray[i];
      alkiCookiesSaleListUl.appendChild(alkiCookiesSaleListLi);
    }
