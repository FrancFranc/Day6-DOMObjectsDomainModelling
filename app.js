'use strict';

var pike = {
            minCustomers : 23,
            maxCustomers : 65,
            avgCookies : 6.3,
            pikeTotalCookies : 0,
            diffCustomers : this.maxCustomers-this.minCustomers,
            randomCustomers : function() {
                                console.log (Math.floor((Math.random()*this.diffCustomers+1)+this.minCustomers));
                              },
            perHours : [],
            simulatedCookiesSale : function() {

                                    for(var i=0; i<15; i++) {
                                      var pikeRandomCookiesPerHour = this.avgCookies*this.randomCustomers();
                                      this.perHours.push(pikeRandomCookiesPerHour);

                                      this.pikeTotalCookies = this.pikeTotalCookies + pikeRandomCookiesPerHour;


                                    }
                                  }


}





var seaTac = {
              minCustomers : 3,
              maxCustomers : 24,
              avgCookies : 1.2,
              seaTacTotalCookies : 0,
              diffCustomers : this.maxCustomers-this.minCustomers,
              randomCustomers : function() {
                                  console.log (Math.floor((Math.random()*this.diffCustomers+1)+this.minCustomers));
                                },
              perHours : [],
              simulatedCookiesSale : function() {

                                      for(var i=0; i<15; i++) {
                                        var seaTacRandomCookiesPerHour = this.avgCookies*this.randomCustomers();
                                        this.perHours.push(seaTacRandomCookiesPerHour);

                                        this.seaTacTotalCookies = this.seaTacTotalCookies + seaTacRandomCookiesPerHour;


                                      }
                                    }


  }







var seattleCenter = {
                      minCustomers : 11,
                      maxCustomers : 38,
                      avgCookies : 3.7,
                      seattleCenterTotalCookies : 0,
                      diffCustomers : this.maxCustomers-this.minCustomers,
                      randomCustomers : function() {
                                          console.log (Math.floor((Math.random()*this.diffCustomers+1)+this.minCustomers));
                                        },
                      perHours : [],
                      simulatedCookiesSale : function() {

                                              for(var i=0; i<15; i++) {
                                                var seattleCenterRandomCookiesPerHour = this.avgCookies*this.randomCustomers();
                                                this.perHours.push(seattleCenterRandomCookiesPerHour);

                                                this.seattleCenterTotalCookies = this.seattleCenterTotalCookies + seattleCenterRandomCookiesPerHour;


                                              }
                                            }


          }






var capitolHill = {
                    minCustomers : 20,
                    maxCustomers : 38,
                    avgCookies : 2.3,
                    capitolHillTotalCookies : 0,
                    diffCustomers : this.maxCustomers-this.minCustomers,
                    randomCustomers : function() {
                                        console.log (Math.floor((Math.random()*this.diffCustomers+1)+this.minCustomers));
                                      },
                    perHours : [],
                    simulatedCookiesSale : function() {

                                            for(var i=0; i<15; i++) {
                                              var capitolHillRandomCookiesPerHour = this.avgCookies*this.randomCustomers();
                                              this.perHours.push(capitolHillRandomCookiesPerHour);

                                              this.capitolHillTotalCookies = this.capitolHillTotalCookies + capitolHillRandomCookiesPerHour;


                                            }
                                          }


        }





var alki = {
            minCustomers : 2,
            maxCustomers : 16,
            avgCookies : 4.6,
            alkiTotalCookies : 0,
            diffCustomers : this.maxCustomers-this.minCustomers,
            randomCustomers : function() {
                                console.log (Math.floor((Math.random()*this.diffCustomers+1)+this.minCustomers));
                              },
            perHours : [],
            simulatedCookiesSale : function() {

                                    for(var i=0; i<15; i++) {
                                      var alkiRandomCookiesPerHour = this.avgCookies*this.randomCustomers();
                                      this.perHours.push(alkieRandomCookiesPerHour);

                                      this.alkieTotalCookies = this.alkiTotalCookies + alkiRandomCookiesPerHour;


                                    }
                                  }


}
