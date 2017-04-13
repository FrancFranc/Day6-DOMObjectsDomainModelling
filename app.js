'use strict';

var pike = {
            minCustomers : 23,
            maxCustomers : 65,
            avgCookies : 6.3,
            totalCookies : 0,
            simulatedCookiesArray : [],
            businessHours : ['6am : ', '7am : ', '8am : ', '9am : ', '10am : ', '11am : ', '12pm : ', '1pm : ', '2pm : ', '3pm : ', '4pm : ', '5pm : ', '6pm : ', '7pm : ', '8pm : ', 'Total : '],

            randomCustomers : function() {
                                var diffCustomers = this.maxCustomers-this.minCustomers;
                                return Math.floor((Math.random()*(diffCustomers+1))+this.minCustomers);
                              },

            simulatedCookiesPerHour : function() {
                                        for(var i=0; i<this.businessHours.length; i++) {
                                          this.simulatedCookiesArray.push(this.avgCookies*this.randomCustomers());
                                        }
                                      },
            totalCookiesFunc : function() {

                              for (var j=0; j<this.simulatedCookiesArray.length; j++) {
                                  this.totalCookies = this.totalCookies + this.simulatedCookiesArray[j];
                              }
                           }
}

pike.simulatedCookiesPerHour();
pike.totalCookiesFunc();
// add business hours into the list

var pikeBusinessHoursUl = document.getElementById('pike-business-hours');
var pikeBusinessHoursLi;
    for (var i=0; i<pike.businessHours.length; i++) {
      pikeBusinessHoursLi = document.createElement('li');
      pikeBusinessHoursLi.textContent = pike.businessHours[i] + Math.floor(pike.simulatedCookiesArray[i]);
      pikeBusinessHoursUl.appendChild(pikeBusinessHoursLi);
    }






var seaTac = {
              minCustomers : 3,
              maxCustomers : 24,
              avgCookies : 1.2,
              totalCookies : 0,
              simulatedCookiesArray : [],
              businessHours : ['6am : ', '7am : ', '8am : ', '9am : ', '10am : ', '11am : ', '12pm : ', '1pm : ', '2pm : ', '3pm : ', '4pm : ', '5pm : ', '6pm : ', '7pm : ', '8pm : ', 'Total : '],

              randomCustomers : function() {
                                  var diffCustomers = this.maxCustomers-this.minCustomers;
                                  return Math.floor((Math.random()*(diffCustomers+1))+this.minCustomers);
                                },

              simulatedCookiesPerHour : function() {
                                          for(var i=0; i<this.businessHours.length; i++) {
                                            this.simulatedCookiesArray.push(this.avgCookies*this.randomCustomers());
                                          }
                                        },
              totalCookiesFunc : function() {

                                for (var j=0; j<this.simulatedCookiesArray.length; j++) {
                                    this.totalCookies = this.totalCookies + this.simulatedCookiesArray[j];
                                }
                             }
  }

  seaTac.simulatedCookiesPerHour();
  seaTac.totalCookiesFunc();

  // add business hours into the list

  var seaTacBusinessHoursUl = document.getElementById('seatac-business-hours');
  var seaTacBusinessHoursLi;
      for (var i=0; i<seaTac.businessHours.length; i++) {
        seaTacBusinessHoursLi = document.createElement('li');
        seaTacBusinessHoursLi.textContent = seaTac.businessHours[i] + Math.floor(seaTac.simulatedCookiesArray[i]);

        seaTacBusinessHoursUl.appendChild(seaTacBusinessHoursLi);
      }







var seattleCenter = {
                      minCustomers : 11,
                      maxCustomers : 38,
                      avgCookies : 3.7,
                      totalCookies : 0,
                      simulatedCookiesArray : [],
                      businessHours : ['6am : ', '7am : ', '8am : ', '9am : ', '10am : ', '11am : ', '12pm : ', '1pm : ', '2pm : ', '3pm : ', '4pm : ', '5pm : ', '6pm : ', '7pm : ', '8pm : ', 'Total : '],

                      randomCustomers : function() {
                                          var diffCustomers = this.maxCustomers-this.minCustomers;
                                          return Math.floor((Math.random()*(diffCustomers+1))+this.minCustomers);
                                        },

                      simulatedCookiesPerHour : function() {
                                                  for(var i=0; i<this.businessHours.length; i++) {
                                                    this.simulatedCookiesArray.push(this.avgCookies*this.randomCustomers());
                                                  }
                                                },
                      totalCookiesFunc : function() {

                                        for (var j=0; j<this.simulatedCookiesArray.length; j++) {
                                            this.totalCookies = this.totalCookies + this.simulatedCookiesArray[j];
                                        }
                                     }
          }

