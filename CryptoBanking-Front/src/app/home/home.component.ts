import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ChartService } from '../shared/chart.service';
import { Chart, registerables } from 'chart.js';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  result: any;

  userRole: string;

  coinPrice: any;
  chartBTC: any = [];
  chartETH: any = [];
  chartBNB: any = [];
  chartCAR: any = [];
  chartXRP: any = [];
  chartSOL: any = [];

  constructor(
    private router: Router,
    public service: UserService,
    private helper: JwtHelperService,
    private http: HttpClient,
    private ChartS: ChartService,
    private config: NgbCarouselConfig ) {

    config.interval = 7000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;

    Chart.register(...registerables);
  }

  ngOnInit() {
    this.userAuth();

    this.service.userInfo();

    this.chartSolana();
    this.chartEthereum();
    this.chartBinanceCoin();
    this.chartBitcoin();
    this.chartCardano();
    this.chartRipple();
  }

  

  userAuth() {
    const Token = localStorage.getItem("token");
    if (Token && !this.helper.isTokenExpired(Token)) {
      return true;
    }
    else {
      this.router.navigate(['/user/login']);
      return false;
    }
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }

  // Charts

  chartSolana() {
    this.ChartS.coinsHistorySOL().then((res) => {
      this.result = res;

      this.coinPrice = this.result.prices;

      console.log(this.coinPrice);

      this.chartSOL = new Chart('canvasSOL', {
        type: 'line',
        data: {
          labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],

          datasets: [
            {
              label: 'Solana (zadnja 3 dana)',
              borderColor: "rgba(165,55,253,1)",
              backgroundColor: "rgba(165,55,253,0.5)",
              fill: true,
              data: this.coinPrice,
              borderWidth: 3,
            }]
        },
        options: {
          plugins: {
            legend: {
              labels: {
                color: "rgba(165,55,253,1)"
              }
            }
          },
          scales: {
            x: {
              grid: {
                display: false,
                borderColor: "rgba(165,55,253,1)"
              },
              ticks: {
                color: "rgba(165,55,253,1)"
              }
            },
            y: {
              grid: {
                color: "rgba(165,55,253,1)",
                borderColor: "rgba(165,55,253,1)"
              },
              ticks: {
                color: "rgba(165,55,253,1)"
              }
            }
          }
        }
      })
    });
  };

  chartBitcoin() {
    this.ChartS.coinsHistoryBTC().then((res) => {
      this.result = res;

      this.coinPrice = this.result.prices;

      console.log(this.coinPrice);

      this.chartBTC = new Chart('canvasBTC', {
        type: 'line',

        data: {
          labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],

          datasets: [
            {
              label: 'Bitcoin (zadnja 3 dana)',
              borderColor: "rgba(230,126,34,1)",
              backgroundColor: "rgba(230,126,34,0.5)",
              fill: true,
              data: this.coinPrice,
              borderWidth: 3,
            }]
        },
        options: {
          plugins: {
            legend: {
              labels: {
                color: "rgba(230,126,34,1)"
              }
            }
          },
          scales: {
            x: {
              grid: {
                display: false,
                borderColor: "rgba(230,126,34,1)"
              },
              ticks: {
                color: "rgba(230,126,34,1)"
              }
            },
            y: {
              grid: {
                color: "rgba(230,126,34,1)",
                borderColor: "rgba(230,126,34,1)"
              },
              ticks: {
                color: "rgba(230,126,34,1)"
              }
            }
          }
        }
      })
    });
  };

  chartEthereum() {
    this.ChartS.coinsHistoryETH().then((res) => {
      this.result = res;

      this.coinPrice = this.result.prices;

      console.log(this.coinPrice);

      this.chartETH = new Chart('canvasETH', {
        type: 'line',
        data: {
          labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],

          datasets: [
            {
              label: 'Ethereum (zadnja 3 dana)',
              borderColor: "rgba(37,41,88,1)",
              backgroundColor: "rgba(50,50,120,0.5)",
              fill: true,
              data: this.coinPrice,
              borderWidth: 3,
            }]
        },
        options: {
          plugins: {
            legend: {
              labels: {
                color: "rgba(37,41,88,1)"
              }
            }
          },
          scales: {
            x: {
              grid: {
                display: false,
                borderColor: "rgba(37,41,88,1)"
              },
              ticks: {
                color: "rgba(37,41,88,1)"
              }
            },
            y: {
              grid: {
                color: "rgba(37,41,88,1)",
                borderColor: "rgba(37,41,88,1)"
              },
              ticks: {
                color: "rgba(37,41,88,1)"
              }
            }
          }
        }
      })
    });
  };

  chartBinanceCoin() {
    this.ChartS.coinsHistoryBNB().then((res) => {
      this.result = res;

      this.coinPrice = this.result.prices;

      console.log(this.coinPrice);

      this.chartBNB = new Chart('canvasBNB', {
        type: 'line',
        data: {
          labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],

          datasets: [
            {
              label: 'Binance Coin (zadnja 3 dana)',
              borderColor: "rgba(193,161,0,1)",
              backgroundColor: "rgba(193,161,0,0.5)",
              fill: true,
              data: this.coinPrice,
              borderWidth: 3,
            }]
        },
        options: {
          plugins: {
            legend: {
              labels: {
                color: "rgba(193,161,0,1)"
              }
            }
          },
          scales: {
            x: {
              grid: {
                display: false,
                borderColor: "rgba(193,161,0,1)"
              },
              ticks: {
                color: "rgba(193,161,0,1)"
              }
            },
            y: {
              grid: {
                color: "rgba(193,161,0,1)",
                borderColor: "rgba(193,161,0,1)"
              },
              ticks: {
                color: "rgba(193,161,0,1)"
              }
            }
          }
        }
      })
    });
  };

  chartCardano() {
    this.ChartS.coinsHistoryCAR().then((res) => {
      this.result = res;

      this.coinPrice = this.result.prices;

      console.log(this.coinPrice);

      this.chartCAR = new Chart('canvasCAR', {
        type: 'line',
        data: {
          labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],

          datasets: [
            {
              label: 'Cardano (zadnja 3 dana)',
              borderColor: "rgba(149,165,166,1)",
              backgroundColor: "rgba(210,215,211,1)",
              fill: true,
              data: this.coinPrice,
              borderWidth: 3,
            }]
        },
        options: {
          plugins: {
            legend: {
              labels: {
                color: "rgba(149,165,166,1)"
              }
            }
          },
          scales: {
            x: {
              grid: {
                display: false,
                borderColor: "rgba(149,165,166,1)"
              },
              ticks: {
                color: "rgba(149,165,166,1)"
              }
            },
            y: {
              grid: {
                color: "rgba(149,165,166,1)",
                borderColor: "rgba(149,165,166,1)"
              },
              ticks: {
                color: "rgba(149,165,166,1)"
              }
            }
          }
        }
      })
    });
  };

  chartRipple() {
    this.ChartS.coinsHistoryXRP().then((res) => {
      this.result = res;

      this.coinPrice = this.result.prices;

      console.log(this.coinPrice);

      this.chartXRP = new Chart('canvasXRP', {
        type: 'line',
        data: {
          labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],

          datasets: [
            {
              label: 'Ripple (zadnja 3 dana)',
              borderColor: "black",
              backgroundColor: "rgba(0,0,0,0.5)",
              fill: true,
              data: this.coinPrice,
              borderWidth: 3,
            }]
        },
        options: {
          plugins: {
            legend: {
              labels: {
                color: "black"
              }
            }
          },
          scales: {
            x: {
              grid: {
                display: false,
                borderColor: "black"
              },
              ticks: {
                color: "black"
              }
            },
            y: {
              grid: {
                color: "black",
                borderColor: "black"
              },
              ticks: {
                color: "black"
              }
            }
          }
        }
      })
    });
  };
}
