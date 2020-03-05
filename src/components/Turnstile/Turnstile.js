import React, { Component } from "react";
//import { Link } from "react-router-dom";
//import queryString from "query-string";
//import Checkboxes from "./Checkboxes";
import site from "../../Global";
//import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from "react-responsive-carousel";
import "./Turnstile.scss";
import axios from "axios";
import Loader from "../Loader/Loader";

//****************** TURNSTILE COMPONENTS ******************//

class Turnstille extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turnstile: [],
      loadingData: false,
      app_id: "0",
      seria: 0,
      trigger: 0,
      trigger_state: 0,
      state: 0,
      defaultSelect: false,
      modalOpenOne: false,
      modalOpenTwo: false,
      modalOpenThree: false,
      modalOpenFour: false,
      modalOpenFive: false,
      modalOpenSix: false,
      modalOpenSeven: false,
      modalOpenEight: false,
      characteristicsOne: false,
      characteristicsTwo: false,
      characteristicsThree: false,
      characteristicsFour: false,
      characteristicsFive: false,
      characteristicsSix: false,
      characteristicsSeven: false,
      characteristicsEight: false,
      selectOne: 0,
      selectTwo: 0,
      selectThree: 0,
      selectFour: 0,
      selectFive: 0,
      selectSix: 0,
      selectSeven: 0,
      selectEight: 0,
      selectNine: 0,
      selectTen: 0,
      error: null
    };
  }

  componentDidMount() {
    let S = this;

    if (window.location.search === "") {
      axios
        .post(`${site}/turnstile`, {
          app_id: "UUID1",
          trigger: 0,
          trigger_state: 1,
          seria: 0,
          module_selectors: [
            {
              module: 0,
              state: this.state.selectOne
            },
            {
              module: 1,
              state: this.state.selectTwo
            },
            {
              module: 2,
              state: this.state.selectThree
            },
            {
              module: 3,
              state: this.state.selectFour
            },
            {
              module: 4,
              state: this.state.selectFive
            },
            {
              module: 5,
              state: this.state.selectSix
            },
            {
              module: 6,
              state: this.state.selectSeven
            },
            {
              module: 7,
              state: this.state.selectEight
            }
          ]
        })
        .then(
          data => {
            this.setState(
              {
                turnstile: data.data,
                trigger: 1,
                seria: 1, //TODO: make right
                trigger_state: 1,
                selectOne: data.data.page_view.module_selectors[0].state,
                selectTwo: data.data.page_view.module_selectors[1].state,
                selectThree: data.data.page_view.module_selectors[2].state,
                selectFour: data.data.page_view.module_selectors[3].state,
                selectFive: data.data.page_view.module_selectors[4].state,
                selectSix: data.data.page_view.module_selectors[5].state,
                selectSeven: data.data.page_view.module_selectors[6].state,
                selectEight: data.data.page_view.module_selectors[7].state,
                loadingData: true
              },
              () => {
                let idx = 1;
                for (let v of data.data.page_view.seria_buttons) {
                  if (v.state === 1) {
                    S.state.seria = idx;
                  }
                  idx++;
                }
              }
            );
          },
          error => {
            this.setState({
              loadingData: true,
              error
            });
          }
        )
        .catch(err => err);
    } else {
      axios
        .get(`${site}/turnstile${window.location.search}`)
        .then(
          data => {
            this.setState(
              {
                turnstile: data.data,
                trigger: this.state.trigger,
                ///seria: this.state.seria,
                trigger_state: 1,
                selectOne: data.data.page_view.module_selectors[0].state,
                selectTwo: data.data.page_view.module_selectors[1].state,
                selectThree: data.data.page_view.module_selectors[2].state,
                selectFour: data.data.page_view.module_selectors[3].state,
                selectFive: data.data.page_view.module_selectors[4].state,
                selectSix: data.data.page_view.module_selectors[5].state,
                selectSeven: data.data.page_view.module_selectors[6].state,
                selectEight: data.data.page_view.module_selectors[7].state,
                loadingData: true
              },
              () => {
                let idx = 1;
                for (let v of data.data.page_view.seria_buttons) {
                  if (v.state === 1) {
                    S.state.seria = idx;
                  }
                  idx++;
                }
              }
            );
          },
          error => {
            this.setState({
              loadingData: true,
              error
            });
          }
        )
        .catch(err => err);
    }
  }

  // SEND DATA TOP LEFT BLOCK

  sendDataLeftTopBlockOnServer = () => {
    //let element = document.getElementsByClassName("right-block__center-button__left-button")[0];
    //element.classList.toggle("open");
    let S = this;
    axios
      .post(`${site}/turnstile`, {
        app_id: "UUID1",
        trigger: 1,
        trigger_state: 1,
        //seria: 1,
        module_selectors: [
          {
            module: 0,
            state: this.state.selectOne
          },
          {
            module: 1,
            state: this.state.selectTwo
          },
          {
            module: 2,
            state: this.state.selectThree
          },
          {
            module: 3,
            state: this.state.selectFour
          },
          {
            module: 4,
            state: this.state.selectFive < 0 ? 0 : this.state.selectFive
          },
          {
            module: 5,
            state: this.state.selectSix < 0 ? 0 : this.state.selectSix
          },
          {
            module: 6,
            state: this.state.selectSeven < 0 ? 0 : this.state.selectSeven
          },
          {
            module: 7,
            state: this.state.selectEight < 0 ? 0 : this.state.selectEight
          }
        ]
      })
      .then(
        data => {
          this.setState(
            {
              turnstile: data.data,
              trigger: 1,
              trigger_state: 1,
              seria: 1,
              selectOne: data.data.page_view.module_selectors[0].state,
              selectTwo: data.data.page_view.module_selectors[1].state,
              selectThree: data.data.page_view.module_selectors[2].state,
              selectFour: data.data.page_view.module_selectors[3].state,
              selectFive: data.data.page_view.module_selectors[4].state,
              selectSix: data.data.page_view.module_selectors[5].state,
              selectSeven: data.data.page_view.module_selectors[6].state,
              selectEight: data.data.page_view.module_selectors[7].state,
              loadingData: true
            },
            () => {
              let idx = 1;
              for (let v of data.data.page_view.seria_buttons) {
                if (v.seria === 1) {
                  S.state.seria = idx;
                }
                idx++;
              }
            }
          );
        },
        error => {
          this.setState({
            loadingData: true,
            error
          });
        }
      )
      .catch(err => err);
  };

  // SEND DATA TOP RIGHT BLOCK

  sendDataRightTopBlockOnServer = e => {
    //let element = document.getElementsByClassName("right-block__center-button__right-button")[0];
    //element.classList.toggle("open");
    let S = this;
    axios
      .post(`${site}/turnstile`, {
        app_id: "UUID2",
        trigger: 2,
        trigger_state: 1,
        //seria: 2,
        module_selectors: [
          {
            module: 0,
            state: this.state.selectOne
          },
          {
            module: 1,
            state: this.state.selectTwo
          },
          {
            module: 2,
            state: this.state.selectThree
          },
          {
            module: 3,
            state: this.state.selectFour
          },
          {
            module: 4,
            state: this.state.selectFive < 0 ? 0 : this.state.selectFive
          },
          {
            module: 5,
            state: this.state.selectSix < 0 ? 0 : this.state.selectSix
          },
          {
            module: 6,
            state: this.state.selectSeven < 0 ? 0 : this.state.selectSeven
          },
          {
            module: 7,
            state: this.state.selectEight < 0 ? 0 : this.state.selectEight
          }
        ]
      })
      .then(
        data => {
          this.setState(
            {
              turnstile: data.data,
              trigger: 2,
              trigger_state: 1,
              seria: 2,
              selectOne: data.data.page_view.module_selectors[0].state,
              selectTwo: data.data.page_view.module_selectors[1].state,
              selectThree: data.data.page_view.module_selectors[2].state,
              selectFour: data.data.page_view.module_selectors[3].state,
              selectFive: data.data.page_view.module_selectors[4].state,
              selectSix: data.data.page_view.module_selectors[5].state,
              selectSeven: data.data.page_view.module_selectors[6].state,
              selectEight: data.data.page_view.module_selectors[7].state,
              loadingData: true
            },
            () => {
              let idx = 2;
              for (let v of data.data.page_view.seria_buttons) {
                if (v.seria === 2) {
                  S.state.seria = idx;
                }
                idx++;
              }
            }
          );
        },
        error => {
          this.setState({
            loadingData: true,
            error
          });
        }
      )
      .catch(err => err);
  };

  // SEND DATA BOTTOM RIGHT BLOCK

  sendDataLeftBottomBlockOnServer = e => {
    let S = this;
    axios
      .post(`${site}/turnstile`, {
        app_id: "UUID3",
        trigger: 3,
        trigger_state: 1,
        //seria: 3,
        module_selectors: [
          {
            module: 0,
            state: this.state.selectOne
          },
          {
            module: 1,
            state: this.state.selectTwo
          },
          {
            module: 2,
            state: this.state.selectThree
          },
          {
            module: 3,
            state: this.state.selectFour
          },
          {
            module: 4,
            state: this.state.selectFive < 0 ? 0 : this.state.selectFive
          },
          {
            module: 5,
            state: this.state.selectSix < 0 ? 0 : this.state.selectSix
          },
          {
            module: 6,
            state: this.state.selectSeven < 0 ? 0 : this.state.selectSeven
          },
          {
            module: 7,
            state: this.state.selectEight < 0 ? 0 : this.state.selectEight
          }
        ]
      })
      .then(
        data => {
          this.setState(
            {
              turnstile: data.data,
              trigger: 3,
              trigger_state: 1,
              seria: 3,
              selectOne: data.data.page_view.module_selectors[0].state,
              selectTwo: data.data.page_view.module_selectors[1].state,
              selectThree: data.data.page_view.module_selectors[2].state,
              selectFour: data.data.page_view.module_selectors[3].state,
              selectFive: data.data.page_view.module_selectors[4].state,
              selectSix: data.data.page_view.module_selectors[5].state,
              selectSeven: data.data.page_view.module_selectors[6].state,
              selectEight: data.data.page_view.module_selectors[7].state,
              loadingData: true
            },
            () => {
              let idx = 3;
              for (let v of data.data.page_view.seria_buttons) {
                if (v.seria === 3) {
                  S.state.seria = idx;
                }
                idx++;
              }
            }
          );
        },
        error => {
          this.setState({
            loadingData: true,
            error
          });
        }
      )
      .catch(err => err);
  };

  // SEND DATA BOTTOM RIGHT BLOCK

  sendDataRightBottomBlockOnServer = () => {
    let S = this;
    axios
      .post(`${site}/turnstile`, {
        app_id: "UUID4",
        trigger: 4,
        trigger_state: 1,
        //seria: 4,
        module_selectors: [
          {
            module: 0,
            state: this.state.selectOne
          },
          {
            module: 1,
            state: this.state.selectTwo
          },
          {
            module: 2,
            state: this.state.selectThree
          },
          {
            module: 3,
            state: this.state.selectFour
          },
          {
            module: 4,
            state: this.state.selectFive < 0 ? 0 : this.state.selectFive
          },
          {
            module: 5,
            state: this.state.selectSix < 0 ? 0 : this.state.selectSix
          },
          {
            module: 6,
            state: this.state.selectSeven < 0 ? 0 : this.state.selectSeven
          },
          {
            module: 7,
            state: this.state.selectEight < 0 ? 0 : this.state.selectEight
          }
        ]
      })
      .then(
        data => {
          this.setState(
            {
              turnstile: data.data,
              trigger: 4,
              trigger_state: 1,
              seria: 4,
              selectOne: data.data.page_view.module_selectors[0].state,
              selectTwo: data.data.page_view.module_selectors[1].state,
              selectThree: data.data.page_view.module_selectors[2].state,
              selectFour: data.data.page_view.module_selectors[3].state,
              selectFive: data.data.page_view.module_selectors[4].state,
              selectSix: data.data.page_view.module_selectors[5].state,
              selectSeven: data.data.page_view.module_selectors[6].state,
              selectEight: data.data.page_view.module_selectors[7].state,
              loadingData: true
            },
            () => {
              let idx = 3;
              for (let v of data.data.page_view.seria_buttons) {
                if (v.seria === 3) {
                  S.state.seria = idx;
                }
                idx++;
              }
            }
          );
        },
        error => {
          this.setState({
            loadingData: true,
            error
          });
        }
      )
      .catch(err => err);
  };
  //resetOptions = () => {
  //  this.componentDidMount();
  //}

  // RIGHT BLOCK SELECTORS

  handleClickOneSelect = () => {
    this.handleCloseModalOne();
    this.handleCloseModalTwo()
    this.handleCloseModalThree();
    this.handleCloseModalFour();
    this.handleCloseModalFive();
    this.handleCloseModalSix();
    this.handleCloseModalSeven();
    this.handleCloseModalEight();
    let Self = this;
    this.setState(
      {
        selectOne: +!this.state.selectOne
      },
      () => {
        send();
      }
    );
    function send() {
      axios
        .post(`${site}/turnstile`, {
          app_id: "UUID5",
          trigger: 5,
          trigger_state: Self.state.selectOne,
          seria: Self.state.seria,
          module_selectors: [
            {
              module: 0,
              state: Self.state.selectOne
            },
            {
              module: 1,
              state: Self.state.selectTwo
            },
            {
              module: 2,
              state: Self.state.selectThree
            },
            {
              module: 3,
              state: Self.state.selectFour
            },
            {
              module: 4,
              state: Self.state.selectFive < 0 ? 0 : Self.state.selectFive
            },
            {
              module: 5,
              state: Self.state.selectSix < 0 ? 0 : Self.state.selectSix
            },
            {
              module: 6,
              state: Self.state.selectSeven < 0 ? 0 : Self.state.selectSeven
            },
            {
              module: 7,
              state: Self.state.selectEight < 0 ? 0 : Self.state.selectEight
            }
          ]
        })
        .then(
          data => {
            Self.setState({
              turnstile: data.data,
              trigger: 5,
              selectOne: data.data.page_view.module_selectors[0].state,
              selectTwo: data.data.page_view.module_selectors[1].state,
              selectThree: data.data.page_view.module_selectors[2].state,
              selectFour: data.data.page_view.module_selectors[3].state,
              selectFive: data.data.page_view.module_selectors[4].state,
              selectSix: data.data.page_view.module_selectors[5].state,
              selectSeven: data.data.page_view.module_selectors[6].state,
              selectEight: data.data.page_view.module_selectors[7].state
            });
          },
          error => {
            console.log("error - " + error);
            Self.setState({
              loadingData: true,
              error
            });
          }
        )
        .catch(err => err);
    }
  };

  handleClickTwoSelect = () => {
    this.handleCloseModalOne();
    this.handleCloseModalTwo()
    this.handleCloseModalThree();
    this.handleCloseModalFour();
    this.handleCloseModalFive();
    this.handleCloseModalSix();
    this.handleCloseModalSeven();
    this.handleCloseModalEight();
    let Self = this;
    this.setState(
      {
        selectTwo: +!this.state.selectTwo
      },
      () => {
        send();
      }
    );
    function send() {
      axios
        .post(`${site}/turnstile`, {
          app_id: "UUID6",
          trigger: 6,
          trigger_state: Self.state.selectTwo,
          seria: Self.state.seria,
          module_selectors: [
            {
              module: 0,
              state: Self.state.selectOne
            },
            {
              module: 1,
              state: Self.state.selectTwo
            },
            {
              module: 2,
              state: Self.state.selectThree
            },
            {
              module: 3,
              state: Self.state.selectFour
            },
            {
              module: 4,
              state: Self.state.selectFive < 0 ? 0 : Self.state.selectFive
            },
            {
              module: 5,
              state: Self.state.selectSix < 0 ? 0 : Self.state.selectSix
            },
            {
              module: 6,
              state: Self.state.selectSeven < 0 ? 0 : Self.state.selectSeven
            },
            {
              module: 7,
              state: Self.state.selectEight < 0 ? 0 : Self.state.selectEight
            }
          ]
        })
        .then(
          data => {
            Self.setState({
              turnstile: data.data,
              trigger: 6,
              selectOne: data.data.page_view.module_selectors[0].state,
              selectTwo: data.data.page_view.module_selectors[1].state,
              selectThree: data.data.page_view.module_selectors[2].state,
              selectFour: data.data.page_view.module_selectors[3].state,
              selectFive: data.data.page_view.module_selectors[4].state,
              selectSix: data.data.page_view.module_selectors[5].state,
              selectSeven: data.data.page_view.module_selectors[6].state,
              selectEight: data.data.page_view.module_selectors[7].state
            });
          },
          error => {
            Self.setState({
              loadingData: true,
              error
            });
          }
        )
        .catch(err => err);
    }
  };

  handleClickThreeSelect = () => {
    this.handleCloseModalOne();
    this.handleCloseModalTwo()
    this.handleCloseModalThree();
    this.handleCloseModalFour();
    this.handleCloseModalFive();
    this.handleCloseModalSix();
    this.handleCloseModalSeven();
    this.handleCloseModalEight();
    let Self = this;
    this.setState(
      {
        selectThree: +!this.state.selectThree
      },
      () => {
        send();
      }
    );
    function send() {
      axios
        .post(`${site}/turnstile`, {
          app_id: "UUID7",
          trigger: 7,
          trigger_state: Self.state.selectThree,
          seria: Self.state.seria,
          module_selectors: [
            {
              module: 0,
              state: Self.state.selectOne
            },
            {
              module: 1,
              state: Self.state.selectTwo
            },
            {
              module: 2,
              state: Self.state.selectThree
            },
            {
              module: 3,
              state: Self.state.selectFour
            },
            {
              module: 4,
              state: Self.state.selectFive < 0 ? 0 : Self.state.selectFive
            },
            {
              module: 5,
              state: Self.state.selectSix < 0 ? 0 : Self.state.selectSix
            },
            {
              module: 6,
              state: Self.state.selectSeven < 0 ? 0 : Self.state.selectSeven
            },
            {
              module: 7,
              state: Self.state.selectEight < 0 ? 0 : Self.state.selectEight
            }
          ]
        })
        .then(
          data => {
            Self.setState({
              turnstile: data.data,
              trigger: 7,
              selectOne: data.data.page_view.module_selectors[0].state,
              selectTwo: data.data.page_view.module_selectors[1].state,
              selectThree: data.data.page_view.module_selectors[2].state,
              selectFour: data.data.page_view.module_selectors[3].state,
              selectFive: data.data.page_view.module_selectors[4].state,
              selectSix: data.data.page_view.module_selectors[5].state,
              selectSeven: data.data.page_view.module_selectors[6].state,
              selectEight: data.data.page_view.module_selectors[7].state
            });
          },
          error => {
            Self.setState({
              loadingData: true,
              error
            });
          }
        )
        .catch(err => err);
    }
  };

  handleClickFourSelect = () => {
    this.handleCloseModalOne();
    this.handleCloseModalTwo()
    this.handleCloseModalThree();
    this.handleCloseModalFour();
    this.handleCloseModalFive();
    this.handleCloseModalSix();
    this.handleCloseModalSeven();
    this.handleCloseModalEight();
    let Self = this;
    this.setState(
      {
        selectFour: +!this.state.selectFour
      },
      () => {
        send();
      }
    );
    function send() {
      axios
        .post(`${site}/turnstile`, {
          app_id: "UUID8",
          trigger: 8,
          trigger_state: Self.state.selectFour,
          seria: Self.state.seria,
          module_selectors: [
            {
              module: 0,
              state: Self.state.selectOne
            },
            {
              module: 1,
              state: Self.state.selectTwo
            },
            {
              module: 2,
              state: Self.state.selectThree
            },
            {
              module: 3,
              state: Self.state.selectFour
            },
            {
              module: 4,
              state: Self.state.selectFive < 0 ? 0 : Self.state.selectFive
            },
            {
              module: 5,
              state: Self.state.selectSix < 0 ? 0 : Self.state.selectSix
            },
            {
              module: 6,
              state: Self.state.selectSeven < 0 ? 0 : Self.state.selectSeven
            },
            {
              module: 7,
              state: Self.state.selectEight < 0 ? 0 : Self.state.selectEight
            }
          ]
        })
        .then(
          data => {
            Self.setState({
              turnstile: data.data,
              trigger: 8,
              selectOne: data.data.page_view.module_selectors[0].state,
              selectTwo: data.data.page_view.module_selectors[1].state,
              selectThree: data.data.page_view.module_selectors[2].state,
              selectFour: data.data.page_view.module_selectors[3].state,
              selectFive: data.data.page_view.module_selectors[4].state,
              selectSix: data.data.page_view.module_selectors[5].state,
              selectSeven: data.data.page_view.module_selectors[6].state,
              selectEight: data.data.page_view.module_selectors[7].state
            });
          },
          error => {
            Self.setState({
              loadingData: true,
              error
            });
          }
        )
        .catch(err => err);
    }
  };
  handleClickFiveSelect = () => {
    this.handleCloseModalOne();
    this.handleCloseModalTwo()
    this.handleCloseModalThree();
    this.handleCloseModalFour();
    this.handleCloseModalFive();
    this.handleCloseModalSix();
    this.handleCloseModalSeven();
    this.handleCloseModalEight();
    let Self = this;
    this.setState(
      {
        selectFive: +!this.state.selectFive
      },
      () => {
        send();
      }
    );
    function send() {
      axios
        .post(`${site}/turnstile`, {
          app_id: "UUID5",
          trigger: 9,
          trigger_state: Self.state.selectFive,
          seria: Self.state.seria,
          module_selectors: [
            {
              module: 0,
              state: Self.state.selectOne
            },
            {
              module: 1,
              state: Self.state.selectTwo
            },
            {
              module: 2,
              state: Self.state.selectThree
            },
            {
              module: 3,
              state: Self.state.selectFour
            },
            {
              module: 4,
              state: Self.state.selectFive < 0 ? 0 : Self.state.selectFive
            },
            {
              module: 5,
              state: Self.state.selectSix < 0 ? 0 : Self.state.selectSix
            },
            {
              module: 6,
              state: Self.state.selectSeven < 0 ? 0 : Self.state.selectSeven
            },
            {
              module: 7,
              state: Self.state.selectEight < 0 ? 0 : Self.state.selectEight
            }
          ]
        })
        .then(
          data => {
            Self.setState({
              turnstile: data.data,
              trigger: 9,
              selectOne: data.data.page_view.module_selectors[0].state,
              selectTwo: data.data.page_view.module_selectors[1].state,
              selectThree: data.data.page_view.module_selectors[2].state,
              selectFour: data.data.page_view.module_selectors[3].state,
              selectFive: data.data.page_view.module_selectors[4].state,
              selectSix: data.data.page_view.module_selectors[5].state,
              selectSeven: data.data.page_view.module_selectors[6].state,
              selectEight: data.data.page_view.module_selectors[7].state
            });
          },
          error => {
            Self.setState({
              loadingData: true,
              error
            });
          }
        )
        .catch(err => err);
    }
  };
  handleClickSixSelect = () => {
    this.handleCloseModalOne();
    this.handleCloseModalTwo()
    this.handleCloseModalThree();
    this.handleCloseModalFour();
    this.handleCloseModalFive();
    this.handleCloseModalSix();
    this.handleCloseModalSeven();
    this.handleCloseModalEight();
    let Self = this;
    this.setState(
      {
        selectSix: +!this.state.selectSix
      },
      () => {
        send();
      }
    );
    function send() {
      axios
        .post(`${site}/turnstile`, {
          app_id: "UUID5",
          trigger: 10,
          trigger_state: Self.state.selectSix,
          seria: Self.state.seria,
          module_selectors: [
            {
              module: 0,
              state: Self.state.selectOne
            },
            {
              module: 1,
              state: Self.state.selectTwo
            },
            {
              module: 2,
              state: Self.state.selectThree
            },
            {
              module: 3,
              state: Self.state.selectFour
            },
            {
              module: 4,
              state: Self.state.selectFive < 0 ? 0 : Self.state.selectFive
            },
            {
              module: 5,
              state: Self.state.selectSix < 0 ? 0 : Self.state.selectSix
            },
            {
              module: 6,
              state: Self.state.selectSeven < 0 ? 0 : Self.state.selectSeven
            },
            {
              module: 7,
              state: Self.state.selectEight < 0 ? 0 : Self.state.selectEight
            }
          ]
        })
        .then(
          data => {
            Self.setState({
              turnstile: data.data,
              trigger: 10,
              selectOne: data.data.page_view.module_selectors[0].state,
              selectTwo: data.data.page_view.module_selectors[1].state,
              selectThree: data.data.page_view.module_selectors[2].state,
              selectFour: data.data.page_view.module_selectors[3].state,
              selectFive: data.data.page_view.module_selectors[4].state,
              selectSix: data.data.page_view.module_selectors[5].state,
              selectSeven: data.data.page_view.module_selectors[6].state,
              selectEight: data.data.page_view.module_selectors[7].state
            });
          },
          error => {
            Self.setState({
              loadingData: true,
              error
            });
          }
        )
        .catch(err => err);
    }
  };
  handleClickSevenSelect = () => {
    this.handleCloseModalOne();
    this.handleCloseModalTwo()
    this.handleCloseModalThree();
    this.handleCloseModalFour();
    this.handleCloseModalFive();
    this.handleCloseModalSix();
    this.handleCloseModalSeven();
    this.handleCloseModalEight();
    let Self = this;
    this.setState(
      {
        selectSeven: +!this.state.selectSeven
      },
      () => {
        send();
      }
    );
    function send() {
      axios
        .post(`${site}/turnstile`, {
          app_id: "UUID5",
          trigger: 11,
          trigger_state: Self.state.selectSeven,
          seria: Self.state.seria,
          module_selectors: [
            {
              module: 0,
              state: Self.state.selectOne
            },
            {
              module: 1,
              state: Self.state.selectTwo
            },
            {
              module: 2,
              state: Self.state.selectThree
            },
            {
              module: 3,
              state: Self.state.selectFour
            },
            {
              module: 4,
              state: Self.state.selectFive < 0 ? 0 : Self.state.selectFive
            },
            {
              module: 5,
              state: Self.state.selectSix < 0 ? 0 : Self.state.selectSix
            },
            {
              module: 6,
              state: Self.state.selectSeven < 0 ? 0 : Self.state.selectSeven
            },
            {
              module: 7,
              state: Self.state.selectEight < 0 ? 0 : Self.state.selectEight
            }
          ]
        })
        .then(
          data => {
            Self.setState({
              turnstile: data.data,
              trigger: 11,
              selectOne: data.data.page_view.module_selectors[0].state,
              selectTwo: data.data.page_view.module_selectors[1].state,
              selectThree: data.data.page_view.module_selectors[2].state,
              selectFour: data.data.page_view.module_selectors[3].state,
              selectFive: data.data.page_view.module_selectors[4].state,
              selectSix: data.data.page_view.module_selectors[5].state,
              selectSeven: data.data.page_view.module_selectors[6].state,
              selectEight: data.data.page_view.module_selectors[7].state
            });
          },
          error => {
            Self.setState({
              loadingData: true,
              error
            });
          }
        )
        .catch(err => err);
    }
  };
  handleClickEightSelect = () => {
    this.handleCloseModalOne();
    this.handleCloseModalTwo()
    this.handleCloseModalThree();
    this.handleCloseModalFour();
    this.handleCloseModalFive();
    this.handleCloseModalSix();
    this.handleCloseModalSeven();
    this.handleCloseModalEight();
    let Self = this;
    this.setState(
      {
        selectEight: +!this.state.selectEight
      },
      () => {
        send();
      }
    );
    function send() {
      axios
        .post(`${site}/turnstile`, {
          app_id: "UUID5",
          trigger: 12,
          trigger_state: Self.state.selectEight,
          seria: Self.state.seria,
          module_selectors: [
            {
              module: 0,
              state: Self.state.selectOne
            },
            {
              module: 1,
              state: Self.state.selectTwo
            },
            {
              module: 2,
              state: Self.state.selectThree
            },
            {
              module: 3,
              state: Self.state.selectFour
            },
            {
              module: 4,
              state: Self.state.selectFive < 0 ? 0 : Self.state.selectFive
            },
            {
              module: 5,
              state: Self.state.selectSix < 0 ? 0 : Self.state.selectSix
            },
            {
              module: 6,
              state: Self.state.selectSeven < 0 ? 0 : Self.state.selectSeven
            },
            {
              module: 7,
              state: Self.state.selectEight < 0 ? 0 : Self.state.selectEight
            }
          ]
        })
        .then(
          data => {
            Self.setState({
              turnstile: data.data,
              trigger: 12,
              selectOne: data.data.page_view.module_selectors[0].state,
              selectTwo: data.data.page_view.module_selectors[1].state,
              selectThree: data.data.page_view.module_selectors[2].state,
              selectFour: data.data.page_view.module_selectors[3].state,
              selectFive: data.data.page_view.module_selectors[4].state,
              selectSix: data.data.page_view.module_selectors[5].state,
              selectSeven: data.data.page_view.module_selectors[6].state,
              selectEight: data.data.page_view.module_selectors[7].state
            });
          },
          error => {
            Self.setState({
              loadingData: true,
              error
            });
          }
        )
        .catch(err => err);
    }
  };
  handleClickNineSelect = () => {
    this.handleCloseModalOne();
    this.handleCloseModalTwo()
    this.handleCloseModalThree();
    this.handleCloseModalFour();
    this.handleCloseModalFive();
    this.handleCloseModalSix();
    this.handleCloseModalSeven();
    this.handleCloseModalEight();
    let Self = this;
    this.setState(
      {
        selectNine: +!this.state.selectNine
      },
      () => {
        send();
      }
    );
    function send() {
      axios
        .post(`${site}/turnstile`, {
          app_id: "UUID5",
          trigger: 13,
          trigger_state: Self.state.selectNine,
          seria: Self.state.seria,
          module_selectors: [
            {
              module: 0,
              state: Self.state.selectOne
            },
            {
              module: 1,
              state: Self.state.selectTwo
            },
            {
              module: 2,
              state: Self.state.selectThree
            },
            {
              module: 3,
              state: Self.state.selectFour
            },
            {
              module: 4,
              state: Self.state.selectFive < 0 ? 0 : Self.state.selectFive
            },
            {
              module: 5,
              state: Self.state.selectSix < 0 ? 0 : Self.state.selectSix
            },
            {
              module: 6,
              state: Self.state.selectSeven < 0 ? 0 : Self.state.selectSeven
            },
            {
              module: 7,
              state: Self.state.selectEight < 0 ? 0 : Self.state.selectEight
            },
            {
              module: 8,
              state: Self.state.selectNine < 0 ? 0 : Self.state.selectNine
            },
            {
              module: 9,
              state: Self.state.selectTen < 0 ? 0 : Self.state.selectTen
            }
          ]
        })
        .then(
          data => {
            Self.setState({
              turnstile: data.data,
              trigger: 13,
              selectOne: data.data.page_view.module_selectors[0].state,
              selectTwo: data.data.page_view.module_selectors[1].state,
              selectThree: data.data.page_view.module_selectors[2].state,
              selectFour: data.data.page_view.module_selectors[3].state,
              selectFive: data.data.page_view.module_selectors[4].state,
              selectSix: data.data.page_view.module_selectors[5].state,
              selectSeven: data.data.page_view.module_selectors[6].state,
              selectEight: data.data.page_view.module_selectors[7].state,
              selectNine: data.data.page_view.module_selectors[8].state,
              selectTen: data.data.page_view.module_selectors[9].state
            });
          },
          error => {
            Self.setState({
              loadingData: true,
              error
            });
          }
        )
        .catch(err => err);
    }
  };
  handleClickTenSelect = () => {
    this.handleCloseModalOne();
    this.handleCloseModalTwo()
    this.handleCloseModalThree();
    this.handleCloseModalFour();
    this.handleCloseModalFive();
    this.handleCloseModalSix();
    this.handleCloseModalSeven();
    this.handleCloseModalEight();
    let Self = this;
    this.setState(
      {
        selectTen: +!this.state.selectTen
      },
      () => {
        send();
      }
    );
    function send() {
      axios
        .post(`${site}/turnstile`, {
          app_id: "UUID5",
          trigger: 14,
          trigger_state: Self.state.selectTen,
          seria: Self.state.seria,
          module_selectors: [
            {
              module: 0,
              state: Self.state.selectOne
            },
            {
              module: 1,
              state: Self.state.selectTwo
            },
            {
              module: 2,
              state: Self.state.selectThree
            },
            {
              module: 3,
              state: Self.state.selectFour
            },
            {
              module: 4,
              state: Self.state.selectFive < 0 ? 0 : Self.state.selectFive
            },
            {
              module: 5,
              state: Self.state.selectSix < 0 ? 0 : Self.state.selectSix
            },
            {
              module: 6,
              state: Self.state.selectSeven < 0 ? 0 : Self.state.selectSeven
            },
            {
              module: 7,
              state: Self.state.selectEight < 0 ? 0 : Self.state.selectEight
            },
            {
              module: 8,
              state: Self.state.selectNine < 0 ? 0 : Self.state.selectNine
            },
            {
              module: 9,
              state: Self.state.selectTen < 0 ? 0 : Self.state.selectTen
            }
          ]
        })
        .then(
          data => {
            Self.setState({
              turnstile: data.data,
              trigger: 14,
              selectOne: data.data.page_view.module_selectors[0].state,
              selectTwo: data.data.page_view.module_selectors[1].state,
              selectThree: data.data.page_view.module_selectors[2].state,
              selectFour: data.data.page_view.module_selectors[3].state,
              selectFive: data.data.page_view.module_selectors[4].state,
              selectSix: data.data.page_view.module_selectors[5].state,
              selectSeven: data.data.page_view.module_selectors[6].state,
              selectEight: data.data.page_view.module_selectors[7].state,
              selectNine: data.data.page_view.module_selectors[8].state,
              selectTen: data.data.page_view.module_selectors[9].state
            });
          },
          error => {
            Self.setState({
              loadingData: true,
              error
            });
          }
        )
        .catch(err => err);
    }
  };

  clearOptions = () => {
    localStorage.clear()
    let S = this;
    if (window.location.search === "") {
      axios
        .post(`${site}/turnstile`, {
          //app_id: "UUID1",
          //trigger: 0,
          //trigger_state: 1,
          //seria: 0,
          module_selectors: [
            {
              module: 0,
              state: 0
            },
            {
              module: 1,
              state: 0
            },
            {
              module: 2,
              state: 0
            },
            {
              module: 3,
              state: 0
            },
            {
              module: 4,
              state: 0
            },
            {
              module: 5,
              state: 0
            },
            {
              module: 6,
              state: 0
            },
            {
              module: 7,
              state: 0
            }
          ]
        })
        .then(
          data => {
            this.setState(
              {
                turnstile: data.data,
                trigger: 2,
                //seria: 1, //TODO: make right
                //trigger_state: 1,
                selectOne: data.data.page_view.module_selectors[0].state,
                selectTwo: data.data.page_view.module_selectors[1].state,
                selectThree: data.data.page_view.module_selectors[2].state,
                selectFour: data.data.page_view.module_selectors[3].state,
                selectFive: data.data.page_view.module_selectors[4].state,
                selectSix: data.data.page_view.module_selectors[5].state,
                selectSeven: data.data.page_view.module_selectors[6].state,
                selectEight: data.data.page_view.module_selectors[7].state,
                loadingData: true
              },
              () => {
                let idx = 1;
                for (let v of data.data.page_view.seria_buttons) {
                  if (v.state === 1) {
                    S.state.seria = idx;
                  }
                  idx++;
                }
              }
            );
          },
          error => {
            this.setState({
              loadingData: true,
              error
            });
          }
        )
        .catch(err => err);
    } else {
      axios
        .get(`${site}/turnstile${window.location.search}`)
        .then(
          data => {
            this.setState(
              {
                turnstile: data.data,
                trigger: 2,
                //trigger_state: 1,
                selectOne: data.data.page_view.module_selectors[0].state,
                selectTwo: data.data.page_view.module_selectors[1].state,
                selectThree: data.data.page_view.module_selectors[2].state,
                selectFour: data.data.page_view.module_selectors[3].state,
                selectFive: data.data.page_view.module_selectors[4].state,
                selectSix: data.data.page_view.module_selectors[5].state,
                selectSeven: data.data.page_view.module_selectors[6].state,
                selectEight: data.data.page_view.module_selectors[7].state,
                loadingData: true
              },
              () => {
                let idx = 1;
                for (let v of data.data.page_view.seria_buttons) {
                  if (v.state === 1) {
                    S.state.seria = idx;
                  }
                  idx++;
                }
              }
            );
          },
          error => {
            this.setState({
              loadingData: true,
              error
            });
          }
        )
        .catch(err => err);
    }
  };

  handleOpenModalOne = () => {
    this.setState({ modalOpenOne: true });
  };
  handleOpenModalTwo = () => {
    this.setState({ modalOpenTwo: true });
  };
  handleOpenModalThree = () => {
    this.setState({ modalOpenThree: true });
  };
  handleOpenModalFour = () => {
    this.setState({ modalOpenFour: true });
  };
  handleOpenModalFive = () => {
    this.setState({ modalOpenFive: true });
  };
  handleOpenModalSix = () => {
    this.setState({ modalOpenSix: true });
  };
  handleOpenModalSeven = () => {
    this.setState({ modalOpenSeven: true });
  };
  handleOpenModalEight = () => {
    this.setState({ modalOpenEight: true });
  };

  handleCloseModalOne = () => {
    setTimeout(() => {
      this.setState({ modalOpenOne: false });
    }, 100);
  };
  handleCloseModalTwo = () => {
    setTimeout(() => {
      this.setState({ modalOpenTwo: false });
    }, 100);
  };
  handleCloseModalThree = () => {
    setTimeout(() => {
      this.setState({ modalOpenThree: false });
    }, 100);
  };
  handleCloseModalFour = () => {
    setTimeout(() => {
      this.setState({ modalOpenFour: false });
    }, 100);
  };
  handleCloseModalFive = () => {
    setTimeout(() => {
      this.setState({ modalOpenFive: false });
    }, 100);
  };
  handleCloseModalSix = () => {
    setTimeout(() => {
      this.setState({ modalOpenSix: false });
    }, 100);
  };
  handleCloseModalSeven = () => {
    setTimeout(() => {
      this.setState({ modalOpenSeven: false });
    }, 100);
  };
  handleCloseModalEight = () => {
    setTimeout(() => {
      this.setState({ modalOpenEight: false });
    }, 100);
  };

  toggleCharacteristicsOne = event => {
    event.preventDefault();
    this.setState({ characteristicsOne: !this.state.characteristicsOne });
  };
  toggleCharacteristicsTwo = event => {
    event.preventDefault();
    this.setState({ characteristicsTwo: !this.state.characteristicsTwo });
  };
  toggleCharacteristicsThree = event => {
    event.preventDefault();
    this.setState({ characteristicsThree: !this.state.characteristicsThree });
  };
  toggleCharacteristicsFour = event => {
    event.preventDefault();
    this.setState({ characteristicsFour: !this.state.characteristicsFour });
  };
  toggleCharacteristicsFive = event => {
    event.preventDefault();
    this.setState({ characteristicsFive: !this.state.characteristicsFive });
  };
  toggleCharacteristicsSix = event => {
    event.preventDefault();
    this.setState({ characteristicsSix: !this.state.characteristicsSix });
  };
  toggleCharacteristicsSeven = event => {
    event.preventDefault();
    this.setState({ characteristicsSeven: !this.state.characteristicsSeven });
  };
  toggleCharacteristicsEight = event => {
    event.preventDefault();
    this.setState({ characteristicsEight: !this.state.characteristicsEight });
  };
  render() {
    const { 
      turnstile, 
      loadingData, 
      characteristicsOne, 
      characteristicsTwo, 
      characteristicsThree, 
      characteristicsFour, 
      characteristicsFive,
      characteristicsSix, 
      characteristicsSeven, 
      characteristicsEight, 
      error
    } = this.state;
    let data = JSON.stringify(turnstile.page_view)
    localStorage.setItem('data', data)
    console.log(turnstile.page_view);
    //console.log(localStorage);
    //console.log(this.state.selectOne)
    //console.log(this.state.selectTwo)
    //console.log(this.state.selectThree)
    //console.log(this.state.selectFour)
    //console.log(this.state.selectFive)
    //console.log(this.state.selectSix)
    //console.log(this.state.selectSeven)
    //console.log(this.state.selectEight)
    //console.log("Trigger " + this.state.trigger)
    //console.log(this.state)

    let photoOne = turnstile.page_view
      ? turnstile.page_view.carousel_images[0].image_source
      : null;
    photoOne = site + photoOne;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!loadingData) {
      return <Loader />;
    } else if (window.location.search === "?model=4" || turnstile === null) {
      return (
        <>
          <h4>Здесь и дальше Вы не увидите того, что Вам нужно.</h4>
          <Loader />
        </>
      );
    } else {
      return (
        <div className="wrapper-main">
          <div className="wrapper-main-content">
            {/****************** LEFT BLOCK ******************/}

            <div className="wrapper-center-block__turnstille">
              <div className="center-block__top">
                <div className="center-block__top__wrapper-photo">
                  <img className="center-block__top" src={photoOne} alt="" />
                </div>
              </div>
              <div className="center-block__bottom">
                <div className="center-block__list">
                  <ul className="list">
                    <div className="list-description">Состав модели:</div>
                    {turnstile.page_view.model_module_list.map((index, key) => (
                      <li key={index.index}>{index.caption}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/****************** RIGHT BLOCK ******************/}

            <div className="wrapper-right-block__turnstille">
              <div className="right-block__top">
                <div className="right-block__top-description">
                  <div className="description-model">Модель</div>
                  <div className="description-seria">Серия</div>
                  <div className="description-price">
                    Итоговая стоимость{/*{turnstile.page_view.model_price}*/}
                  </div>
                </div>
                <div className="right-block__center-description">
                  <div className="description-model">
                    {turnstile.page_view.model_name}
                  </div>
                  <div className="description-choice">
                    {turnstile.page_view.seria_buttons
                      .slice(0, 1)
                      .map((index, key) => {
                        if (index.state === 1) {
                          return (
                            <div
                              key={index.index}
                              onClick={this.sendDataLeftTopBlockOnServer}
                              className="description-choice-str open"
                            >
                              STR
                            </div>
                          );
                        } else {
                          return (
                            <div
                              key={index.index}
                              onClick={this.sendDataLeftTopBlockOnServer}
                              className="description-choice-str open"
                            >
                              STR
                            </div>
                          );
                        }
                      })}
                    {turnstile.page_view.seria_buttons
                      .slice(2, 3)
                      .map((index, key) => {
                        if (index.state === 1) {
                          return (
                            <div
                              key={index.index}
                              className="description-choice-stx open"
                            >
                              STX
                            </div>
                          );
                        } else {
                          return (
                            <div
                              key={index.index}
                              className="description-choice-stx"
                            >
                              STX
                            </div>
                          );
                        }
                      })}
                  </div>
                  <div className="description-price">
                    {turnstile.page_view.model_price}
                  </div>
                </div>
                <div className="right-block__bottom-description">
                  <a
                    className="description-button"
                    href={turnstile.page_view.download_broshure_button_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ПОДРОБНЕЕ О МОДЕЛИ
                    <div className="right-block__select-description__arrow"></div>
                  </a>
                  <div className="description-model">
                    БАЗОВАЯ МОДЕЛЬ ({turnstile.page_view ? turnstile.page_view.model_module_list[0].price : null})
                    {/*{turnstile.page_view.model_name}*/}
                  </div>
                </div>
                <div className="right-block__bottom-description__options">
                  <div className="right-block__bottom-description__options__choice-optoins">
                    +{turnstile.page_view.model_module_list.length - 1} ОПЦИИ
                  </div>
                  <div
                    onClick={this.clearOptions}
                    className="right-block__bottom-description__options__clear-options"
                  >
                    СБРОСИТЬ
                  </div>
                </div>
              </div>
              <div className="right-block__center">
                <div className="right-block__center-description">
                  Исполнение
                </div>
                <div className="right-block__center-button">
                  {turnstile.page_view.seria_buttons
                    .slice(0, 1)
                    .map((index, key) => {
                      if (index.state === 1) {
                        return (
                          <div
                            key={index.index}
                            onClick={this.sendDataLeftTopBlockOnServer}
                            className="right-block__center-button__left-button open"
                          >
                            Компактный
                          </div>
                        );
                      } else {
                        return (
                          <div
                            key={index.index}
                            onClick={this.sendDataLeftTopBlockOnServer}
                            className="right-block__center-button__left-button"
                          >
                            Компактный
                          </div>
                        );
                      }
                    })}
                  {turnstile.page_view.seria_buttons
                    .slice(1, 2)
                    .map((index, key) => {
                      if (index.state === 1) {
                        return (
                          <div
                            key={index.index}
                            onClick={this.sendDataRightTopBlockOnServer}
                            className="right-block__center-button__right-button open"
                          >
                            Тумбовый
                          </div>
                        );
                      } else {
                        return (
                          <div
                            key={index.index}
                            onClick={this.sendDataRightTopBlockOnServer}
                            className="right-block__center-button__right-button"
                          >
                            Тумбовый
                          </div>
                        );
                      }
                    })}
                </div>
              </div>
              <div className="right-block__bottom">
                {/** =================== BLOCK 1 =================== */}

                {turnstile.page_view.module_selectors
                  .slice(0, 1)
                  .map((index, key) => {
                    if (index.state === -1) {
                      return (
                        <div className="wrapper-select none">
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            <div className="right-block__select-description__photo-one"></div>
                            <div>
                              Универсальный сетевой контроллер расширения
                              EP-2000
                            </div>
                            {/*{index.caption}*/}
                            <div className="right-block__select-description__more-info">
                              
                              {/** ==================================== MODAL WINDOW ===================================== */}
                              
                              {/** ==================================== MODAL WINDOW ===================================== */}
                            </div>
                            {/*{index.caption}*/}
                          </div>
                          <div className="right-block__select-description__plus-price">
                            {turnstile.page_view.model_module_list[1] !== undefined && turnstile.page_view.model_module_list[1].name === 'ep2000' && turnstile.page_view.model_module_list[1].price}
                          </div>
                          <div className="onoffswitch">
                            <input
                              type="checkbox"
                              name="onoffswitch"
                              className="onoffswitch-checkbox"
                              id="header-checkbox"
                              onClick={this.handleClickOneSelect}
                              checked={this.state.defaultSelect}
                            />
                            <label
                              className="onoffswitch-label"
                              htmlFor="header-checkbox"
                            >
                              <span className="onoffswitch-inner"></span>
                              <span className="onoffswitch-switch"></span>
                            </label>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div key={index.index} className="wrapper-select">
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            <div className="right-block__select-description__photo-one"></div>
                            <div>
                              Универсальный сетевой контроллер расширения
                              EP-2000
                            </div>
                            {/*{index.caption}*/}
                            <div className="right-block__select-description__more-info">
                              <div onClick={this.handleOpenModalOne}>
                                подробнее
                              </div>
                              <div className="right-block__select-description__more-info__arrow"></div>
                            </div>
                              {/** ==================================== MODAL WINDOW ===================================== */}
                              {this.state.modalOpenOne ? (
                                <div className="wrapper-popup">
                                  <div className="wrapper-popup__left-block">
                                    <div className="wrapper-popup__block-photo">
                                      <div></div>
                                    </div>
                                  </div>
                                  <div className="wrapper-popup__right-block">
                                    <div className="wrapper-popup__right-block-header">
                                      <div className="wrapper-popup__right-block-header__photo"></div>
                                      <div className="wrapper-popup__right-block-header__characteristics">
                                        Универсальный сетевой контроллер
                                        расширения<br/>EP-2000
                                        {characteristicsOne === false ? (
                                          <span
                                            onClick={this.toggleCharacteristicsOne}
                                          >
                                            ХАРАКТЕРИСТИКИ
                                          </span>
                                        ) : (
                                          <span
                                            onClick={this.toggleCharacteristicsOne}
                                          >
                                            ПОКАЗАТЬ ОПИСАНИЕ
                                          </span>
                                        )}
                                      </div>
                                      <div
                                        onClick={this.handleCloseModalOne}
                                        className="wrapper-popup__right-block-header__close-modal"
                                      ></div>
                                    </div>
                                    <div className="wrapper-popup__right-block-main">
                                      {characteristicsOne === false ? (
                                        <div className="wrapper-popup__right-block-main__description">
                                          <p>
                                            Модуль расширения “EP-2000”
                                            предназначен для расширения
                                            функционала турникетов CARDDEX. Данный
                                            модуль оснащен интерфейсами: Ethernet
                                            RS-485 UART I2C Также оснащен
                                            дополнительным выходом для подключения
                                            различных исполнительных устройств.
                                            <p>Встроенное ПО СКУД “CARDDEX IMS/AR” с
                                            функцией “Учет рабочего времени”
                                            избавляет от необходимости
                                            использовать внешние серверы
                                            программного обеспечения.
                                            </p>
                                            Низкое
                                            энергопотребление допускает
                                            подключение PoE через интерфейс связи
                                            Ethernet и питания турникета по одному
                                            стандартному кабелю «витая пара»
                                            UTP-5, а также автономную работу от
                                            внешнего аккумулятора 10A/ч до 24
                                            часов.
                                          </p>
                                          <p> 
                                            Широкий набор встроенных
                                            каналов подключения позволяет:
                                            одновременную работу с внешними
                                            считывателями бесконтактных карт,
                                            биометрическими сканерами отпечатков
                                            пальцев или универсальным 2D сканером
                                            QR —кодов; подключение до 32 дверных
                                            контроллеров CARDDEX серии «NET-01»
                                            по «общей шине» RS-485; подключение
                                            секции «Антипаника» с электромагнитным
                                            замком.
                                            </p>
                                            <p>
                                             Энергонезависимая память
                                            контроллера позволяет хранить: 10000
                                            бесконтактных ключей; 1500 отпечатков
                                            пальцев; 10000 QR-кодов; до 2 000 000
                                            событий; до 500 000 событий с
                                            фотофиксацией.
                                          </p>
                                        </div>
                                      ) : (
                                        <div className="wrapper-popup__right-block-main__characteristics">
                                          <div className="wrapper-popup__right-block-main__characteristics__heading">
                                            Технические характеристики:
                                          </div>
                                          <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                            <div>
                                              Напряжение питания (постоянный
                                              ток):
                                            </div>
                                            <div>12 V</div>
                                          </div>
                                          <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                            <div>
                                              Максимальный потребляемый ток:
                                            </div>
                                            <div>2,6 A</div>
                                          </div>
                                          <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                            <div>
                                              Локальная память ключей и событий:
                                            </div>
                                            <div>
                                              50000 ключей, 250000 событий
                                            </div>
                                          </div>
                                          <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                            <div>
                                              Локальная память отпечатков
                                              пальцев:
                                            </div>
                                            <div>500</div>
                                          </div>
                                          <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                            <div>
                                              Локальная память штрих-кодов:
                                            </div>
                                            <div>5000</div>
                                          </div>
                                          <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                            <div>
                                              Интерфейсы связи с внешними
                                              устройствами:
                                            </div>
                                            <div>Ethernet, RS-485, RS-232</div>
                                          </div>
                                          <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                            <div>Кол-во релейных выходов:</div>
                                            <div>1</div>
                                          </div>
                                          <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                            <div>Габаритные размеры:</div>
                                            <div>120 х 100 х 35 мм</div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                    <div className="wrapper-popup__right-block-footer">
                                      <div className="wrapper-popup__right-block__footer__price">
                                        <span>Стоимость опции</span>
                                        12 240,00
                                      </div>
                                      <div
                                        onClick={this.handleClickOneSelect}
                                        className="wrapper-popup__right-block__footer__button"
                                      >
                                        Добавить
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : null}
                              {/** ==================================== MODAL WINDOW ===================================== */}
                            
                            {/*{index.caption}*/}
                          </div>
                          <div className="right-block__select-description__plus-price">
                            {turnstile.page_view.model_module_list[1] !== undefined && turnstile.page_view.model_module_list[1].name === 'ep2000' && '+' + turnstile.page_view.model_module_list[1].price}
                          </div>
                          <div className="onoffswitch">
                            <input
                              type="checkbox"
                              name="onoffswitch"
                              className="onoffswitch-checkbox"
                              id="header-checkbox"
                              onChange={this.handleClickOneSelect}
                              checked={this.state.selectOne}
                            />
                            <label
                              className="onoffswitch-label"
                              htmlFor="header-checkbox"
                            >
                              <span className="onoffswitch-inner"></span>
                              <span className="onoffswitch-switch"></span>
                            </label>
                          </div>
                        </div>
                      );
                    }
                  })}

                {/** =================== BLOCK 2 =================== */}

                {turnstile.page_view.module_selectors
                  .slice(1, 2)
                  .map((index, key) => {
                    if (index.state === -1) {
                      return (
                        <div className="wrapper-select none">
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            <div className="right-block__select-description__photo-two"></div>
                            <div>RFID идентификаторы EMMarin 125 kHZ</div>
                            {/*{index.caption}*/}
                            <div className="right-block__select-description__more-info">
                        
                              {/** ==================================== MODAL WINDOW ===================================== */}
                              
                              {/** ==================================== MODAL WINDOW ===================================== */}
                            </div>
                            {/*{index.caption}*/}
                          </div>
                          <div className="right-block__select-description__plus-price">
                            {turnstile.page_view.model_module_list[1] !== undefined && turnstile.page_view.model_module_list[1].name === 'emarine' && '+' +  turnstile.page_view.model_module_list[1].price && '+ 2340.00'}
                            {turnstile.page_view.model_module_list[2] !== undefined && turnstile.page_view.model_module_list[2].name === 'emarine' && '+' +  turnstile.page_view.model_module_list[2].price && '+ 2340.00'}
                          </div>
                          <div className="onoffswitch2">
                            <input
                              type="checkbox"
                              name="onoffswitch"
                              className="onoffswitch2-checkbox"
                              id="header2-checkbox"
                              onClick={this.handleClickTwoSelect}
                              checked={this.state.defaultSelect}
                            />
                            <label
                              className="onoffswitch2-label"
                              htmlFor="header2-checkbox"
                            >
                              <span className="onoffswitch2-inner"></span>
                              <span className="onoffswitch2-switch"></span>
                            </label>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div key={index.index} className="wrapper-select">
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            <div className="right-block__select-description__photo-two"></div>
                            <div>RFID идентификаторы EMMarin 125 kHZ</div>
                            {/*{index.caption}*/}
                            <div className="right-block__select-description__more-info">
                              <div onClick={this.handleOpenModalTwo}>
                                подробнее
                              </div>
                              <div className="right-block__select-description__more-info__arrow"></div>
                            </div>
                              {/** ==================================== MODAL WINDOW ===================================== */}
                              {this.state.modalOpenTwo ? (
                                <div className="wrapper-popup-emmarin">
                                  <div className="wrapper-popup__left-block">
                                    <div className="wrapper-popup__block-photo">
                                      <div></div>
                                    </div>
                                  </div>
                                  <div className="wrapper-popup__right-block">
                                    <div className="wrapper-popup__right-block-header">
                                      <div className="wrapper-popup__right-block-header__photo"></div>
                                      <div className="wrapper-popup__right-block-header__characteristics">
                                        RFID идентификаторы EMMarin 125kHZ
                                        {characteristicsTwo === false ? (
                                          <span
                                            onClick={this.toggleCharacteristicsTwo}
                                          >
                                            ХАРАКТЕРИСТИКИ
                                          </span>
                                        ) : (
                                          <span
                                            onClick={this.toggleCharacteristicsTwo}
                                          >
                                            ПОКАЗАТЬ ОПИСАНИЕ
                                          </span>
                                        )}
                                      </div>
                                      <div
                                        onClick={this.handleCloseModalTwo}
                                        className="wrapper-popup__right-block-header__close-modal"
                                      ></div>
                                    </div>
                                    <div className="wrapper-popup__right-block-main">
                                      {characteristicsTwo === false ? (
                                        <div className="wrapper-popup__right-block-main__description">
                                          Встраиваемые модули RFID считывателей
                                          «RE-02» и «RM-02» предназначены для
                                          обеспечения доступа авторизованным
                                          пользователям, посредством
                                          бесконтактных идентификаторов
                                          стандарта EMMarine/MiFare.
                                        </div>
                                      ) : (
                                        <div className="wrapper-popup__right-block-main__characteristics">
                                          <div className="wrapper-popup__right-block-main__characteristics__heading">
                                            Считыватель EMMarine:
                                          </div>
                                          <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                            <div>Стандарт считывания:</div>
                                            <div>EM4100</div>
                                          </div>
                                          <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                            <div>Рабочая частота:</div>
                                            <div>125 КГц</div>
                                          </div>
                                          <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                            <div>Рабочее напряжение:</div>
                                            <div>5 В</div>
                                          </div>
                                          <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                            <div>Потребляемый ток:</div>
                                            <div>50 мА</div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                    <div className="wrapper-popup__right-block-footer">
                                      <div className="wrapper-popup__right-block__footer__price">
                                        <span>Стоимость опции</span>
                                        2340,00
                                      </div>
                                      <div
                                        onClick={this.handleClickTwoSelect}
                                        className="wrapper-popup__right-block__footer__button"
                                      >
                                        Добавить
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : null}
                              {/** ==================================== MODAL WINDOW ===================================== */}
                            
                            {/*{index.caption}*/}
                          </div>
                          <div className="right-block__select-description__plus-price">
                            {turnstile.page_view.model_module_list[1] !== undefined && turnstile.page_view.model_module_list[1].name === 'emarine' && '+' + turnstile.page_view.model_module_list[1].price && '+ 2340.00'}
                            {turnstile.page_view.model_module_list[2] !== undefined && turnstile.page_view.model_module_list[2].name === 'emarine' && '+' + turnstile.page_view.model_module_list[2].price && '+ 2340.00'}
                            {turnstile.page_view.model_module_list[3] !== undefined && turnstile.page_view.model_module_list[3].name === 'emarine' && '+' + turnstile.page_view.model_module_list[3].price && '+ 2340.00'}
                            {turnstile.page_view.model_module_list[4] !== undefined && turnstile.page_view.model_module_list[4].name === 'emarine' && '+' + turnstile.page_view.model_module_list[4].price && '+ 2340.00'}
                          </div>
                          <div className="onoffswitch2">
                            <input
                              type="checkbox"
                              name="onoffswitch"
                              className="onoffswitch2-checkbox"
                              id="header2-checkbox"
                              onChange={this.handleClickTwoSelect}
                              checked={this.state.selectTwo}
                            />
                            <label
                              className="onoffswitch2-label"
                              htmlFor="header2-checkbox"
                            >
                              <span className="onoffswitch2-inner"></span>
                              <span className="onoffswitch2-switch"></span>
                            </label>
                          </div>
                        </div>
                      );
                    }
                  })}

                {/** =================== BLOCK 3 =================== */}

                {turnstile.page_view.module_selectors
                  .slice(2, 3)
                  .map((index, key) => {
                    if (index.state === -1) {
                      return (
                        <div className="wrapper-select none">
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            <div className="right-block__select-description__photo-three"></div>
                            <div>RFID идентификаторы Mifare 13.56MHz</div>
                            {/*{index.caption}*/}
                            <div className="right-block__select-description__more-info">
                              
                              {/** ==================================== MODAL WINDOW ===================================== */}
                              
                              {/** ==================================== MODAL WINDOW ===================================== */}
                            </div>
                            {/*{index.caption}*/}
                          </div>
                          <div className="right-block__select-description__plus-price">
                            {turnstile.page_view.model_module_list[1] !== undefined && turnstile.page_view.model_module_list[1].name === 'mifare' && '+' + turnstile.page_view.model_module_list[1].price}
                            {turnstile.page_view.model_module_list[2] !== undefined && turnstile.page_view.model_module_list[2].name === 'mifire' && '+' + turnstile.page_view.model_module_list[2].price}
                            {turnstile.page_view.model_module_list[3] !== undefined && turnstile.page_view.model_module_list[3].name === 'mifire' && '+' + turnstile.page_view.model_module_list[3].price}
                          </div>
                          <div className="onoffswitch3">
                            <input
                              type="checkbox"
                              name="onoffswitch"
                              className="onoffswitch3-checkbox"
                              id="header3-checkbox"
                              onClick={this.handleClickThreeSelect}
                              checked={this.state.defaultSelect}
                            />
                            <label
                              className="onoffswitch3-label"
                              htmlFor="header3-checkbox"
                            >
                              <span className="onoffswitch3-inner"></span>
                              <span className="onoffswitch3-switch"></span>
                            </label>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div key={index.index} className="wrapper-select">
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            <div className="right-block__select-description__photo-three"></div>
                            <div>RFID идентификаторы Mifare 13.56MHz</div>
                            {/*{index.caption}*/}
                            <div className="right-block__select-description__more-info">
                              <div onClick={this.handleOpenModalThree}>
                                подробнее
                              </div>
                              <div className="right-block__select-description__more-info__arrow"></div>
                            </div>
                              {/** ==================================== MODAL WINDOW ===================================== */}
                              {this.state.modalOpenThree ? (
                              <div className="wrapper-popup-mifare">
                                <div className="wrapper-popup__left-block">
                                  <div className="wrapper-popup__block-photo">
                                    <div></div>
                                  </div>
                                </div>
                                <div className="wrapper-popup__right-block">
                                  <div className="wrapper-popup__right-block-header">
                                    <div className="wrapper-popup__right-block-header__photo"></div>
                                    <div className="wrapper-popup__right-block-header__characteristics">
                                      RFID идентификаторы Mifare 13.56MHz
                                      {characteristicsThree === false ? (
                                        <span onClick={this.toggleCharacteristicsThree}>ХАРАКТЕРИСТИКИ</span>
                                      ) : (
                                        <span onClick={this.toggleCharacteristicsThree}>
                                          ПОКАЗАТЬ ОПИСАНИЕ
                                        </span>
                                      )}
                                    </div>
                                    <div onClick={this.handleCloseModalThree}className="wrapper-popup__right-block-header__close-modal"></div>
                                  </div>
                                  <div className="wrapper-popup__right-block-main">
                                    {characteristicsThree === false ? (
                                      <div className="wrapper-popup__right-block-main__description">
                                        Встраиваемые модули RFID считывателей «RE-02» и «RM-02» предназначены для обеспечения доступа авторизованным пользователям, посредством бесконтактных идентификаторов стандарта EMMarine/MiFare.
                                      </div>
                                    ) : (
                                      <div className="wrapper-popup__right-block-main__characteristics">
                                        <div className="wrapper-popup__right-block-main__characteristics__heading">
                                          Считыватель MiFare:
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>Стандарт считывания:</div>
                                          <div>Mifare 1K, Mifare 4K, Mifare Ultralight</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>Рабочая частота:</div>
                                          <div>13,56 МГц</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>Рабочее напряжение:</div>
                                          <div>5В</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>
                                            Потребляемый ток:
                                          </div>
                                          <div>{"<100 мА"}</div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                  <div className="wrapper-popup__right-block-footer">
                                    <div className="wrapper-popup__right-block__footer__price">
                                      <span>Стоимость опции</span>
                                      4800,00
                                    </div>
                                    <div onClick={this.handleClickThreeSelect} className="wrapper-popup__right-block__footer__button">
                                      Добавить
                                    </div>
                                  </div>
                                </div>
                              </div>
                              ) : null}
                              {/** ==================================== MODAL WINDOW ===================================== */}
                            
                            {/*{index.caption}*/}
                          </div>
                          <div className="right-block__select-description__plus-price">
                            {turnstile.page_view.model_module_list[1] !== undefined && turnstile.page_view.model_module_list[1].name === 'mifare' && '+' + turnstile.page_view.model_module_list[1].price}
                            {turnstile.page_view.model_module_list[2] !== undefined && turnstile.page_view.model_module_list[2].name === 'mifare' && '+' + turnstile.page_view.model_module_list[2].price}
                            {turnstile.page_view.model_module_list[3] !== undefined && turnstile.page_view.model_module_list[3].name === 'mifare' && '+' + turnstile.page_view.model_module_list[3].price}
                          </div>
                          <div className="onoffswitch3">
                            <input
                              type="checkbox"
                              name="onoffswitch"
                              className="onoffswitch3-checkbox"
                              id="header3-checkbox"
                              onChange={this.handleClickThreeSelect}
                              checked={this.state.selectThree}
                            />
                            <label
                              className="onoffswitch3-label"
                              htmlFor="header3-checkbox"
                            >
                              <span className="onoffswitch3-inner"></span>
                              <span className="onoffswitch3-switch"></span>
                            </label>
                          </div>
                        </div>
                      );
                    }
                  })}

                {/** =================== BLOCK 4 =================== */}

                {turnstile.page_view.module_selectors
                  .slice(3, 4)
                  .map((index, key) => {
                    if (index.state === -1) {
                      return (
                        <div className="wrapper-select none">
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            <div className="right-block__select-description__photo-four"></div>
                            <div>
                              Биометрическая идентификация по отпечаткам пальцев
                            </div>
                            {/*{index.caption}*/}
                            <div className="right-block__select-description__more-info">
                              
                              {/** ==================================== MODAL WINDOW ===================================== */}
                              
                            {/** ==================================== MODAL WINDOW ===================================== */}
                            </div>
                            {/*{index.caption}*/}
                          </div>
                          <div className="right-block__select-description__plus-price">
                            {turnstile.page_view.model_module_list[1] !== undefined && turnstile.page_view.model_module_list[1].name === 'fingerprint' && '+' + turnstile.page_view.model_module_list[1].price}
                            {turnstile.page_view.model_module_list[2] !== undefined && turnstile.page_view.model_module_list[2].name === 'fingerprint' && '+' + turnstile.page_view.model_module_list[2].price}
                            {turnstile.page_view.model_module_list[3] !== undefined && turnstile.page_view.model_module_list[3].name === 'fingerprint' && '+' + turnstile.page_view.model_module_list[3].price}
                            {turnstile.page_view.model_module_list[4] !== undefined && turnstile.page_view.model_module_list[4].name === 'fingerprint' && '+' + turnstile.page_view.model_module_list[4].price}
                          </div>
                          <div className="onoffswitch4">
                            <input
                              type="checkbox"
                              name="onoffswitch"
                              className="onoffswitch4-checkbox"
                              id="header4-checkbox"
                              onClick={this.handleClickFourSelect}
                              checked={this.state.defaultSelect}
                            />
                            <label
                              className="onoffswitch4-label"
                              htmlFor="header4-checkbox"
                            >
                              <span className="onoffswitch4-inner"></span>
                              <span className="onoffswitch4-switch"></span>
                            </label>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div key={index.index} className="wrapper-select">
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            <div className="right-block__select-description__photo-four"></div>
                            <div>
                              Биометрическая идентификация по отпечаткам пальцев
                            </div>
                            {/*{index.caption}*/}
                              <div className="right-block__select-description__more-info">
                                <div onClick={this.handleOpenModalFour}>
                                  подробнее
                                </div>
                                <div className="right-block__select-description__more-info__arrow"></div>
                              </div>
                                {/** ==================================== MODAL WINDOW ===================================== */}
                                {this.state.modalOpenFour ? (
                                <div className="wrapper-popup-bio">
                                  <div className="wrapper-popup__left-block">
                                    <div className="wrapper-popup__block-photo">
                                      <div></div>
                                    </div>
                                  </div>
                                  <div className="wrapper-popup__right-block">
                                    <div className="wrapper-popup__right-block-header">
                                      <div className="wrapper-popup__right-block-header__photo"></div>
                                      <div className="wrapper-popup__right-block-header__characteristics">
                                        Биометрическая идентификация по отпечаткам пальцев
                                        {characteristicsFour === false ? (
                                          <span onClick={this.toggleCharacteristicsFour}>ХАРАКТЕРИСТИКИ</span>
                                        ) : (
                                          <span onClick={this.toggleCharacteristicsFour}>
                                            ПОКАЗАТЬ ОПИСАНИЕ
                                          </span>
                                        )}
                                      </div>
                                      <div onClick={this.handleCloseModalFour}className="wrapper-popup__right-block-header__close-modal"></div>
                                    </div>
                                    <div className="wrapper-popup__right-block-main">
                                      {characteristicsFour === false ? (
                                        <div className="wrapper-popup__right-block-main__description">
                                        Модуль биометрической идентификации по отпечаткам пальцев
                                        гарантирует надежный контроль доступа на территорию для
                                        авторизованного персонала. Встраиваемые модули биометрической
                                        идентификации «FRE-02» и «FRM-02» предназначены для обеспечения
                                        доступа через турникеты авторизованным пользователям посредством
                                        сканирования отпечатков пальцев. Также, в виде дополнительной
                                        возможности, в данные модули встроены RFID считыватели
                                        стандартов EMMarine или MiFare.
                                        </div>
                                      ) : (
                                        <div className="wrapper-popup__right-block-main__characteristics">
                                          <div className="wrapper-popup__right-block-main__characteristics__heading">
                                            Характеристили биосканеров
                                          </div>
                                          <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                            <div>Тип датчика:</div>
                                            <div>oптический</div>
                                          </div>
                                          <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                            <div>Разрешение, размер изображения:</div>
                                            <div>450 dpi, 258×202 px</div>
                                          </div>
                                          <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                            <div>
                                              Значение коэффициента ложного отказа в обслуживании:
                                            </div>
                                            <div>{"<0.001%"}</div>
                                          </div>
                                          <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                            <div>
                                              Значение коэффициента ложного отказа в обслуживании:
                                            </div>
                                            <div>{"<0.1%"}</div>
                                          </div>
                                          <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                            <div>
                                              Потребляемый ток:
                                            </div>
                                            <div>{"<130мА"}</div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                    <div className="wrapper-popup__right-block-footer">
                                      <div className="wrapper-popup__right-block__footer__price">
                                        <span>Стоимость опции</span>
                                        18000,00
                                      </div>
                                      <div onClick={this.handleClickFourSelect} className="wrapper-popup__right-block__footer__button">
                                        Добавить
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                ) : null}
                              {/** ==================================== MODAL WINDOW ===================================== */}
                          
                            {/*{index.caption}*/}
                          </div>
                          <div className="right-block__select-description__plus-price">
                            {turnstile.page_view.model_module_list[1] !== undefined && turnstile.page_view.model_module_list[1].name === 'fingerprint' && '+' + turnstile.page_view.model_module_list[1].price}
                            {turnstile.page_view.model_module_list[2] !== undefined && turnstile.page_view.model_module_list[2].name === 'fingerprint' && '+' + turnstile.page_view.model_module_list[2].price}
                            {turnstile.page_view.model_module_list[3] !== undefined && turnstile.page_view.model_module_list[3].name === 'fingerprint' && '+' + turnstile.page_view.model_module_list[3].price}
                            {turnstile.page_view.model_module_list[4] !== undefined && turnstile.page_view.model_module_list[4].name === 'fingerprint' && '+' + turnstile.page_view.model_module_list[4].price}
                          </div>
                          <div className="onoffswitch4">
                            <input
                              type="checkbox"
                              name="onoffswitch"
                              className="onoffswitch4-checkbox"
                              id="header4-checkbox"
                              onChange={this.handleClickFourSelect}
                              checked={this.state.selectFour}
                            />
                            <label
                              className="onoffswitch4-label"
                              htmlFor="header4-checkbox"
                            >
                              <span className="onoffswitch4-inner"></span>
                              <span className="onoffswitch4-switch"></span>
                            </label>
                          </div>
                        </div>
                      );
                    }
                  })}

                {/** =================== BLOCK 5 =================== */}
                {turnstile.page_view.module_selectors
                  .slice(4, 5)
                  .map((index, key) => {
                    if (index.state === -1) {
                      return (
                        <div key={index.index} className="wrapper-select none">
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            <div className="right-block__select-description__photo-five"></div>
                            <div>
                              Информационный дисплей учета рабочего времени
                            </div>
                            {/*{index.caption}*/}
                            <div className="right-block__select-description__more-info">
                              {/** ==================================== MODAL WINDOW ===================================== */}
                            </div>
                            {/*{index.caption}*/}
                          </div>
                          <div className="right-block__select-description__plus-price">
                            {turnstile.page_view.model_module_list[1] !== undefined && turnstile.page_view.model_module_list[1].name === 'display' && '+' + turnstile.page_view.model_module_list[1].price}
                            {turnstile.page_view.model_module_list[2] !== undefined && turnstile.page_view.model_module_list[2].name === 'display' && '+' + turnstile.page_view.model_module_list[2].price}
                            {turnstile.page_view.model_module_list[3] !== undefined && turnstile.page_view.model_module_list[3].name === 'display' && '+' + turnstile.page_view.model_module_list[3].price}
                            {turnstile.page_view.model_module_list[4] !== undefined && turnstile.page_view.model_module_list[4].name === 'display' && '+' + turnstile.page_view.model_module_list[4].price}
                            {turnstile.page_view.model_module_list[5] !== undefined && turnstile.page_view.model_module_list[5].name === 'display' && '+' + turnstile.page_view.model_module_list[5].price}
                          </div>
                          <div className="onoffswitch5">
                            <input
                              type="checkbox"
                              name="onoffswitch"
                              className="onoffswitch5-checkbox"
                              id="header5-checkbox"
                              onChange={this.handleClickFiveSelect}
                              checked={this.state.defaultSelect}
                            />
                            <label
                              className="onoffswitch5-label"
                              htmlFor="header5-checkbox"
                            >
                              <span className="onoffswitch5-inner"></span>
                              <span className="onoffswitch5-switch"></span>
                            </label>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div key={index.index} className="wrapper-select">
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            <div className="right-block__select-description__photo-five"></div>
                            <div>
                              Информационный дисплей учета рабочего времени
                            </div>
                            {/*{index.caption}*/}
                            <div className="right-block__select-description__more-info">
                              <div onClick={this.handleOpenModalFive}>
                                подробнее
                              </div>
                              <div className="right-block__select-description__more-info__arrow"></div>
                            </div>
                              {/** ==================================== MODAL WINDOW ===================================== */}
                              {this.state.modalOpenFive ? (
                              <div className="wrapper-popup-time">
                                <div className="wrapper-popup__left-block">
                                  <div className="wrapper-popup__block-photo">
                                    <div></div>
                                  </div>
                                </div>
                                <div className="wrapper-popup__right-block">
                                  <div className="wrapper-popup__right-block-header">
                                    <div className="wrapper-popup__right-block-header__photo"></div>
                                    <div className="wrapper-popup__right-block-header__characteristics">
                                      Информационный дисплей учета рабочего времени
                                      {characteristicsFive === false ? (
                                        <span onClick={this.toggleCharacteristicsFive}>ХАРАКТЕРИСТИКИ</span>
                                      ) : (
                                        <span onClick={this.toggleCharacteristicsFive}>
                                          ПОКАЗАТЬ ОПИСАНИЕ
                                        </span>
                                      )}
                                    </div>
                                    <div onClick={this.handleCloseModalFive}className="wrapper-popup__right-block-header__close-modal"></div>
                                  </div>
                                  <div className="wrapper-popup__right-block-main">
                                    {characteristicsFive === false ? (
                                      <div className="wrapper-popup__right-block-main__description">
                                        Модули учета рабочего времени «TRE-05» и «TRM-05» предназначены для организации контроля доступа и учета рабочего времени персонала.
                                        Интегрированный в панель идентификации дисплей отображает: 
                                        Ф.И.О. сотрудника;
                                        время его прихода на работу.
                                        Встроенное ПО «CARDDEX IMS/AR» позволяет развернуть полноценную систему учета рабочего времени и контроля доступа, без дополнительного выделенного сервера.
                                        Идентификация пользователей происходит посредством биометрического сканера или RFID считывателя.
                                      </div>
                                    ) : (
                                      <div className="wrapper-popup__right-block-main__characteristics">
                                        <div className="wrapper-popup__right-block-main__characteristics__heading">
                                          Характеристили модуля учета рабочего времени
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>Тип датчика:</div>
                                          <div>oптический</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>Разрешение, размер изображения:</div>
                                          <div>450 dpi, 258×202 px</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>
                                            Значение коэффициента ложного распознавания:
                                          </div>
                                          <div>{"<0.001%"}</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>
                                            Напряжение питания:
                                          </div>
                                          <div>3,6B</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>
                                            Потребляемый ток:
                                          </div>
                                          <div>{"<130мА"}</div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                  <div className="wrapper-popup__right-block-footer">
                                    <div className="wrapper-popup__right-block__footer__price">
                                      <span>Стоимость опции</span>
                                      21040,00
                                    </div>
                                    <div onClick={this.handleClickFiveSelect} className="wrapper-popup__right-block__footer__button">
                                      Добавить
                                    </div>
                                  </div>
                                </div>
                              </div>
                              ) : null}
                            {/** ==================================== MODAL WINDOW ===================================== */}
                            
                            {/*{index.caption}*/}
                          </div>
                          <div className="right-block__select-description__plus-price">
                          {turnstile.page_view.model_module_list[1] !== undefined && turnstile.page_view.model_module_list[1].name === 'display' && '+' + turnstile.page_view.model_module_list[1].price}
                          {turnstile.page_view.model_module_list[2] !== undefined && turnstile.page_view.model_module_list[2].name === 'display' && '+' + turnstile.page_view.model_module_list[2].price}
                          {turnstile.page_view.model_module_list[3] !== undefined && turnstile.page_view.model_module_list[3].name === 'display' && '+' + turnstile.page_view.model_module_list[3].price}
                          {turnstile.page_view.model_module_list[4] !== undefined && turnstile.page_view.model_module_list[4].name === 'display' && '+' + turnstile.page_view.model_module_list[4].price}
                          {turnstile.page_view.model_module_list[5] !== undefined && turnstile.page_view.model_module_list[5].name === 'display' && '+' + turnstile.page_view.model_module_list[5].price}
                          </div>
                          <div className="onoffswitch5">
                            <input
                              type="checkbox"
                              name="onoffswitch"
                              className="onoffswitch5-checkbox"
                              id="header5-checkbox"
                              onClick={this.handleClickFiveSelect}
                              checked={this.state.selectFive}
                            />
                            <label
                              className="onoffswitch5-label"
                              htmlFor="header5-checkbox"
                            >
                              <span className="onoffswitch5-inner"></span>
                              <span className="onoffswitch5-switch"></span>
                            </label>
                          </div>
                        </div>
                      );
                    }
                  })}

                {/** =================== BLOCK 6 =================== */}
                {turnstile.page_view.module_selectors
                  .slice(5, 6)
                  .map((index, key) => {
                    if (index.state === -1) {
                      return (
                        <div key={index.index} className="wrapper-select none">
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            <div className="right-block__select-description__photo-six"></div>
                            <div>
                              Контроль разовых посещений по 2D штрих-кодам
                            </div>
                            {/*{index.caption}*/}
                            <div className="right-block__select-description__more-info">
                              {/** ==================================== MODAL WINDOW ===================================== */}
                            </div>
                            {/*{index.caption}*/}
                          </div>
                          <div className="right-block__select-description__plus-price">
                          {turnstile.page_view.model_module_list[1] !== undefined && turnstile.page_view.model_module_list[1].name === 'qrguests' && '+' + turnstile.page_view.model_module_list[1].price}
                          {turnstile.page_view.model_module_list[2] !== undefined && turnstile.page_view.model_module_list[2].name === 'qrguests' && '+' + turnstile.page_view.model_module_list[2].price}
                          {turnstile.page_view.model_module_list[3] !== undefined && turnstile.page_view.model_module_list[3].name === 'qrguests' && '+' + turnstile.page_view.model_module_list[3].price}
                          {turnstile.page_view.model_module_list[4] !== undefined && turnstile.page_view.model_module_list[4].name === 'qrguests' && '+' + turnstile.page_view.model_module_list[4].price}
                          {turnstile.page_view.model_module_list[5] !== undefined && turnstile.page_view.model_module_list[5].name === 'qrguests' && '+' + turnstile.page_view.model_module_list[5].price}
                          </div>
                          <div className="onoffswitch6">
                            <input
                              type="checkbox"
                              name="onoffswitch"
                              className="onoffswitch6-checkbox"
                              id="header6-checkbox"
                              onChange={this.handleClickSixSelect}
                              checked={this.state.defaultSelect}
                            />
                            <label
                              className="onoffswitch6-label"
                              htmlFor="header6-checkbox"
                            >
                              <span className="onoffswitch6-inner"></span>
                              <span className="onoffswitch6-switch"></span>
                            </label>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div key={index.index} className="wrapper-select">
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            <div className="right-block__select-description__photo-six"></div>
                            <div>
                              Контроль разовых посещений по 2D штрих-кодам
                            </div>
                            {/*{index.caption}*/}
                            <div className="right-block__select-description__more-info">
                              <div onClick={this.handleOpenModalSix}>
                                подробнее
                              </div>
                              <div className="right-block__select-description__more-info__arrow"></div>
                            </div>
                              {/** ==================================== MODAL WINDOW ===================================== */}
                              {this.state.modalOpenSix ? (
                              <div className="wrapper-popup-single-visit">
                                <div className="wrapper-popup__left-block">
                                  <div className="wrapper-popup__block-photo">
                                    <div></div>
                                  </div>
                                </div>
                                <div className="wrapper-popup__right-block">
                                  <div className="wrapper-popup__right-block-header">
                                    <div className="wrapper-popup__right-block-header__photo"></div>
                                    <div className="wrapper-popup__right-block-header__characteristics">
                                      Контроль разовых посещений по 2D штрих-кодам
                                      {characteristicsSix === false ? (
                                        <span onClick={this.toggleCharacteristicsSix}>ХАРАКТЕРИСТИКИ</span>
                                      ) : (
                                        <span onClick={this.toggleCharacteristicsSix}>
                                          ПОКАЗАТЬ ОПИСАНИЕ
                                        </span>
                                      )}
                                    </div>
                                    <div onClick={this.handleCloseModalSix}className="wrapper-popup__right-block-header__close-modal"></div>
                                  </div>
                                  <div className="wrapper-popup__right-block-main">
                                    {characteristicsSix === false ? (
                                      <div className="wrapper-popup__right-block-main__description">
                                        Модуль билетного доступа по QR-кодам «QS-03» используется в турникетах для контроля доступа в кинотеатры, музеи,выставочные центры, спортивные мероприятия и т.д. В качестве устройства идентификации используется 2D сканер. Данное решение предназначено для разового прохода посетителей по приглашению, пропуску или билету, смартфону, содержащему QR-код.
                                      </div>
                                    ) : (
                                      <div className="wrapper-popup__right-block-main__characteristics">
                                        <div className="wrapper-popup__right-block-main__characteristics__heading">
                                          Технические характеристики 2D сканера
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>Поддерживаемые стандарты:</div>
                                          <div>EAN-8, EAN-13, UPC-A, UPC-E, Code 39, Code 93, Code 128, EAN128, Codabar, Industrial 2 of 5, Interleave 2 of 5, Standard 25, Matrix 2 of 5, MSI, GS1, PDF417, MicroQR, DataMatrix, QR, HanXin, Aztec</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>Скорость сканирования:</div>
                                          <div>1300 раз в секунду</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>
                                            Минимальный процент контрастности распознаваемого текста:
                                          </div>
                                          <div>20%</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>
                                            Допустимая освещенность окружающей поверхности:
                                          </div>
                                          <div>0-120000 лк.</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>
                                            Напряжение питания:
                                          </div>
                                          <div>5В</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>
                                            Потребляемый ток:
                                          </div>
                                          <div>{'<200мА'}</div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                  <div className="wrapper-popup__right-block-footer">
                                    <div className="wrapper-popup__right-block__footer__price">
                                      <span>Стоимость опции</span>
                                      9220,00
                                    </div>
                                    <div onClick={this.handleClickSixSelect} className="wrapper-popup__right-block__footer__button">
                                      Добавить
                                    </div>
                                  </div>
                                </div>
                              </div>
                              ) : null}
                            {/** ==================================== MODAL WINDOW ===================================== */}
                            
                            {/*{index.caption}*/}
                          </div>
                          <div className="right-block__select-description__plus-price">
                          {turnstile.page_view.model_module_list[1] !== undefined && turnstile.page_view.model_module_list[1].name === 'qrguests' && '+' + turnstile.page_view.model_module_list[1].price}
                          {turnstile.page_view.model_module_list[2] !== undefined && turnstile.page_view.model_module_list[2].name === 'qrguests' && '+' + turnstile.page_view.model_module_list[2].price}
                          {turnstile.page_view.model_module_list[3] !== undefined && turnstile.page_view.model_module_list[3].name === 'qrguests' && '+' + turnstile.page_view.model_module_list[3].price}
                          {turnstile.page_view.model_module_list[4] !== undefined && turnstile.page_view.model_module_list[4].name === 'qrguests' && '+' + turnstile.page_view.model_module_list[4].price}
                          {turnstile.page_view.model_module_list[5] !== undefined && turnstile.page_view.model_module_list[5].name === 'qrguests' && '+' + turnstile.page_view.model_module_list[5].price}
                          {turnstile.page_view.model_module_list[6] !== undefined && turnstile.page_view.model_module_list[6].name === 'qrguests' && '+' + turnstile.page_view.model_module_list[6].price}
                          </div>
                          <div className="onoffswitch6">
                            <input
                              type="checkbox"
                              name="onoffswitch"
                              className="onoffswitch6-checkbox"
                              id="header6-checkbox"
                              onClick={this.handleClickSixSelect}
                              checked={this.state.selectSix}
                            />
                            <label
                              className="onoffswitch6-label"
                              htmlFor="header6-checkbox"
                            >
                              <span className="onoffswitch6-inner"></span>
                              <span className="onoffswitch6-switch"></span>
                            </label>
                          </div>
                        </div>
                      );
                    }
                  })}

                {/** =================== BLOCK 7 =================== */}
                {turnstile.page_view.module_selectors
                  .slice(6, 7)
                  .map((index, key) => {
                    if (index.state === -1) {
                      return (
                        <div key={index.index} className="wrapper-select none">
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            <div className="right-block__select-description__photo-seven"></div>
                            <div>Гостевой доступ по 2D штрих-кодам</div>
                            {/*{index.caption}*/}
                            <div className="right-block__select-description__more-info">
                              {/** ==================================== MODAL WINDOW ===================================== */}
                            </div>
                            {/*{index.caption}*/}
                          </div>
                          <div className="right-block__select-description__plus-price">
                            {turnstile.page_view.model_module_list[1] !== undefined && turnstile.page_view.model_module_list[1].name === 'qrvisitors' && '+' + turnstile.page_view.model_module_list[1].price}
                            {turnstile.page_view.model_module_list[2] !== undefined && turnstile.page_view.model_module_list[2].name === 'qrvisitors' && '+' + turnstile.page_view.model_module_list[2].price}
                            {turnstile.page_view.model_module_list[3] !== undefined && turnstile.page_view.model_module_list[3].name === 'qrvisitors' && '+' + turnstile.page_view.model_module_list[3].price}
                            {turnstile.page_view.model_module_list[4] !== undefined && turnstile.page_view.model_module_list[4].name === 'qrvisitors' && '+' + turnstile.page_view.model_module_list[4].price}
                            {turnstile.page_view.model_module_list[5] !== undefined && turnstile.page_view.model_module_list[5].name === 'qrvisitors' && '+' + turnstile.page_view.model_module_list[5].price}
                            {turnstile.page_view.model_module_list[6] !== undefined && turnstile.page_view.model_module_list[6].name === 'qrvisitors' && '+' + turnstile.page_view.model_module_list[6].price}
                            {turnstile.page_view.model_module_list[7] !== undefined && turnstile.page_view.model_module_list[7].name === 'qrvisitors' && '+' + turnstile.page_view.model_module_list[7].price}
                          </div>
                          <div className="onoffswitch7">
                            <input
                              type="checkbox"
                              name="onoffswitch"
                              className="onoffswitch7-checkbox"
                              id="header7-checkbox"
                              onChange={this.handleClickSevenSelect}
                              checked={this.state.defaultSelect}
                            />
                            <label
                              className="onoffswitch7-label"
                              htmlFor="header7-checkbox"
                            >
                              <span className="onoffswitch7-inner"></span>
                              <span className="onoffswitch7-switch"></span>
                            </label>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div key={index.index} className="wrapper-select">
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            <div className="right-block__select-description__photo-seven"></div>
                            <div>Гостевой доступ по 2D штрих-кодам</div>
                            {/*{index.caption}*/}
                            <div className="right-block__select-description__more-info">
                              <div onClick={this.handleOpenModalSeven}>
                                подробнее
                              </div>
                              <div className="right-block__select-description__more-info__arrow"></div>
                            </div>
                              {/** ==================================== MODAL WINDOW ===================================== */}
                              {this.state.modalOpenSeven ? (
                              <div className="wrapper-popup-guest2d">
                                <div className="wrapper-popup__left-block">
                                  <div className="wrapper-popup__block-photo">
                                    <div></div>
                                  </div>
                                </div>
                                <div className="wrapper-popup__right-block">
                                  <div className="wrapper-popup__right-block-header">
                                    <div className="wrapper-popup__right-block-header__photo"></div>
                                    <div className="wrapper-popup__right-block-header__characteristics">
                                      Гостевой доступ по 2D штрих-кодам
                                      {characteristicsSeven === false ? (
                                        <span onClick={this.toggleCharacteristicsSeven}>ХАРАКТЕРИСТИКИ</span>
                                      ) : (
                                        <span onClick={this.toggleCharacteristicsSeven}>
                                          ПОКАЗАТЬ ОПИСАНИЕ
                                        </span>
                                      )}
                                    </div>
                                    <div onClick={this.handleCloseModalSeven}className="wrapper-popup__right-block-header__close-modal"></div>
                                  </div>
                                  <div className="wrapper-popup__right-block-main">
                                    {characteristicsSeven === false ? (
                                      <div className="wrapper-popup__right-block-main__description">
                                        Модули гостевого доступа по QR-кодам «QRE-04» и «QRM-04»
                                        предназначены для использования в турникетах, расположенных на
                                        различных объектах, где наряду с доступом авторизованных
                                        пользователей, предусмотрен доступ сторонних посетителей. В
                                        данном случае, гостевой доступ осуществляется посредством
                                        считывания QR-кодов со смартфонов посетителей или с бумажных
                                        носителей, распечатанных и выданных на проходной. Данное решение
                                        является альтернативой устаревшей системы использования
                                        картоприемников для гостевого доступа и имеет ряд существенных
                                        плюсов, как по функционалу, так и по стоимости.
                                      </div>
                                    ) : (
                                      <div className="wrapper-popup__right-block-main__characteristics">
                                        <div className="wrapper-popup__right-block-main__characteristics__heading">
                                          Технические характеристики 2D сканера
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>Поддерживаемые стандарты:</div>
                                          <div>EAN-8, EAN-13, UPC-A, UPC-E, Code 39, Code 93, Code 128, EAN128, Codabar, Industrial 2 of 5, Interleave 2 of 5, Standard 25, Matrix 2 of 5, MSI, GS1, PDF417, MicroQR, DataMatrix, QR, HanXin, Aztec</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>Скорость сканирования:</div>
                                          <div>1300 раз в секунду</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>
                                            Минимальный процент контрастности распознаваемого текста:
                                          </div>
                                          <div>20%</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>
                                            Допустимая освещенность окружающей поверхности:
                                          </div>
                                          <div>0-120000 лк.</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>
                                            Напряжение питания:
                                          </div>
                                          <div>5В</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>
                                            Потребляемый ток:
                                          </div>
                                          <div>{'<200мА'}</div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                  <div className="wrapper-popup__right-block-footer">
                                    <div className="wrapper-popup__right-block__footer__price">
                                      <span>Стоимость опции</span>
                                      20550,00 Р
                                    </div>
                                    <div onClick={this.handleClickSevenSelect} className="wrapper-popup__right-block__footer__button">
                                      Добавить
                                    </div>
                                  </div>
                                </div>
                              </div>
                              ) : null}
                            {/** ==================================== MODAL WINDOW ===================================== */}
                          
                            {/*{index.caption}*/}
                          </div>
                          <div className="right-block__select-description__plus-price">
                            {turnstile.page_view.model_module_list[1] !== undefined && turnstile.page_view.model_module_list[1].name === 'qrvisitors' && '+' + turnstile.page_view.model_module_list[1].price}
                            {turnstile.page_view.model_module_list[2] !== undefined && turnstile.page_view.model_module_list[2].name === 'qrvisitors' && '+' + turnstile.page_view.model_module_list[2].price}
                            {turnstile.page_view.model_module_list[3] !== undefined && turnstile.page_view.model_module_list[3].name === 'qrvisitors' && '+' + turnstile.page_view.model_module_list[3].price}
                            {turnstile.page_view.model_module_list[4] !== undefined && turnstile.page_view.model_module_list[4].name === 'qrvisitors' && '+' + turnstile.page_view.model_module_list[4].price}
                            {turnstile.page_view.model_module_list[5] !== undefined && turnstile.page_view.model_module_list[5].name === 'qrvisitors' && '+' + turnstile.page_view.model_module_list[5].price}
                            {turnstile.page_view.model_module_list[6] !== undefined && turnstile.page_view.model_module_list[6].name === 'qrvisitors' && '+' + turnstile.page_view.model_module_list[6].price}
                            {turnstile.page_view.model_module_list[7] !== undefined && turnstile.page_view.model_module_list[7].name === 'qrvisitors' && '+' + turnstile.page_view.model_module_list[7].price}
                          </div>
                          <div className="onoffswitch7">
                            <input
                              type="checkbox"
                              name="onoffswitch"
                              className="onoffswitch7-checkbox"
                              id="header7-checkbox"
                              onClick={this.handleClickSevenSelect}
                              checked={this.state.selectSeven}
                            />
                            <label
                              className="onoffswitch7-label"
                              htmlFor="header7-checkbox"
                            >
                              <span className="onoffswitch7-inner"></span>
                              <span className="onoffswitch7-switch"></span>
                            </label>
                          </div>
                        </div>
                      );
                    }
                  })}

                {/** =================== BLOCK 8 =================== */}

                {turnstile.page_view.module_selectors
                  .slice(7, 8)
                  .map((index, key) => {
                    if (index.state === -1) {
                      return (
                        <div key={index.index} className="wrapper-select none">
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            <div className="right-block__select-description__photo-eight"></div>
                            <div>Корпус кожуха из нержавеющей стали</div>
                            {/*{index.caption}*/}
                            <div className="right-block__select-description__more-info">
                              {/** ==================================== MODAL WINDOW ===================================== */}
                            </div>
                            {/*{index.caption}*/}
                          </div>
                          <div className="right-block__select-description__plus-price">
                            {turnstile.page_view.model_module_list[1] !== undefined && turnstile.page_view.model_module_list[1].name === 'stainless' && '+' + turnstile.page_view.model_module_list[1].price}
                            {turnstile.page_view.model_module_list[2] !== undefined && turnstile.page_view.model_module_list[2].name === 'stainless' && '+' + turnstile.page_view.model_module_list[2].price}
                            {turnstile.page_view.model_module_list[3] !== undefined && turnstile.page_view.model_module_list[3].name === 'stainless' && '+' + turnstile.page_view.model_module_list[3].price}
                            {turnstile.page_view.model_module_list[4] !== undefined && turnstile.page_view.model_module_list[4].name === 'stainless' && '+' + turnstile.page_view.model_module_list[4].price}
                            {turnstile.page_view.model_module_list[5] !== undefined && turnstile.page_view.model_module_list[5].name === 'stainless' && '+' + turnstile.page_view.model_module_list[5].price}
                            {turnstile.page_view.model_module_list[6] !== undefined && turnstile.page_view.model_module_list[6].name === 'stainless' && '+' + turnstile.page_view.model_module_list[6].price}
                            {turnstile.page_view.model_module_list[7] !== undefined && turnstile.page_view.model_module_list[7].name === 'stainless' && '+' + turnstile.page_view.model_module_list[7].price}
                            {turnstile.page_view.model_module_list[8] !== undefined && turnstile.page_view.model_module_list[8].name === 'stainless' && '+' + turnstile.page_view.model_module_list[8].price}
                          </div>
                          <div className="onoffswitch8">
                            <input
                              type="checkbox"
                              name="onoffswitch"
                              className="onoffswitch8-checkbox"
                              id="header8-checkbox"
                              onClick={this.handleClickEightSelect}
                              checked={this.state.defaultSelect}
                            />
                            <label
                              className="onoffswitch8-label"
                              htmlFor="header8-checkbox"
                            >
                              <span className="onoffswitch8-inner"></span>
                              <span className="onoffswitch8-switch"></span>
                            </label>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div key={index.index} className="wrapper-select">
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            <div className="right-block__select-description__photo-eight"></div>
                            <div>Корпус кожуха из нержавеющей стали</div>
                            {/*{index.caption}*/}
                            <div className="right-block__select-description__more-info">
                              <div onClick={this.handleOpenModalEight}>
                                подробнее
                              </div>
                              <div className="right-block__select-description__more-info__arrow"></div>
                            </div>
                              {/** ==================================== MODAL WINDOW ===================================== */}
                              {this.state.modalOpenEight ? (
                              <div className="wrapper-popup-steel-case">
                                <div className="wrapper-popup__left-block">
                                  <div className="wrapper-popup__block-photo">
                                    <div></div>
                                  </div>
                                </div>
                                <div className="wrapper-popup__right-block">
                                  <div className="wrapper-popup__right-block-header">
                                    <div className="wrapper-popup__right-block-header__photo"></div>
                                    <div className="wrapper-popup__right-block-header__characteristics">
                                      Корпус кожуха из нержавеющей стали
                                      {characteristicsEight === false ? (
                                        <span onClick={this.toggleCharacteristicsEight}>ХАРАКТЕРИСТИКИ</span>
                                      ) : (
                                        <span onClick={this.toggleCharacteristicsEight}>
                                          ПОКАЗАТЬ ОПИСАНИЕ
                                        </span>
                                      )}
                                    </div>
                                    <div onClick={this.handleCloseModalEight}className="wrapper-popup__right-block-header__close-modal"></div>
                                  </div>
                                  <div className="wrapper-popup__right-block-main">
                                    {characteristicsEight === false ? (
                                      <div className="wrapper-popup__right-block-main__description">
                                        Корпус кожуха из нержавеющей стали увеличивает срок службы турниектов в помещениях с неблагоприятной окружающей средой
                                      </div>
                                    ) : (
                                      <div className="wrapper-popup__right-block-main__characteristics">
                                        <div className="wrapper-popup__right-block-main__characteristics__heading">
                                          Характеристики корпуса кожуха
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>Материал:</div>
                                          <div>нержавеющая сталь</div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                  <div className="wrapper-popup__right-block-footer">
                                    <div className="wrapper-popup__right-block__footer__price">
                                      <span>Стоимость опции</span>
                                      3620,00
                                    </div>
                                    <div onClick={this.handleClickEightSelect} className="wrapper-popup__right-block__footer__button">
                                      Добавить
                                    </div>
                                  </div>
                                </div>
                              </div>
                              ) : null}
                            {/** ==================================== MODAL WINDOW ===================================== */}
                            
                            {/*{index.caption}*/}
                          </div>
                          <div className="right-block__select-description__plus-price">
                            {turnstile.page_view.model_module_list[1] !== undefined && turnstile.page_view.model_module_list[1].name === 'stainless' && '+' + turnstile.page_view.model_module_list[1].price}
                            {turnstile.page_view.model_module_list[2] !== undefined && turnstile.page_view.model_module_list[2].name === 'stainless' && '+' + turnstile.page_view.model_module_list[2].price}
                            {turnstile.page_view.model_module_list[3] !== undefined && turnstile.page_view.model_module_list[3].name === 'stainless' && '+' + turnstile.page_view.model_module_list[3].price}
                            {turnstile.page_view.model_module_list[4] !== undefined && turnstile.page_view.model_module_list[4].name === 'stainless' && '+' + turnstile.page_view.model_module_list[4].price}
                            {turnstile.page_view.model_module_list[5] !== undefined && turnstile.page_view.model_module_list[5].name === 'stainless' && '+' + turnstile.page_view.model_module_list[5].price}
                            {turnstile.page_view.model_module_list[6] !== undefined && turnstile.page_view.model_module_list[6].name === 'stainless' && '+' + turnstile.page_view.model_module_list[6].price}
                            {turnstile.page_view.model_module_list[7] !== undefined && turnstile.page_view.model_module_list[7].name === 'stainless' && '+' + turnstile.page_view.model_module_list[7].price}
                            {turnstile.page_view.model_module_list[8] !== undefined && turnstile.page_view.model_module_list[8].name === 'stainless' && '+' + turnstile.page_view.model_module_list[8].price}
                          </div>
                          <div className="onoffswitch8">
                            <input
                              type="checkbox"
                              name="onoffswitch"
                              className="onoffswitch8-checkbox"
                              id="header8-checkbox"
                              onChange={this.handleClickEightSelect}
                              checked={this.state.selectEight}
                            />
                            <label
                              className="onoffswitch8-label"
                              htmlFor="header8-checkbox"
                            >
                              <span className="onoffswitch8-inner"></span>
                              <span className="onoffswitch8-switch"></span>
                            </label>
                          </div>
                        </div>
                      );
                    }
                  })}
                {/** =================== BLOCK 9 =================== */}
                {/*
                  {turnstile.page_view.module_selectors
                    .slice(7, 8)  //(8, 9)
                    .map((index, key) => {
                      if (index.state === -1) {
                        return (
                          <div key={index.index} className="wrapper-select none">
                            <div
                              key={key.index}
                              className="right-block__select-description"
                            >
                              <div className='right-block__select-description__photo-nine'></div>
                                Конвертер расширения интерфейса Ethernet{/*{index.caption}
                                <div className='right-block__select-description__more-info'>
                                  <Link style={{textDecoration: 'none', color: '#1d68d9'}} to='/popup'>ПОДРОБНЕЕ</Link>
                                  <div className='right-block__select-description__more-info__arrow'></div>
                                </div>{/*{index.caption}
                            </div>
                            <div className='right-block__select-description__plus-price'>+10000</div>
                            <div className="onoffswitch9">
                              <input
                                type="checkbox"
                                name="onoffswitch"
                                className="onoffswitch9-checkbox"
                                id="header9-checkbox"
                                onClick={this.handleClickNineSelect}
                                checked={this.state.defaultSelect}
                              />
                              <label
                                className="onoffswitch9-label"
                                htmlFor="header9-checkbox"
                              >
                                <span className="onoffswitch9-inner"></span>
                                <span className="onoffswitch9-switch"></span>
                              </label>
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div key={index.index} className="wrapper-select">
                            <div
                              key={key.index}
                              className="right-block__select-description"
                            >
                              <div className='right-block__select-description__photo-nine'></div>
                              Конвертер расширения интерфейса Ethernet{/*{index.caption}
                              <div className='right-block__select-description__more-info'>
                                <Link style={{textDecoration: 'none', color: '#1d68d9'}} to='/popup'>ПОДРОБНЕЕ</Link>
                                <div className='right-block__select-description__more-info__arrow'></div>
                              </div>{/*{index.caption}
                            </div>
                            <div className='right-block__select-description__plus-price'>+10000</div>
                            <div className="onoffswitch9">
                              <input
                                type="checkbox"
                                name="onoffswitch"
                                className="onoffswitch9-checkbox"
                                id="header9-checkbox"
                                onChange={this.handleClickNineSelect}
                                checked={this.state.selectNine}
                              />
                              <label
                                className="onoffswitch9-label"
                                htmlFor="header9-checkbox"
                              >
                                <span className="onoffswitch9-inner"></span>
                                <span className="onoffswitch9-switch"></span>
                              </label>
                            </div>
                          </div>
                        );
                      }
                    })}
                  */}
                {/** =================== BLOCK 10 =================== */}
                {/*
                  {turnstile.page_view.module_selectors
                    .slice(7, 8) //(9, 10)
                    .map((index, key) => {
                      if (index.state === -1) {
                        return (
                          <div key={index.index} className="wrapper-select none">
                            <div
                              key={key.index}
                              className="right-block__select-description"
                            >
                              <div className='right-block__select-description__photo-ten'></div>
                              Контроллер расширения Bluetooth{/*{index.caption}
                              <div className='right-block__select-description__more-info'>
                                <Link style={{textDecoration: 'none', color: '#1d68d9'}} to='/popup'>ПОДРОБНЕЕ</Link>
                                <div className='right-block__select-description__more-info__arrow'></div>
                              </div>{/*{index.caption}
                            </div>
                            <div className='right-block__select-description__plus-price'>+10000</div>
                            <div className="onoffswitch10">
                              <input
                                type="checkbox"
                                name="onoffswitch"
                                className="onoffswitch10-checkbox"
                                id="header10-checkbox"
                                onClick={this.handleClickTenSelect}
                                checked={this.state.defaultSelect}
                              />
                              <label
                                className="onoffswitch10-label"
                                htmlFor="header10-checkbox"
                              >
                                <span className="onoffswitch10-inner"></span>
                                <span className="onoffswitch10-switch"></span>
                              </label>
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div key={index.index} className="wrapper-select">
                            <div
                              key={key.index}
                              className="right-block__select-description"
                            >
                              <div className='right-block__select-description__photo-ten'></div>
                              Контроллер расширения Bluetooth{/*{index.caption}
                              <div className='right-block__select-description__more-info'>
                                <Link style={{textDecoration: 'none', color: '#1d68d9'}} to='/popup'>ПОДРОБНЕЕ</Link>
                                <div className='right-block__select-description__more-info__arrow'></div>
                              </div>{/*{index.caption}
                            </div>
                            <div className='right-block__select-description__plus-price'>+10000</div>
                            <div className="onoffswitch10">
                              <input
                                type="checkbox"
                                name="onoffswitch"
                                className="onoffswitch10-checkbox"
                                id="header10-checkbox"
                                onChange={this.handleClickTenSelect}
                                checked={this.state.selectTen}
                              />
                              <label
                                className="onoffswitch10-label"
                                htmlFor="header10-checkbox"
                              >
                                <span className="onoffswitch10-inner"></span>
                                <span className="onoffswitch10-switch"></span>
                              </label>
                            </div>
                          </div>
                        );
                      }
                    })}
                {/** =================== ENDS BLOCK =================== */}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Turnstille;
