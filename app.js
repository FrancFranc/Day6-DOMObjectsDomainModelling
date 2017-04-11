'use strict';

var pike = {
            minCustomers : 23,
            maxCustomers : 65,
            avgCookies : 6.3,
            diffCustomers : this.maxCustomers-this.minCustomers,
            randomCustomers : function() {
                                return Math.floor((Math.random()*(this.diffCustomers+1))+this.minCustomers);
                              },
            perHours = [],
            simulatedCookiesSale :function() {
                                    for(var i=0; var<15; i++) {
                                      this.avgCookies*this.randomCustomers()
                                      this.perHours.push();
                                    }
                                  }
}

function pikeTotalCookies(perHours) {
  var pikeTotalCookies = 0;
  for (var j=0; j<pike.perHours.length; j++) {
    pikeTotalCookies = pikeTotalCookies + pike.perHours[j];
  }
}





var seaTac = {
              minCustomers : 3,
              maxCustomers : 24,
              avgCookies : 1.2,
              diffCustomers : this.maxCustomers-this.minCustomers,
              randomCustomers : function() {
                                  return Math.floor((Math.random()*(this.diffCustomers+1))+this.minCustomers);
                                },
              perHours = [],
              simulatedCookiesSale :function() {
                                      for(var i=0; var<15; i++) {
                                        this.avgCookies*this.randomCustomers()
                                        this.perHours.push();
                                      }
                                    }
}


var seattleCenter = {
                      minCustomers : 11,
                      maxCustomers : 38,
                      avgCookies : 3.7,
                      diffCustomers : this.maxCustomers-this.minCustomers,
                      randomCustomers : function() {
                                          return Math.floor((Math.random()*(this.diffCustomers+1))+this.minCustomers);
                                        },
                      perHours = [],
                      simulatedCookiesSale :function() {
                                              for(var i=0; var<15; i++) {
                                                this.avgCookies*this.randomCustomers()
                                                this.perHours.push();
                                              }
                                            }
}

var capitolHill = {
                    minCustomers : 20,
                    maxCustomers : 38,
                    avgCookies : 2.3,
                    diffCustomers : this.maxCustomers-this.minCustomers,
                    randomCustomers : function() {
                                        return Math.floor((Math.random()*(this.diffCustomers+1))+this.minCustomers);
                                      },
                    perHours = [],
                    simulatedCookiesSale :function() {
                                            for(var i=0; var<15; i++) {
                                              this.avgCookies*this.randomCustomers()
                                              this.perHours.push();
                                            }
                                          }
}

var alki = {
            minCustomers : 2,
            maxCustomers : 16,
            avgCookies : 4.6,
            diffCustomers : this.maxCustomers-this.minCustomers,
            randomCustomers : function() {
                                return Math.floor((Math.random()*(this.diffCustomers+1))+this.minCustomers);
                              },
            perHours = [],
            simulatedCookiesSale :function() {
                                    for(var i=0; var<15; i++) {
                                      this.avgCookies*this.randomCustomers()
                                      this.perHours.push();
                                    }
                                  }
}
