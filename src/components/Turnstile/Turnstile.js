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
      button_seria_state: 0,
      button_corpse_state: 0,
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
      module_main_photo: null,
      module_price: 0,
      error: null
    };
  }

  componentDidMount() {
    //let S = this;
    document.addEventListener('keydown', event => {
      if(event.keyCode === 27) {
        this.handleCloseModalOne();
        this.handleCloseModalTwo();
        this.handleCloseModalThree();
        this.handleCloseModalFour();
        this.handleCloseModalFive();
        this.handleCloseModalSix();
        this.handleCloseModalSeven();
        this.handleCloseModalEight()
      }
    });
    if (window.location.search === "") {
      axios
        .post(`${site}/turnstile`, {
          app_id: "UUID0",
          trigger: 1,
          trigger_state: 1,
          seria: 0,
          button_seria_state: this.state.button_seria_state,
          button_corpse_state: this.state.button_corpse_state,
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
                seria: this.state.seria, //TODO: make right
                button_seria_state: data.data.page_view.button_seria,
                button_corpse_state: data.data.page_view.button_corpse,
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
                seria: this.state.seria,
                button_seria_state: data.data.page_view.btn_seria,
                button_corpse_state: data.data.page_view.btn_corpse,
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
    let S = this;
    axios
      .post(`${site}/turnstile`, {
        app_id: "UUID1",
        trigger: 1,
        trigger_state: 1,
        button_seria_state: this.state.button_seria_state,
        button_corpse_state: this.state.button_corpse_state,
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
              button_seria_state: data.data.page_view.btn_seria,
              button_corpse_state: data.data.page_view.btn_corpse,
              seria: 0,
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
              S.setState({
                button_seria_state: data.data.page_view.btn_seria,
                button_corpse_state: data.data.page_view.btn_corpse,
                trigger: 1,
                trigger_state: 1
              })
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
    let S = this;
    axios
      .post(`${site}/turnstile`, {
        app_id: "UUID2",
        trigger: 2,
        trigger_state: 1,
        seria: 0,
        button_seria_state: this.state.button_seria_state,
        button_corpse_state: this.state.button_corpse_state,
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
              seria: 0,
              button_seria_state: data.data.page_view.btn_seria,
              button_corpse_state: data.data.page_view.btn_corpse,
              selectOne: data.data.page_view.module_selectors[0].state,
              selectTwo: data.data.page_view.module_selectors[1].state,
              selectThree: data.data.page_view.module_selectors[2].state,
              selectFour: data.data.page_view.module_selectors[3].state,
              selectFive: data.data.page_view.module_selectors[4].state,
              selectSix: data.data.page_view.module_selectors[5].state,
              selectSeven: data.data.page_view.module_selectors[6].state,
              selectEight: data.data.page_view.module_selectors[7].state,
              loadingData: true
            }, () => {
              S.setState({
                button_seria_state: data.data.page_view.btn_seria,
                button_corpse_state: data.data.page_view.btn_corpse,
                trigger: 2,
                trigger_state: 1
              })
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
        seria: 0,
        button_seria_state: this.state.button_seria_state,
        button_corpse_state: this.state.button_corpse_state,
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
              seria: 0,
              button_seria_state: data.data.page_view.btn_seria,
              button_corpse_state: data.data.page_view.btn_corpse,
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
              S.setState({
                button_seria_state: data.data.page_view.btn_seria,
                button_corpse_state: data.data.page_view.btn_corpse,
                trigger: 3,
                trigger_state: 1
              })
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
        seria: 0,
        button_seria_state: this.state.button_seria_state,
        button_corpse_state: this.state.button_corpse_state,
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
              seria: 0,
              button_seria_state: data.data.page_view.btn_seria,
              button_corpse_state: data.data.page_view.btn_corpse,
              selectOne: data.data.page_view.module_selectors[0].state,
              selectTwo: data.data.page_view.module_selectors[1].state,
              selectThree: data.data.page_view.module_selectors[2].state,
              selectFour: data.data.page_view.module_selectors[3].state,
              selectFive: data.data.page_view.module_selectors[4].state,
              selectSix: data.data.page_view.module_selectors[5].state,
              selectSeven: data.data.page_view.module_selectors[6].state,
              selectEight: data.data.page_view.module_selectors[7].state,
              loadingData: true
            },() => {
              S.setState({
                button_seria_state: data.data.page_view.btn_seria,
                button_corpse_state: data.data.page_view.btn_corpse,
                trigger: 3,
                trigger_state: 1
              })
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
          button_seria_state: Self.state.button_seria_state,
          button_corpse_state: Self.state.button_corpse_state,
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
              button_seria_state: data.data.page_view.btn_seria,
              button_corpse_state: data.data.page_view.btn_corpse,
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
          button_seria_state: Self.state.button_seria_state,
          button_corpse_state: Self.state.button_corpse_state,
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
              button_seria_state: data.data.page_view.btn_seria,
              button_corpse_state: data.data.page_view.btn_corpse,
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
          button_seria_state: Self.state.button_seria_state,
          button_corpse_state: Self.state.button_corpse_state,
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
              button_seria_state: data.data.page_view.btn_seria,
              button_corpse_state: data.data.page_view.btn_corpse,
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
          button_seria_state: Self.state.button_seria_state,
          button_corpse_state: Self.state.button_corpse_state,
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
              button_seria_state: data.data.page_view.btn_seria,
              button_corpse_state: data.data.page_view.btn_corpse,
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
          app_id: "UUID9",
          trigger: 9,
          button_seria_state: Self.state.button_seria_state,
          button_corpse_state: Self.state.button_corpse_state,
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
              button_seria_state: data.data.page_view.btn_seria,
              button_corpse_state: data.data.page_view.btn_corpse,
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
          app_id: "UUID10",
          trigger: 10,
          button_seria_state: Self.state.button_seria_state,
          button_corpse_state: Self.state.button_corpse_state,
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
              button_seria_state: data.data.page_view.btn_seria,
              button_corpse_state: data.data.page_view.btn_corpse,
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
          app_id: "UUID11",
          trigger: 11,
          button_seria_state: Self.state.button_seria_state,
          button_corpse_state: Self.state.button_corpse_state,
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
              button_seria_state: data.data.page_view.btn_seria,
              button_corpse_state: data.data.page_view.btn_corpse,
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
          app_id: "UUID12",
          trigger: 12,
          button_seria_state: Self.state.button_seria_state,
          button_corpse_state: Self.state.button_corpse_state,
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
              button_seria_state: data.data.page_view.btn_seria,
              button_corpse_state: data.data.page_view.btn_corpse,
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
  // handleClickNineSelect = () => {
  //   this.handleCloseModalOne();
  //   this.handleCloseModalTwo()
  //   this.handleCloseModalThree();
  //   this.handleCloseModalFour();
  //   this.handleCloseModalFive();
  //   this.handleCloseModalSix();
  //   this.handleCloseModalSeven();
  //   this.handleCloseModalEight();
  //   let Self = this;
  //   this.setState(
  //     {
  //       selectNine: +!this.state.selectNine
  //     },
  //     () => {
  //       send();
  //     }
  //   );
  //   function send() {
  //     axios
  //       .post(`${site}/turnstile`, {
  //         app_id: "UUID13",
  //         trigger: 13,
  //         trigger_state: Self.state.selectNine,
  //         seria: Self.state.seria,
  //         module_selectors: [
  //           {
  //             module: 0,
  //             state: Self.state.selectOne
  //           },
  //           {
  //             module: 1,
  //             state: Self.state.selectTwo
  //           },
  //           {
  //             module: 2,
  //             state: Self.state.selectThree
  //           },
  //           {
  //             module: 3,
  //             state: Self.state.selectFour
  //           },
  //           {
  //             module: 4,
  //             state: Self.state.selectFive < 0 ? 0 : Self.state.selectFive
  //           },
  //           {
  //             module: 5,
  //             state: Self.state.selectSix < 0 ? 0 : Self.state.selectSix
  //           },
  //           {
  //             module: 6,
  //             state: Self.state.selectSeven < 0 ? 0 : Self.state.selectSeven
  //           },
  //           {
  //             module: 7,
  //             state: Self.state.selectEight < 0 ? 0 : Self.state.selectEight
  //           },
  //           {
  //             module: 8,
  //             state: Self.state.selectNine < 0 ? 0 : Self.state.selectNine
  //           },
  //           {
  //             module: 9,
  //             state: Self.state.selectTen < 0 ? 0 : Self.state.selectTen
  //           }
  //         ]
  //       })
  //       .then(
  //         data => {
  //           Self.setState({
  //             turnstile: data.data,
  //             trigger: 13,
  //             selectOne: data.data.page_view.module_selectors[0].state,
  //             selectTwo: data.data.page_view.module_selectors[1].state,
  //             selectThree: data.data.page_view.module_selectors[2].state,
  //             selectFour: data.data.page_view.module_selectors[3].state,
  //             selectFive: data.data.page_view.module_selectors[4].state,
  //             selectSix: data.data.page_view.module_selectors[5].state,
  //             selectSeven: data.data.page_view.module_selectors[6].state,
  //             selectEight: data.data.page_view.module_selectors[7].state,
  //             selectNine: data.data.page_view.module_selectors[8].state,
  //             selectTen: data.data.page_view.module_selectors[9].state
  //           });
  //         },
  //         error => {
  //           Self.setState({
  //             loadingData: true,
  //             error
  //           });
  //         }
  //       )
  //       .catch(err => err);
  //   }
  // };
  // handleClickTenSelect = () => {
  //   this.handleCloseModalOne();
  //   this.handleCloseModalTwo()
  //   this.handleCloseModalThree();
  //   this.handleCloseModalFour();
  //   this.handleCloseModalFive();
  //   this.handleCloseModalSix();
  //   this.handleCloseModalSeven();
  //   this.handleCloseModalEight();
  //   let Self = this;
  //   this.setState(
  //     {
  //       selectTen: +!this.state.selectTen
  //     },
  //     () => {
  //       send();
  //     }
  //   );
  //   function send() {
  //     axios
  //       .post(`${site}/turnstile`, {
  //         app_id: "UUID14",
  //         trigger: 14,
  //         trigger_state: Self.state.selectTen,
  //         seria: Self.state.seria,
  //         module_selectors: [
  //           {
  //             module: 0,
  //             state: Self.state.selectOne
  //           },
  //           {
  //             module: 1,
  //             state: Self.state.selectTwo
  //           },
  //           {
  //             module: 2,
  //             state: Self.state.selectThree
  //           },
  //           {
  //             module: 3,
  //             state: Self.state.selectFour
  //           },
  //           {
  //             module: 4,
  //             state: Self.state.selectFive < 0 ? 0 : Self.state.selectFive
  //           },
  //           {
  //             module: 5,
  //             state: Self.state.selectSix < 0 ? 0 : Self.state.selectSix
  //           },
  //           {
  //             module: 6,
  //             state: Self.state.selectSeven < 0 ? 0 : Self.state.selectSeven
  //           },
  //           {
  //             module: 7,
  //             state: Self.state.selectEight < 0 ? 0 : Self.state.selectEight
  //           },
  //           {
  //             module: 8,
  //             state: Self.state.selectNine < 0 ? 0 : Self.state.selectNine
  //           },
  //           {
  //             module: 9,
  //             state: Self.state.selectTen < 0 ? 0 : Self.state.selectTen
  //           }
  //         ]
  //       })
  //       .then(
  //         data => {
  //           Self.setState({
  //             turnstile: data.data,
  //             trigger: 14,
  //             selectOne: data.data.page_view.module_selectors[0].state,
  //             selectTwo: data.data.page_view.module_selectors[1].state,
  //             selectThree: data.data.page_view.module_selectors[2].state,
  //             selectFour: data.data.page_view.module_selectors[3].state,
  //             selectFive: data.data.page_view.module_selectors[4].state,
  //             selectSix: data.data.page_view.module_selectors[5].state,
  //             selectSeven: data.data.page_view.module_selectors[6].state,
  //             selectEight: data.data.page_view.module_selectors[7].state,
  //             selectNine: data.data.page_view.module_selectors[8].state,
  //             selectTen: data.data.page_view.module_selectors[9].state
  //           });
  //         },
  //         error => {
  //           Self.setState({
  //             loadingData: true,
  //             error
  //           });
  //         }
  //       )
  //       .catch(err => err);
  //   }
  // };

  clearOptions = () => {
    localStorage.clear()
    //let S = this;
    if (window.location.search === "") {
      axios
        .post(`${site}/turnstile`, {
          //app_id: "UUIDclear",
          trigger: this.state.trigger,
          //trigger_state: 1,
          //seria: 0,
          button_seria_state : this.state.button_seria_state, 
          button_corpse_state : this.state.button_corpse_state, 
          reset_model : 1, 
          module_selectors: [
            {
              "module": 0,
              "state": 0
            },
            {
              "module": 1,
              "state": 0
            },
            {
              "module": 2,
              "state": 0
            },
            {
              "module": 3,
              "state": 0
            },
            {
              "module": 4,
              "state": 0
            },
            {
              "module": 5,
              "state": 0
            },
            {
              "module": 6,
              "state": 0
            },
            {
              "module": 7,
              "state": 0
            }
          ]
        })
        .then(
          data => {
            this.setState(
              {
                turnstile: data.data,
                trigger: 12,
                button_seria_state: data.data.page_view.btn_seria,
                button_corpse_state: data.data.page_view.btn_corpse,
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
              // () => {
              //   let idx = 1;
              //   for (let v of data.data.page_view.seria_buttons) {
              //     if (v.state === 1) {
              //       S.state.seria = idx;
              //     }
              //     idx++;
              //   }
              // }
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
                trigger: 12,
                button_seria_state: data.data.page_view.btn_seria,
                button_corpse_state: data.data.page_view.btn_corpse,
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
              // () => {
              //   let idx = 1;
              //   for (let v of data.data.page_view.seria_buttons) {
              //     if (v.state === 1) {
              //       S.state.seria = idx;
              //     }
              //     idx++;
              //   }
              // }
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
    this.setState({ modalOpenOne: true, module_main_photo: null });
    axios.post(`${site}/turnstile/module`, {
      app_id: "UUIDMODAL1",
      trigger: 5,
	    button_seria_state: this.state.button_seria_state, 
      button_corpse_state: this.state.button_corpse_state,
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
    .then(data => {
      this.setState({
        module_main_photo: data.data.module_main_photo,
        module_price: data.data.module_price
      })
    })
    .catch(err => console.log('Error: ' + err))
  };
  handleOpenModalTwo = () => {
    this.setState({ modalOpenTwo: true, module_main_photo: null });
    axios.post(`${site}/turnstile/module`, {
      app_id: "UUIDMODAL2",
      trigger: 6,
	    button_seria_state : this.state.button_seria_state, 
      button_corpse_state : this.state.button_corpse_state,
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
    .then(data => {
      this.setState({
        module_main_photo: data.data.module_main_photo,
        module_price: data.data.module_price
      })
    })
    .catch(err => console.log('Error: ' + err))
  };
  handleOpenModalThree = () => {
    this.setState({ modalOpenThree: true, module_main_photo: null });
    axios.post(`${site}/turnstile/module`, {
      app_id: "UUIDMODAL3",
      trigger: 7,
	    button_seria_state : this.state.button_seria_state, 
      button_corpse_state : this.state.button_corpse_state,
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
    .then(data => {
      this.setState({
        module_main_photo: data.data.module_main_photo,
        module_price: data.data.module_price
      })
    })
    .catch(err => console.log('Error: ' + err))
  };
  handleOpenModalFour = () => {
    this.setState({ modalOpenFour: true, module_main_photo: null });
    axios.post(`${site}/turnstile/module`, {
      app_id: "UUIDMODAL4",
      trigger: 8,
	    button_seria_state : this.state.button_seria_state, 
      button_corpse_state : this.state.button_corpse_state,
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
    .then(data => {
      this.setState({
        module_main_photo: data.data.module_main_photo,
        module_price: data.data.module_price
      })
    })
    .catch(err => console.log('Error: ' + err))
  };
  handleOpenModalFive = () => {
    this.setState({ modalOpenFive: true, module_main_photo: null });
    axios.post(`${site}/turnstile/module`, {
      app_id: "UUIDMODAL5",
      trigger: 9,
	    button_seria_state : this.state.button_seria_state, 
      button_corpse_state : this.state.button_corpse_state,
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
    .then(data => {
      this.setState({
        module_main_photo: data.data.module_main_photo,
        module_price: data.data.module_price
      })
    })
    .catch(err => console.log('Error: ' + err))
  };
  handleOpenModalSix = () => {
    this.setState({ modalOpenSix: true, module_main_photo: null });
    axios.post(`${site}/turnstile/module`, {
      app_id: "UUIDMODAL6",
      trigger: 10,
	    button_seria_state : this.state.button_seria_state, 
      button_corpse_state : this.state.button_corpse_state,
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
    .then(data => {
      this.setState({
        module_main_photo: data.data.module_main_photo,
        module_price: data.data.module_price
      })
    })
    .catch(err => console.log('Error: ' + err))
  };
  handleOpenModalSeven = () => {
    this.setState({ modalOpenSeven: true, module_main_photo: null });
    axios.post(`${site}/turnstile/module`, {
      app_id: "UUIDMODAL7",
      trigger: 11,
	    button_seria_state : this.state.button_seria_state, 
      button_corpse_state : this.state.button_corpse_state,
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
    .then(data => {
      this.setState({
        module_main_photo: data.data.module_main_photo,
        module_price: data.data.module_price
      })
    })
    .catch(err => console.log('Error: ' + err))
  };
  handleOpenModalEight = () => {
    this.setState({ modalOpenEight: true, module_main_photo: null });
    axios.post(`${site}/turnstile/module`, {
      app_id: "UUIDMODAL8",
      trigger: 12,
	    button_seria_state : this.state.button_seria_state, 
      button_corpse_state : this.state.button_corpse_state,
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
    .then(data => {
      this.setState({
        module_main_photo: data.data.module_main_photo,
        module_price: data.data.module_price
      })
    })
    .catch(err => console.log('Error: ' + err))
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
      module_main_photo,
      module_price,
      error
    } = this.state;
    let data = JSON.stringify(turnstile.page_view)
    localStorage.setItem('data', data)    //console.log("Trigger " + this.state.trigger)
    //console.log("REQ_BTN_SERIA " + this.state.button_seria_state, "REQ_BTN_CORPSE " + this.state.button_corpse_state)
    //console.log("DATA_BTN_SERIA " + turnstile.page_view.btn_seria, "DATA_BTN_CORPSE " + turnstile.page_view.btn_corpse)
    //console.log(turnstile.page_view ? "RES_DATA_BTN_SERIA " + turnstile.page_view.btn_seria : null);
    //console.log(turnstile.page_view ? "RES_DATA_BTN_CORPSE " + turnstile.page_view.btn_corpse : null);
    console.log(turnstile)
    //console.log(localStorage);
    //console.log(this.state.selectOne)
    //console.log(this.state.selectTwo)
    //console.log(this.state.selectThree)
    //console.log(this.state.selectFour)
    //console.log(this.state.selectFive)
    //console.log(this.state.selectSix)
    //console.log(this.state.selectSeven)
    //console.log(this.state.selectEight)
    //console.log(this.state)
    //console.log(module_main_photo)
    //console.log(module_price)

    let photoOne = turnstile.page_view
      ? turnstile.page_view.model_main_photo
      : null;
    //photoOne = site + photoOne;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!loadingData) { 
      return (<Loader />);
    } else if(turnstile.result.code === -1 || turnstile.length === 0) { // FOR WINDOW.LOCATION ?model=(NOT FOUND)
      return (<div style={{fontSize: '30px'}}>СТРАНИЦА НЕ НАЙДЕНА</div>)
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

                  {/** ====================== LEFT TOP BLOCK ( STR ) ====================== */}
                    {turnstile.page_view.btn_seria === 0 
                      ? 
                        <>
                            <div
                              onClick={this.sendDataLeftTopBlockOnServer}
                              className="description-choice-str open"
                            >
                              STR
                            </div>
                        </> 
                      : <>
                          <div
                              onClick={this.sendDataLeftTopBlockOnServer}
                              className="description-choice-str"
                            >
                              STR
                            </div>
                        </>
                    }

                    {/** ====================== RIGHT TOP BLOCK ( STX ) ====================== */}

                    {turnstile.page_view.btn_seria === 1 
                      ? 
                        <>
                          <div
                            className="description-choice-stx open"
                            onClick={this.sendDataRightTopBlockOnServer}
                          >
                            STX
                          </div>
                        </> 
                      : 
                        <>
                          <div
                            className="description-choice-stx"
                            onClick={this.sendDataRightTopBlockOnServer}
                          >
                            STX
                          </div>
                        </>
                      }
                    
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
                  <a 
                    className="description-model"
                    href={turnstile.page_view.model_base_model} 
                    //href={turnstile.page_view.model_name.model_base_model} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{textDecoration: 'none'}}
                  >
                      БАЗОВАЯ МОДЕЛЬ {turnstile.page_view.model_module_list.length - 1 >= 1 ? '(' + turnstile.page_view.model_module_list[0].price + ')' : null}
                    <div className='right-block__select-description__more-info__arrow'></div>
                  </a>
                </div>
                <div className="right-block__bottom-description__options">
                  <div className="right-block__bottom-description__options__choice-optoins">
                    {turnstile.page_view.model_module_list.length - 1 === 1 ? String('+') + (turnstile.page_view.model_module_list.length - 1) + ' ОПЦИЯ' : null}
                    {turnstile.page_view.model_module_list.length - 1 > 1 ? String('+') + (turnstile.page_view.model_module_list.length - 1) + ' ОПЦИИ' : null}
                    {turnstile.page_view.model_module_list.length - 1 >= 5 ? String('+') + (turnstile.page_view.model_module_list.length - 1) + ' ОПЦИЙ' : null}
                  </div>
                  <div
                    onClick={this.clearOptions}
                    className="right-block__bottom-description__options__clear-options"
                  >
                    {turnstile.page_view.model_module_list.length - 1 >= 1 ? 'СБРОСИТЬ' : null}
                  </div>
                </div>
              </div>
              <div className="right-block__center">
                <div className="right-block__center-description">
                  Исполнение
                </div>
                <div className="right-block__center-button">

                  {/** ====================== LEFT BOTTOM BLOCK ( COMPACT ) ====================== */}
                    {turnstile.page_view.btn_corpse === 0 
                      ? 
                        <>
                          <div
                            onClick={this.sendDataLeftBottomBlockOnServer}
                            className="right-block__center-button__left-button open"
                          >
                            Компактный
                          </div>
                        </> 
                      : 
                        <>
                          <div
                            onClick={this.sendDataLeftBottomBlockOnServer}
                            className="right-block__center-button__left-button"
                          >
                            Компактный
                          </div>
                        </>
                    }

                    {/** ====================== LEFT BOTTOM BLOCK ( COMPACT ) ====================== */}
                    {turnstile.page_view.btn_corpse === 1 
                      ? 
                        <>
                          <div
                            onClick={this.sendDataRightBottomBlockOnServer}
                            className="right-block__center-button__right-button open"
                          >
                            Тумбовый
                          </div>
                        </> 
                      : 
                        <>
                        <div
                          onClick={this.sendDataRightBottomBlockOnServer}
                          className="right-block__center-button__right-button"
                        >
                            Тумбовый
                          </div>
                        </>
                    }
                </div>
                <div className='right-block__bottom__more-modules'>Дополнительные модули</div>
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
                            {turnstile.page_view.model_module_list[1] !== undefined 
                              && turnstile.page_view.model_module_list[1].name === 'ep2000' 
                              && turnstile.page_view.model_module_list[1].price
                            }
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
                                ПОДРОБНЕЕ
                              </div>
                              <div className="right-block__select-description__more-info__arrow"></div>
                            </div>
                              {/** ==================================== MODAL WINDOW ===================================== */}
                              {this.state.modalOpenOne ? (
                                <div className="wrapper-popup">
                                  <div className="wrapper-popup__left-block">
                                    <div className="wrapper-popup__block-photo">
                                      <img src={module_main_photo} alt='' />
                                    </div>
                                  </div>
                                  <div className="wrapper-popup__right-block">
                                    <div className="wrapper-popup__right-block-header">
                                      <div className="wrapper-popup__right-block-header__photo"></div>
                                      <div className="wrapper-popup__right-block-header__characteristics">
                                        {turnstile.page_view.module_name
                                        ? turnstile.page_view.module_name 
                                        :
                                        ('Универсальный сетевой контроллер расширения EP-2000')}
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
                                      {characteristicsOne === false ?
                                        <>
                                        {turnstile.page_view.module_desc
                                        ? turnstile.page_view.module_desc
                                        : <div className="wrapper-popup__right-block-main__description">
                                          <p>Модуль расширения “EP-2000” предназначен для расширения функционала турникетов CARDDEX.</p>
                                          <strong>Данный модуль оснащен интерфейсами:</strong>
                                          <ul>
                                            <li>Ethernet;</li>
                                            <li>RS-485;</li>
                                            <li>UART;</li>
                                            <li>I2C.</li>
                                          </ul>
                                          <p>Также оснащен дополнительным выходом для подключения различных исполнительных устройств. Встроенное ПО СКУД “CARDDEX IMS/AR” с функцией “Учет рабочего времени” избавляет от необходимости использовать внешние серверы программного обеспечения.</p>
                                          <strong>Широкий набор встроенных каналов подключения позволяет обеспечить:</strong>
                                          <ul>
                                            <li>одновременную работу с внешними считывателями бесконтактных карт, биометрическими сканерами отпечатков пальцев или универсальным 2D сканером QR-кодов;</li>
                                            <li>подключение до 32 дверных контроллеров CARDDEX по “общей шине” RS-485;</li>
                                            <li>подключение секции “Антипаника” с электромагнитным замком.</li>
                                          </ul>
                                          <strong>Энергонезависимая память контроллера позволяет хранить:</strong>
                                          <ul>
                                            <li>50 000 бесконтактных ключей;</li>
                                            <li>500 отпечатков пальцев;</li>
                                            <li>5 000 QR-кодов;</li>
                                            <li>250 000 событий;</li>
                                          </ul>
                                        </div>
                                        }
                                        </>
                                       : 
                                        <>
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
                                                Локальная память ключей:
                                              </div>
                                              <div>
                                                50000 ключей
                                              </div>
                                            </div>
                                            <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                              <div>
                                                Локальная память событий:
                                              </div>
                                              <div>
                                                250000 ключей
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
                                        </>
                                      }
                                    </div>
                                    <div className="wrapper-popup__right-block-footer">
                                      <div className="wrapper-popup__right-block__footer__price">
                                        <span>Стоимость опции</span>
                                        {module_price}
                                      </div>
                                      <div>
                                        {turnstile.page_view.module_selectors[0].state === 1
                                          ? 
                                          <>
                                            <div
                                              className="disabled_button"
                                            >
                                              Добавить
                                            </div>
                                            </>
                                          : 
                                          <>
                                            <div
                                              onClick={this.handleClickOneSelect}
                                              className="wrapper-popup__right-block__footer__button"
                                            >
                                              Добавить
                                            </div>
                                          </>
                                        }
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
                            {turnstile.page_view.model_module_list[0] !== undefined && turnstile.page_view.model_module_list[0].name === 'emarine' && '+' +  turnstile.page_view.model_module_list[0].price}
                            {turnstile.page_view.model_module_list[1] !== undefined && turnstile.page_view.model_module_list[1].name === 'emarine' && '+' +  turnstile.page_view.model_module_list[1].price}
                            {turnstile.page_view.model_module_list[2] !== undefined && turnstile.page_view.model_module_list[2].name === 'emarine' && '+' +  turnstile.page_view.model_module_list[2].price}
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
                                ПОДРОБНЕЕ
                              </div>
                              <div className="right-block__select-description__more-info__arrow"></div>
                            </div>
                              {/** ==================================== MODAL WINDOW ===================================== */}
                              {this.state.modalOpenTwo ? (
                                <div className="wrapper-popup-emmarin">
                                  <div className="wrapper-popup__left-block">
                                    <div className="wrapper-popup__block-photo">
                                      <img src={module_main_photo} alt='' />
                                    </div>
                                  </div>
                                  <div className="wrapper-popup__right-block">
                                    <div className="wrapper-popup__right-block-header">
                                      <div className="wrapper-popup__right-block-header__photo"></div>
                                      <div className="wrapper-popup__right-block-header__characteristics">
                                        {turnstile.page_view.module_name
                                        ? turnstile.page_view.module_name
                                        : 'RFID идентификаторы EMMarin 125kHZ'
                                        }
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
                                        <>
                                        {turnstile.page_view.module_desc
                                          ? turnstile.page_view.module_desc
                                          :                                        
                                          <div className="wrapper-popup__right-block-main__description">
                                            Встраиваемый модуль RFID считывателей
                                            “RE-02” предназначен для
                                            обеспечения доступа авторизованным
                                            пользователям, посредством
                                            бесконтактных идентификаторов
                                            стандарта EMMarin
                                          </div>
                                        }
                                        </>
                                      ) : (
                                        <div className="wrapper-popup__right-block-main__characteristics">
                                          <div className="wrapper-popup__right-block-main__characteristics__heading">
                                            Считыватель EMMarine:
                                          </div>
                                          <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                            <div>cтандарт считывания:</div>
                                            <div>EM4100</div>
                                          </div>
                                          <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                            <div>рабочая частота:</div>
                                            <div>125 КГц</div>
                                          </div>
                                          <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                            <div>рабочее напряжение:</div>
                                            <div>5 В</div>
                                          </div>
                                          <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                            <div>потребляемый ток:</div>
                                            <div>50 мА</div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                    <div className="wrapper-popup__right-block-footer">
                                      <div className="wrapper-popup__right-block__footer__price">
                                        <span>Стоимость опции</span>
                                        {module_price}
                                      </div>
                                      <div>
                                        {turnstile.page_view.module_selectors[1].state === 1
                                          ? 
                                          <>
                                            <div
                                              className="disabled_button"
                                            >
                                              Добавить
                                            </div>
                                            </>
                                          : 
                                          <>
                                            <div
                                              onClick={this.handleClickTwoSelect}
                                              className="wrapper-popup__right-block__footer__button"
                                            >
                                              Добавить
                                            </div>
                                          </>
                                        }
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : null}
                              {/** ==================================== MODAL WINDOW ===================================== */}
                            
                            {/*{index.caption}*/}
                          </div>
                          <div className="right-block__select-description__plus-price">
                            {turnstile.page_view.model_module_list[1] !== undefined && turnstile.page_view.model_module_list[1].name === 'emarine' && '+' + turnstile.page_view.model_module_list[1].price}
                            {turnstile.page_view.model_module_list[2] !== undefined && turnstile.page_view.model_module_list[2].name === 'emarine' && '+' + turnstile.page_view.model_module_list[2].price}
                            {turnstile.page_view.model_module_list[3] !== undefined && turnstile.page_view.model_module_list[3].name === 'emarine' && '+' + turnstile.page_view.model_module_list[3].price}
                            {turnstile.page_view.model_module_list[4] !== undefined && turnstile.page_view.model_module_list[4].name === 'emarine' && '+' + turnstile.page_view.model_module_list[4].price}
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
                            <div>
                            {turnstile.page_view.module_name
                            ? turnstile.page_view.module_name
                            : 'RFID идентификаторы Mifare 13.56MHz'
                            }
                            </div>
                            {/*{index.caption}*/}
                            <div className="right-block__select-description__more-info">
                              <div onClick={this.handleOpenModalThree}>
                                ПОДРОБНЕЕ
                              </div>
                              <div className="right-block__select-description__more-info__arrow"></div>
                            </div>
                              {/** ==================================== MODAL WINDOW ===================================== */}
                              {this.state.modalOpenThree ? (
                              <div className="wrapper-popup-mifare">
                                <div className="wrapper-popup__left-block">
                                  <div className="wrapper-popup__block-photo">
                                    <img src={module_main_photo} alt='' />
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
                                      <>
                                        {turnstile.page_view.module_desc
                                          ? turnstile.page_view.module_desc
                                          :
                                        <p>Встраиваемый модуль RFID считывателей “RM-02” предназначен для обеспечения доступа авторизованным пользователям, посредством бесконтактных идентификаторов стандарта Mifare.</p>
                                        }
                                      </>
                                      </div>
                                    ) : (
                                      <div className="wrapper-popup__right-block-main__characteristics">
                                        <div className="wrapper-popup__right-block-main__characteristics__heading">
                                          Считыватель Mifare:
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>стандарт считывания:</div>
                                          <div>Mifare 1K, Mifare 4K, Mifare Ultralight</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>рабочая частота:</div>
                                          <div>13,56 МГц</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>рабочее напряжение:</div>
                                          <div>5В</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>
                                            потребляемый ток:
                                          </div>
                                          <div>{"<100 мА"}</div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                  <div className="wrapper-popup__right-block-footer">
                                    <div className="wrapper-popup__right-block__footer__price">
                                      <span>Стоимость опции</span>
                                      {module_price}
                                    </div>
                                      <div>
                                        {turnstile.page_view.module_selectors[2].state === 1
                                          ? 
                                          <>
                                            <div
                                              className="disabled_button"
                                            >
                                              Добавить
                                            </div>
                                            </>
                                          : 
                                          <>
                                            <div
                                              onClick={this.handleClickThreeSelect}
                                              className="wrapper-popup__right-block__footer__button"
                                            >
                                              Добавить
                                            </div>
                                          </>
                                        }
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
                                <div style={{marginTop: '2px'}} onClick={this.handleOpenModalFour}>
                                  ПОДРОБНЕЕ
                                </div>
                                <div style={{marginTop: '2px'}} className="right-block__select-description__more-info__arrow"></div>
                              </div>
                                {/** ==================================== MODAL WINDOW ===================================== */}
                                {this.state.modalOpenFour ? (
                                <div className="wrapper-popup-bio">
                                  <div className="wrapper-popup__left-block">
                                    <div className="wrapper-popup__block-photo">
                                      <img src={module_main_photo} alt='' />
                                    </div>
                                  </div>
                                  <div className="wrapper-popup__right-block">
                                    <div className="wrapper-popup__right-block-header">
                                      <div className="wrapper-popup__right-block-header__photo"></div>
                                      <div className="wrapper-popup__right-block-header__characteristics">
                                        {turnstile.page_view.module_name
                                        ? turnstile.page_view.module_name
                                        : 'Биометрическая идентификация по отпечаткам пальцев'
                                        }
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
                                        <>
                                          {turnstile.page_view.module_desc
                                          ? turnstile.page_view.module_desc
                                          :
                                            <p>Встраиваемые модули биометрической идентификации “FRE-02” и “FRM-02” предназначены для обеспечения доступа авторизованным пользователям посредством сканирования отпечатка пальца. В данный модуль встроены RFID считыватели стандартов EMMarin или Mifare.</p>
                                          }
                                        </>
                                        </div>
                                      ) : (
                                        <div className="wrapper-popup__right-block-main__characteristics">
                                        <div className="wrapper-popup__right-block-main__characteristics__heading">
                                          Технические характеристики биосканеров
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
                                        <div className="wrapper-popup__right-block-main__characteristics__heading">
                                          Технические характеристики считывателей
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__heading">
                                          Считыватель EMMarin:
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>стандарт считывания:</div>
                                          <div>EM4100</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>рабочая частота:</div>
                                          <div>125КГц</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>
                                            рабочее напряжение
                                          </div>
                                          <div>5В</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>
                                            потребляемый ток:
                                          </div>
                                          <div>50мА</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__heading">
                                          Считыватель Mifire:
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>стандарт считывания:</div>
                                          <div>Mifare 1K, Mifare 4K, Mifare Ultralight.</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>рабочая частота:</div>
                                          <div>13,56 МГц.</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>
                                            рабочее напряжение
                                          </div>
                                          <div>5В</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>
                                            потребляемый ток:
                                          </div>
                                          <div>{'<100мА'}</div>
                                        </div>
                                        </div>
                                      )}
                                    </div>
                                    <div className="wrapper-popup__right-block-footer">
                                      <div className="wrapper-popup__right-block__footer__price">
                                        <span>Стоимость опции</span>
                                        {module_price}
                                      </div>
                                      <div>
                                        {turnstile.page_view.module_selectors[3].state === 1
                                          ? 
                                          <>
                                            <div
                                              className="disabled_button"
                                            >
                                              Добавить
                                            </div>
                                            </>
                                          : 
                                          <>
                                            <div
                                              onClick={this.handleClickFourSelect}
                                              className="wrapper-popup__right-block__footer__button"
                                            >
                                              Добавить
                                            </div>
                                          </>
                                        }
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
                              <div style={{marginTop: '2px'}} onClick={this.handleOpenModalFive}>
                                ПОДРОБНЕЕ
                              </div>
                              <div style={{marginTop: '2px'}} className="right-block__select-description__more-info__arrow"></div>
                            </div>
                              {/** ==================================== MODAL WINDOW ===================================== */}
                              {this.state.modalOpenFive ? (
                              <div className="wrapper-popup-time">
                                <div className="wrapper-popup__left-block">
                                  <div className="wrapper-popup__block-photo">
                                    <img src={module_main_photo} alt='' />
                                  </div>
                                </div>
                                <div className="wrapper-popup__right-block">
                                  <div className="wrapper-popup__right-block-header">
                                    <div className="wrapper-popup__right-block-header__photo"></div>
                                    <div className="wrapper-popup__right-block-header__characteristics">
                                      {turnstile.page_view.module_name
                                      ? turnstile.page_view.module_name
                                      : 'Информационный дисплей учета рабочего времени'
                                      }
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
                                      <>
                                      {turnstile.page_view.module_desc
                                      ? turnstile.page_view.module_desc
                                      :
                                        <div className="wrapper-popup__right-block-main__description">
                                          <p>Модули учета рабочего времени “TRE-05” и “TRM-05” предназначены для организации контроля доступа и учета рабочего времени персонала.</p>
                                          <strong>Интегрированный в панель идентификации дисплей отображает:</strong>
                                          <ul>
                                            <li>Ф.И.О. сотрудника;</li>
                                            <li>время его прихода на работу.</li>
                                          </ul>
                                          Встроенное ПО “CARDDEX IMS/AR” позволяет развернуть полноценную систему учета рабочего времени и контроля доступа, без дополнительного выделенного сервера.
                                          Идентификация пользователей происходит посредством биометрического сканера или RFID считывателя.
                                        </div>
                                        }
                                      </>
                                    ) : (
                                      <div className="wrapper-popup__right-block-main__characteristics">
                                        <div className="wrapper-popup__right-block-main__characteristics__heading">
                                          Технические характеристики биосканеров
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
                                        <div className="wrapper-popup__right-block-main__characteristics__heading">
                                          Технические характеристики считывателей
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__heading">
                                          Считыватель EMMarin:
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>стандарт считывания:</div>
                                          <div>EM4100</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>рабочая частота:</div>
                                          <div>125КГц</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>
                                            рабочее напряжение
                                          </div>
                                          <div>5В</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>
                                            потребляемый ток:
                                          </div>
                                          <div>50мА</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__heading">
                                          Считыватель Mifire:
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>стандарт считывания:</div>
                                          <div>Mifare 1K, Mifare 4K, Mifare Ultralight.</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>рабочая частота:</div>
                                          <div>13,56 МГц.</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>
                                            рабочее напряжение
                                          </div>
                                          <div>5В</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>
                                            потребляемый ток:
                                          </div>
                                          <div>{'<100мА'}</div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                  <div className="wrapper-popup__right-block-footer">
                                    <div className="wrapper-popup__right-block__footer__price">
                                      <span>Стоимость опции</span>
                                      {module_price}
                                    </div>
                                    <div>
                                        {turnstile.page_view.module_selectors[4].state === 1
                                          ? 
                                          <>
                                            <div
                                              className="disabled_button"
                                            >
                                              Добавить
                                            </div>
                                            </>
                                          : 
                                          <>
                                            <div
                                              onClick={this.handleClickFiveSelect}
                                              className="wrapper-popup__right-block__footer__button"
                                            >
                                              Добавить
                                            </div>
                                          </>
                                        }
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
                              <div style={{marginTop: '2px'}} onClick={this.handleOpenModalSix}>
                                ПОДРОБНЕЕ
                              </div>
                              <div style={{marginTop: '2px'}} className="right-block__select-description__more-info__arrow"></div>
                            </div>
                              {/** ==================================== MODAL WINDOW ===================================== */}
                              {this.state.modalOpenSix ? (
                              <div className="wrapper-popup-single-visit">
                                <div className="wrapper-popup__left-block">
                                  <div className="wrapper-popup__block-photo">
                                    <img src={module_main_photo} alt='' />
                                  </div>
                                </div>
                                <div className="wrapper-popup__right-block">
                                  <div className="wrapper-popup__right-block-header">
                                    <div className="wrapper-popup__right-block-header__photo"></div>
                                    <div className="wrapper-popup__right-block-header__characteristics">
                                      {turnstile.page_view.module_name
                                      ? turnstile.page_view.module_name
                                      : 'Контроль разовых посещений по 2D штрих-кодам'
                                      }
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
                                      <>
                                      {turnstile.page_view.module_desc
                                        ? turnstile.page_view.module_desc
                                        :
                                        <p>Модуль билетного доступа по QR-кодам “QS-03” используется в турникетах для контроля доступа в кинотеатры, музеи,выставочные центры, спортивные мероприятия и т.д. В качестве устройства идентификации используется 2D сканер. Данное решение предназначено для разового прохода посетителей по приглашению, пропуску или билету, смартфону, содержащему QR-код.</p>
                                      }
                                      </>
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
                                          <div>
                                            Скорость сканирования:
                                          </div>
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
                                      {module_price}
                                    </div>
                                    <div>
                                        {turnstile.page_view.module_selectors[5].state === 1
                                          ? 
                                          <>
                                            <div
                                              className="disabled_button"
                                            >
                                              Добавить
                                            </div>
                                            </>
                                          : 
                                          <>
                                            <div
                                              onClick={this.handleClickSixSelect}
                                              className="wrapper-popup__right-block__footer__button"
                                            >
                                              Добавить
                                            </div>
                                          </>
                                        }
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
                              <div style={{marginTop: '2px'}} onClick={this.handleOpenModalSeven}>
                                ПОДРОБНЕЕ
                              </div>
                              <div style={{marginTop: '2px'}} className="right-block__select-description__more-info__arrow"></div>
                            </div>
                              {/** ==================================== MODAL WINDOW ===================================== */}
                              {this.state.modalOpenSeven ? (
                              <div className="wrapper-popup-guest2d">
                                <div className="wrapper-popup__left-block">
                                  <div className="wrapper-popup__block-photo">
                                    <img src={module_main_photo} alt='' />
                                  </div>
                                </div>
                                <div className="wrapper-popup__right-block">
                                  <div className="wrapper-popup__right-block-header">
                                    <div className="wrapper-popup__right-block-header__photo"></div>
                                    <div className="wrapper-popup__right-block-header__characteristics">
                                      {turnstile.page_view.module_name
                                      ? turnstile.page_view.module_name
                                      : 'Гостевой доступ по 2D штрих-кодам'
                                      }
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
                                      <>
                                        {turnstile.page_view.module_desc
                                        ? turnstile.page_view.module_desc
                                        :
                                          <div className="wrapper-popup__right-block-main__description">
                                            Модули гостевого доступа по QR-кодам “QRE-04” и “QRM-04”
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
                                        }
                                      </>
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
                                          <div>
                                            Скорость сканирования:
                                          </div>
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
                                        <div className="wrapper-popup__right-block-main__characteristics__heading">
                                          Технические характеристики считывателей
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__heading">
                                          Считыватель EMMarin:
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>стандарт считывания:</div>
                                          <div>EM4100</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>рабочая частота:</div>
                                          <div>125КГц</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>
                                            рабочее напряжение
                                          </div>
                                          <div>5В</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>
                                            потребляемый ток:
                                          </div>
                                          <div>50мА</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__heading">
                                          Считыватель Mifire:
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>стандарт считывания:</div>
                                          <div>Mifare 1K, Mifare 4K, Mifare Ultralight.</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>рабочая частота:</div>
                                          <div>13,56 МГц.</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>
                                            рабочее напряжение
                                          </div>
                                          <div>5В</div>
                                        </div>
                                        <div className="wrapper-popup__right-block-main__characteristics__wrapper-options">
                                          <div>
                                            потребляемый ток:
                                          </div>
                                          <div>{'<100мА'}</div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                  <div className="wrapper-popup__right-block-footer">
                                    <div className="wrapper-popup__right-block__footer__price">
                                      <span>Стоимость опции</span>
                                      {module_price}
                                    </div>
                                      <div>
                                        {turnstile.page_view.module_selectors[6].state === 1
                                          ? 
                                          <>
                                            <div
                                              className="disabled_button"
                                            >
                                              Добавить
                                            </div>
                                            </>
                                          : 
                                          <>
                                            <div
                                              onClick={this.handleClickSevenSelect}
                                              className="wrapper-popup__right-block__footer__button"
                                            >
                                              Добавить
                                            </div>
                                          </>
                                        }
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
                              <div style={{marginTop: '2px'}} onClick={this.handleOpenModalEight}>
                                ПОДРОБНЕЕ
                              </div>
                              <div style={{marginTop: '2px'}} className="right-block__select-description__more-info__arrow"></div>
                            </div>
                              {/** ==================================== MODAL WINDOW ===================================== */}
                              {this.state.modalOpenEight ? (
                              <div className="wrapper-popup-steel-case">
                                <div className="wrapper-popup__left-block">
                                  <div className="wrapper-popup__block-photo">
                                    <img src={module_main_photo} alt='' />
                                  </div>
                                </div>
                                <div className="wrapper-popup__right-block">
                                  <div className="wrapper-popup__right-block-header">
                                    <div className="wrapper-popup__right-block-header__photo"></div>
                                    <div className="wrapper-popup__right-block-header__characteristics">
                                      {turnstile.page_view.module_name
                                      ? turnstile.page_view.module_name
                                      : 'Корпус кожуха из нержавеющей стали'
                                      }
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
                                      <>
                                      {turnstile.page_view.module_desc
                                      ? turnstile.page_view.module_desc
                                      :
                                      <div className="wrapper-popup__right-block-main__description">
                                        <p>Корпус кожуха из нержавеющей стали увеличивает срок службы турниектов в помещениях с неблагоприятной окружающей средой</p>
                                      </div>
                                      }
                                      </>
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
                                      {module_price}
                                    </div>
                                      <div>
                                        {turnstile.page_view.module_selectors[7].state === 1
                                          ? 
                                          <>
                                            <div
                                              className="disabled_button"
                                            >
                                              Добавить
                                            </div>
                                            </>
                                          : 
                                          <>
                                            <div
                                              onClick={this.handleClickEightSelect}
                                              className="wrapper-popup__right-block__footer__button"
                                            >
                                              Добавить
                                            </div>
                                          </>
                                        }
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