seattleCenter.simulatedCookiesPerHour();
seattleCenter.totalCookiesFunc();

          // add business hours into the list

var seattleCenterBusinessHoursUl = document.getElementById('seacen-business-hours');
var seattleCenterBusinessHoursLi;
for (var i=0; i<seattleCenter.businessHours.length; i++) {
    seattleCenterBusinessHoursLi = document.createElement('li');
    seattleCenterBusinessHoursLi.textContent = seattleCenter.businessHours[i] + Math.floor(seattleCenter.simulatedCookiesArray[i]);
    seattleCenterBusinessHoursUl.appendChild(seattleCenterBusinessHoursLi);
}







var capitolHill = {
                    minCustomers : 20,
                    maxCustomers : 38,
                    avgCookies : 2.3,
                    totalCookies : 0,
                    simulatedCookiesArray : [],
                    businessHours : ['6am : ', '7am : ', '8am : ', '9am : ', '10am : ', '11am : ', '12pm : ', '1pm : ', '2pm : ', '3pm : ', '4pm : ', '5pm : ', '6pm : ', '7pm : ', '8pm : ', 'Total : '],

                    randomCustomers : function() {
                                        var diffCustomers = this.maxCustomers-this.minCustomers;
                                        return Math.floor((Math.random()*(diffCustomers+1))+this.minCustomers);
                                      },

                    simulatedCookiesPerHour : function() {
                                                for(var i=0; i<this.businessHours.length; i++) {
                                                  this.simulatedCookiesArray.push(this.avgCookies*this.randomCustomers());
                                                }
                                              },
                    totalCookiesFunc : function() {

                                      for (var j=0; j<this.simulatedCookiesArray.length; j++) {
                                          this.totalCookies = this.totalCookies + this.simulatedCookiesArray[j];
                                      }
                                   }
        }

capitolHill.simulatedCookiesPerHour();
capitolHill.totalCookiesFunc();

        // add business hours into the list

var capitolHillBusinessHoursUl = document.getElementById('caphill-business-hours');
var capitolHillBusinessHoursLi;
for (var i=0; i<capitolHill.businessHours.length; i++) {
  capitolHillBusinessHoursLi = document.createElement('li');
  capitolHillBusinessHoursLi.textContent = capitolHill.businessHours[i] + Math.floor(capitolHill.simulatedCookiesArray[i]);
  capitolHillBusinessHoursUl.appendChild(capitolHillBusinessHoursLi);
}










var alki = {
            minCustomers : 2,
            maxCustomers : 16,
            avgCookies : 4.6,
            totalCookies : 0,
            simulatedCookiesArray : [],
            businessHours : ['6am : ', '7am : ', '8am : ', '9am : ', '10am : ', '11am : ', '12pm : ', '1pm : ', '2pm : ', '3pm : ', '4pm : ', '5pm : ', '6pm : ', '7pm : ', '8pm : ', 'Total : '],

            randomCustomers : function() {
                                var diffCustomers = this.maxCustomers-this.minCustomers;
                                return Math.floor((Math.random()*(diffCustomers+1))+this.minCustomers);
                              },

            simulatedCookiesPerHour : function() {
                                        for(var i=0; i<this.businessHours.length; i++) {
                                          this.simulatedCookiesArray.push(this.avgCookies*this.randomCustomers());
                                        }
                                      },
            totalCookiesFunc : function() {

                              for (var j=0; j<this.simulatedCookiesArray.length; j++) {
                                  this.totalCookies = this.totalCookies + this.simulatedCookiesArray[j];
                              }
                           }
}

alki.simulatedCookiesPerHour();
alki.totalCookiesFunc();

// add business hours into the list

var alkiBusinessHoursUl = document.getElementById('alki-business-hours');
var alkiBusinessHoursLi;
for (var i=0; i<alki.businessHours.length; i++) {
  alkiBusinessHoursLi = document.createElement('li');
  alkiBusinessHoursLi.textContent = alki.businessHours[i] + Math.floor(alki.simulatedCookiesArray[i]);
  alkiBusinessHoursUl.appendChild(alkiBusinessHoursLi);
  }
