import React, { Component } from "react";
//import { Link } from "react-router-dom";
//import queryString from "query-string";
//import Checkboxes from "./Checkboxes";
import site from "../../Global";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
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
      selectOne: 0,
      selectTwo: 0,
      selectThree: 0,
      selectFour: 0,
      selectFive: 0,
      selectSix: 0,
      selectSeven: 0,
      selectEight: 0,
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
            this.setState({
              turnstile: data.data,
              trigger: 1,
              seria: 1, //TODO: make right
              trigger_state: 1,
              selectOne: data.data.page_view.module_selectors[0].state,
              selectTwo:  data.data.page_view.module_selectors[1].state,
              selectThree:  data.data.page_view.module_selectors[2].state,
              selectFour:  data.data.page_view.module_selectors[3].state,
              selectFive:  data.data.page_view.module_selectors[4].state,
              selectSix:  data.data.page_view.module_selectors[5].state,
              selectSeven:  data.data.page_view.module_selectors[6].state,
              selectEight:  data.data.page_view.module_selectors[7].state,
              loadingData: true
            }, () => {
              let idx = 1;
              for( let v of data.data.page_view.seria_buttons ) {
                if ( v.state === 1 ) {
                  S.state.seria = idx;
                }
                idx++;
              }
          });
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
            this.setState({
              turnstile: data.data,
              trigger: this.state.trigger,
              ///seria: this.state.seria,
              trigger_state: 1,
              selectOne: data.data.page_view.module_selectors[0].state,
              selectTwo:  data.data.page_view.module_selectors[1].state,
              selectThree:  data.data.page_view.module_selectors[2].state,
              selectFour:  data.data.page_view.module_selectors[3].state,
              selectFive:  data.data.page_view.module_selectors[4].state,
              selectSix:  data.data.page_view.module_selectors[5].state,
              selectSeven:  data.data.page_view.module_selectors[6].state,
              selectEight:  data.data.page_view.module_selectors[7].state,
              loadingData: true
            }, () => {
                let idx = 1;
                for( let v of data.data.page_view.seria_buttons ) {
                  if ( v.state === 1 ) {
                    S.state.seria = idx;
                  }
                  idx++;
                }
            });
          },
          error => {
            this.setState({
              loadingData: true,
              error
            });
          }
        )
        .catch(err => err);
       
        //this.sendDataLeftTopBlockOnServer();
        //this.sendDataRightTopBlockOnServer();
        //this.sendDataLeftBottomBlockOnServer();
        //this.sendDataRightBottomBlockOnServer();

      //this.handleClickOneSelect();
      //this.handleClickTwoSelect();
      //this.handleClickThreeSelect();
      //this.handleClickFourSelect();
      //this.handleClickFiveSelect();
      //this.handleClickSixSelect();
      //this.handleClickEightSelect();
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
            state: ( this.state.selectFive < 0 ) ? 0 : this.state.selectFive
          },
          {
            module: 5,
            state: ( this.state.selectSix < 0 ) ? 0 : this.state.selectSix
          },
          {
            module: 6,
            state: ( this.state.selectSeven < 0 ) ? 0 : this.state.selectSeven
          },
          {
            module: 7,
            state: ( this.state.selectEight < 0 ) ? 0 : this.state.selectEight
          }
        ]
      })
      .then(
        data => {
          this.setState({
            turnstile: data.data,
            trigger: 1,
            trigger_state: 1,
            seria: 1,
            selectOne: data.data.page_view.module_selectors[0].state,
              selectTwo:  data.data.page_view.module_selectors[1].state,
              selectThree:  data.data.page_view.module_selectors[2].state,
              selectFour:  data.data.page_view.module_selectors[3].state,
              selectFive:  data.data.page_view.module_selectors[4].state,
              selectSix:  data.data.page_view.module_selectors[5].state,
              selectSeven:  data.data.page_view.module_selectors[6].state,
              selectEight:  data.data.page_view.module_selectors[7].state,
            loadingData: true
          }, () => {
            let idx = 1;
            for( let v of data.data.page_view.seria_buttons ) {
              if ( v.seria === 1 ) {
                S.state.seria = idx;
              }
              idx++;
            }
        });
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
            state: ( this.state.selectFive < 0 ) ? 0 : this.state.selectFive
          },
          {
            module: 5,
            state: ( this.state.selectSix < 0 ) ? 0 : this.state.selectSix
          },
          {
            module: 6,
            state: ( this.state.selectSeven < 0 ) ? 0 : this.state.selectSeven
          },
          {
            module: 7,
            state: ( this.state.selectEight < 0 ) ? 0 : this.state.selectEight
          }
        ]
      })
      .then(
        data => {
          this.setState({
            turnstile: data.data,
            trigger: 2,
            trigger_state: 1,
            seria: 2,
            selectOne: data.data.page_view.module_selectors[0].state,
              selectTwo:  data.data.page_view.module_selectors[1].state,
              selectThree:  data.data.page_view.module_selectors[2].state,
              selectFour:  data.data.page_view.module_selectors[3].state,
              selectFive:  data.data.page_view.module_selectors[4].state,
              selectSix:  data.data.page_view.module_selectors[5].state,
              selectSeven:  data.data.page_view.module_selectors[6].state,
              selectEight:  data.data.page_view.module_selectors[7].state,
            loadingData: true
          }, () => {
            let idx = 2;
            for( let v of data.data.page_view.seria_buttons ) {
              if ( v.seria === 2 ) {
                S.state.seria = idx;
              }
              idx++;
            }
        });
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
            state: ( this.state.selectFive < 0 ) ? 0 : this.state.selectFive
          },
          {
            module: 5,
            state: ( this.state.selectSix < 0 ) ? 0 : this.state.selectSix
          },
          {
            module: 6,
            state: ( this.state.selectSeven < 0 ) ? 0 : this.state.selectSeven
          },
          {
            module: 7,
            state: ( this.state.selectEight < 0 ) ? 0 : this.state.selectEight
          }
        ]
      })
      .then(
        data => {
          this.setState({
            turnstile: data.data,
            trigger: 3,
            trigger_state: 1,
            seria: 3,
            selectOne: data.data.page_view.module_selectors[0].state,
              selectTwo:  data.data.page_view.module_selectors[1].state,
              selectThree:  data.data.page_view.module_selectors[2].state,
              selectFour:  data.data.page_view.module_selectors[3].state,
              selectFive:  data.data.page_view.module_selectors[4].state,
              selectSix:  data.data.page_view.module_selectors[5].state,
              selectSeven:  data.data.page_view.module_selectors[6].state,
              selectEight:  data.data.page_view.module_selectors[7].state,
            loadingData: true
          }, () => {
            let idx = 3;
            for( let v of data.data.page_view.seria_buttons ) {
              if ( v.seria === 3 ) {
                S.state.seria = idx;
              }
              idx++;
            }
        });
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
            state: ( this.state.selectFive < 0 ) ? 0 : this.state.selectFive
          },
          {
            module: 5,
            state: ( this.state.selectSix < 0 ) ? 0 : this.state.selectSix
          },
          {
            module: 6,
            state: ( this.state.selectSeven < 0 ) ? 0 : this.state.selectSeven
          },
          {
            module: 7,
            state: ( this.state.selectEight < 0 ) ? 0 : this.state.selectEight
          }
        ]
      })
      .then(
        data => {
          this.setState({
            turnstile: data.data,
            trigger: 4,
            trigger_state: 1,
            seria: 4,
            selectOne: data.data.page_view.module_selectors[0].state,
              selectTwo:  data.data.page_view.module_selectors[1].state,
              selectThree:  data.data.page_view.module_selectors[2].state,
              selectFour:  data.data.page_view.module_selectors[3].state,
              selectFive:  data.data.page_view.module_selectors[4].state,
              selectSix:  data.data.page_view.module_selectors[5].state,
              selectSeven:  data.data.page_view.module_selectors[6].state,
              selectEight:  data.data.page_view.module_selectors[7].state,
            loadingData: true
          }, () => {
            let idx = 3;
            for( let v of data.data.page_view.seria_buttons ) {
              if ( v.seria === 3 ) {
                S.state.seria = idx;
              }
              idx++;
            }
        });
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
    let Self = this;
    //console.log( "state 1 = " + this.state.selectOne );
      this.setState({
        selectOne: +!this.state.selectOne
      }, () => { send() });  
    function send() {
      //console.log( "state 1 = " + Self.state.selectOne );
    axios
      .post(`${site}/turnstile`, {
        app_id: "UUID5",
        trigger: 5,
        trigger_state: Self.state.selectOne,
        seria: Self.state.seria,
        module_selectors: [
          {
            module: 0,
            state: Self.state.selectOne,
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
            state: ( Self.state.selectFive < 0 ) ? 0 : Self.state.selectFive
          },
          {
            module: 5,
            state: ( Self.state.selectSix < 0 ) ? 0 : Self.state.selectSix
          },
          {
            module: 6,
            state: ( Self.state.selectSeven < 0 ) ? 0 : Self.state.selectSeven
          },
          {
            module: 7,
            state: ( Self.state.selectEight < 0 ) ? 0 : Self.state.selectEight
          }
        ]
      })
      .then(
        data => {
          //console.log( "data - " + data )           
          Self.setState({
            turnstile: data.data,
            trigger: 5,
            selectOne: data.data.page_view.module_selectors[0].state,
            selectTwo:  data.data.page_view.module_selectors[1].state,
            selectThree:  data.data.page_view.module_selectors[2].state,
            selectFour:  data.data.page_view.module_selectors[3].state,
            selectFive:  data.data.page_view.module_selectors[4].state,
            selectSix:  data.data.page_view.module_selectors[5].state,
            selectSeven:  data.data.page_view.module_selectors[6].state,
            selectEight:  data.data.page_view.module_selectors[7].state,
            //trigger_state: 1,
          });
        },
        error => {
          console.log( "error - " + error )
          Self.setState({
            loadingData: true,
            error
          });
        }
      )
      .catch(err => err);
    };
  };

  handleClickTwoSelect = () => {
    //if (this.state.selectTwo === 1) {
    //  this.setState({
    //    selectTwo: 0
    //  });
    //} else {
      let Self = this;
      this.setState({
        selectTwo: +!this.state.selectTwo
      }, () => { send() });
    //}
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
            state: Self.state.selectOne,
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
            state: ( Self.state.selectFive < 0 ) ? 0 : Self.state.selectFive
          },
          {
            module: 5,
            state: ( Self.state.selectSix < 0 ) ? 0 : Self.state.selectSix
          },
          {
            module: 6,
            state: ( Self.state.selectSeven < 0 ) ? 0 : Self.state.selectSeven
          },
          {
            module: 7,
            state: ( Self.state.selectEight < 0 ) ? 0 : Self.state.selectEight
          }
        ]
      })
      .then(
        data => {
          Self.setState({
            turnstile: data.data,
            trigger: 6, // ???
            selectOne: data.data.page_view.module_selectors[0].state,
            selectTwo: data.data.page_view.module_selectors[1].state,
            selectThree: data.data.page_view.module_selectors[2].state,
            selectFour: data.data.page_view.module_selectors[3].state,
            selectFive: data.data.page_view.module_selectors[4].state,
            selectSix:  data.data.page_view.module_selectors[5].state,
            selectSeven:  data.data.page_view.module_selectors[6].state,
            selectEight:  data.data.page_view.module_selectors[7].state,
            //trigger_state: 1, // ???
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
    //if (this.state.selectThree === 1) {
    //  this.setState({
    //    selectThree: 0
    //  });
    //} else {
      let Self = this;
      this.setState({
        selectThree: +!this.state.selectThree
      }, () => { send() });
    //}
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
            state: Self.state.selectOne,
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
            state: ( Self.state.selectFive < 0 ) ? 0 : Self.state.selectFive
          },
          {
            module: 5,
            state: ( Self.state.selectSix < 0 ) ? 0 : Self.state.selectSix
          },
          {
            module: 6,
            state: ( Self.state.selectSeven < 0 ) ? 0 : Self.state.selectSeven
          },
          {
            module: 7,
            state: ( Self.state.selectEight < 0 ) ? 0 : Self.state.selectEight
          }
        ]
      })
      .then(
        data => {
          Self.setState({
            turnstile: data.data,
            trigger: 7,
            //trigger_state: 1,
            selectOne: data.data.page_view.module_selectors[0].state,
            selectTwo:  data.data.page_view.module_selectors[1].state,
            selectThree:  data.data.page_view.module_selectors[2].state,
            selectFour:  data.data.page_view.module_selectors[3].state,
            selectFive:  data.data.page_view.module_selectors[4].state,
            selectSix:  data.data.page_view.module_selectors[5].state,
            selectSeven:  data.data.page_view.module_selectors[6].state,
            selectEight:  data.data.page_view.module_selectors[7].state,
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
    //if (this.state.selectFour === 1) {
    //  this.setState({
    //    selectFour: 0
    //  });
    //} else {
      let Self = this;
      this.setState({
        selectFour: +!this.state.selectFour
      }, () => { send() });
    //}
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
            state: Self.state.selectOne,
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
            state: ( Self.state.selectFive < 0 ) ? 0 : Self.state.selectFive
          },
          {
            module: 5,
            state: ( Self.state.selectSix < 0 ) ? 0 : Self.state.selectSix
          },
          {
            module: 6,
            state: ( Self.state.selectSeven < 0 ) ? 0 : Self.state.selectSeven
          },
          {
            module: 7,
            state: ( Self.state.selectEight < 0 ) ? 0 : Self.state.selectEight
          }
        ]
      })
      .then(
        data => {
          Self.setState({
            turnstile: data.data,
            trigger: 8,
            selectOne: data.data.page_view.module_selectors[0].state,
            selectTwo:  data.data.page_view.module_selectors[1].state,
            selectThree:  data.data.page_view.module_selectors[2].state,
            selectFour:  data.data.page_view.module_selectors[3].state,
            selectFive:  data.data.page_view.module_selectors[4].state,
            selectSix:  data.data.page_view.module_selectors[5].state,
            selectSeven:  data.data.page_view.module_selectors[6].state,
            selectEight:  data.data.page_view.module_selectors[7].state,
            //trigger_state: 1,
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
    };
  };
  handleClickFiveSelect = () => {
    //if (this.state.selectFive === 1) {
    //  this.setState({
    //    selectFive: 0
    //  });
    //} else {
      let Self = this;
      this.setState({
        selectFive: +!this.state.selectFive
      }, () => { send() });
    //}
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
            state: Self.state.selectOne,
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
            state: ( Self.state.selectFive < 0 ) ? 0 : Self.state.selectFive
          },
          {
            module: 5,
            state: ( Self.state.selectSix < 0 ) ? 0 : Self.state.selectSix
          },
          {
            module: 6,
            state: ( Self.state.selectSeven < 0 ) ? 0 : Self.state.selectSeven
          },
          {
            module: 7,
            state: ( Self.state.selectEight < 0 ) ? 0 : Self.state.selectEight
          }
        ]
      })
      .then(
        data => {
          Self.setState({
            turnstile: data.data,
            trigger: 9,
            selectOne: data.data.page_view.module_selectors[0].state,
            selectTwo:  data.data.page_view.module_selectors[1].state,
            selectThree:  data.data.page_view.module_selectors[2].state,
            selectFour:  data.data.page_view.module_selectors[3].state,
            selectFive:  data.data.page_view.module_selectors[4].state,
            selectSix:  data.data.page_view.module_selectors[5].state,
            selectSeven:  data.data.page_view.module_selectors[6].state,
            selectEight:  data.data.page_view.module_selectors[7].state,
            //trigger_state: 1,
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
    //if (this.state.selectSix === 1) {
    //  this.setState({
    //    selectSix: 0
    //  });
    //} else {
      let Self = this;
      this.setState({
        selectSix: +!this.state.selectSix
      }, () => { send() });
    //}
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
            state: Self.state.selectOne,
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
            state: ( Self.state.selectFive < 0 ) ? 0 : Self.state.selectFive
          },
          {
            module: 5,
            state: ( Self.state.selectSix < 0 ) ? 0 : Self.state.selectSix
          },
          {
            module: 6,
            state: ( Self.state.selectSeven < 0 ) ? 0 : Self.state.selectSeven
          },
          {
            module: 7,
            state: ( Self.state.selectEight < 0 ) ? 0 : Self.state.selectEight
          }
        ]
      })
      .then(
        data => {
          Self.setState({
            turnstile: data.data,
            trigger: 10,
            selectOne: data.data.page_view.module_selectors[0].state,
            selectTwo:  data.data.page_view.module_selectors[1].state,
            selectThree:  data.data.page_view.module_selectors[2].state,
            selectFour:  data.data.page_view.module_selectors[3].state,
            selectFive:  data.data.page_view.module_selectors[4].state,
            selectSix:  data.data.page_view.module_selectors[5].state,
            selectSeven:  data.data.page_view.module_selectors[6].state,
            selectEight:  data.data.page_view.module_selectors[7].state,
            //trigger_state: 1,
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
      let Self = this;
      this.setState({
        selectSeven: +!this.state.selectSeven
      }, () => { send() });
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
            state: Self.state.selectOne,
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
            state: ( Self.state.selectFive < 0 ) ? 0 : Self.state.selectFive
          },
          {
            module: 5,
            state: ( Self.state.selectSix < 0 ) ? 0 : Self.state.selectSix
          },
          {
            module: 6,
            state: ( Self.state.selectSeven < 0 ) ? 0 : Self.state.selectSeven
          },
          {
            module: 7,
            state: ( Self.state.selectEight < 0 ) ? 0 : Self.state.selectEight
          }
        ]
      })
      .then(
        data => {
          Self.setState({
            turnstile: data.data,
            trigger: 11,
            selectOne: data.data.page_view.module_selectors[0].state,
            selectTwo:  data.data.page_view.module_selectors[1].state,
            selectThree:  data.data.page_view.module_selectors[2].state,
            selectFour:  data.data.page_view.module_selectors[3].state,
            selectFive:  data.data.page_view.module_selectors[4].state,
            selectSix:  data.data.page_view.module_selectors[5].state,
            selectSeven:  data.data.page_view.module_selectors[6].state,
            selectEight:  data.data.page_view.module_selectors[7].state,
            //trigger_state: 1,
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
      let Self = this;
      this.setState({
        selectEight: +!this.state.selectEight
      }, () => { send() });
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
            state: Self.state.selectOne,
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
            state: ( Self.state.selectFive < 0 ) ? 0 : Self.state.selectFive
          },
          {
            module: 5,
            state: ( Self.state.selectSix < 0 ) ? 0 : Self.state.selectSix
          },
          {
            module: 6,
            state: ( Self.state.selectSeven < 0 ) ? 0 : Self.state.selectSeven
          },
          {
            module: 7,
            state: ( Self.state.selectEight < 0 ) ? 0 : Self.state.selectEight
          }
        ]
      })
      .then(
        data => {
          Self.setState({
            turnstile: data.data,
            trigger: 12,
            selectOne: data.data.page_view.module_selectors[0].state,
            selectTwo:  data.data.page_view.module_selectors[1].state,
            selectThree:  data.data.page_view.module_selectors[2].state,
            selectFour:  data.data.page_view.module_selectors[3].state,
            selectFive:  data.data.page_view.module_selectors[4].state,
            selectSix:  data.data.page_view.module_selectors[5].state,
            selectSeven:  data.data.page_view.module_selectors[6].state,
            selectEight:  data.data.page_view.module_selectors[7].state,
            //trigger_state: 1,
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


  render() {
    const { turnstile, loadingData, error } = this.state;
    //console.log(turnstile.page_view);
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
    
    let seria_buttons_image_top_left = turnstile.page_view
      ? turnstile.page_view.seria_buttons[0].image_source
      : null;
    seria_buttons_image_top_left = site + seria_buttons_image_top_left;

    let seria_buttons_image_top_right = turnstile.page_view
      ? turnstile.page_view.seria_buttons[1].image_source
      : null;
    seria_buttons_image_top_right = site + seria_buttons_image_top_right;

    let seria_buttons_image_bottom_left = turnstile.page_view
      ? turnstile.page_view.seria_buttons[2].image_source
      : null;
    seria_buttons_image_bottom_left = site + seria_buttons_image_bottom_left;

    let seria_buttons_image_bottom_right = turnstile.page_view
      ? turnstile.page_view.seria_buttons[3].image_source
      : null;
    seria_buttons_image_bottom_right = site + seria_buttons_image_bottom_right;
    
    
    let photoOne = turnstile.page_view
      ? turnstile.page_view.carousel_images[0].image_source
      : null;
    photoOne = site + photoOne;
    let photoTwo = turnstile.page_view
      ? turnstile.page_view.carousel_images[1].image_source
      : null;
    photoTwo = site + photoTwo;
    let photoThree = turnstile.page_view
      ? turnstile.page_view.carousel_images[2].image_source
      : null;
    photoThree = site + photoThree;
    let photoFour = turnstile.page_view
      ? turnstile.page_view.carousel_images[3].image_source
      : null;
    photoFour = site + photoFour;

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
          <p className="main-description">{turnstile.page_view.caption}</p>
          <div className="wrapper-main-content">

          {/****************** LEFT BLOCK ******************/}

            <div className="wrapper-left-block__turnstille">
              <div className="block">
                {
                  turnstile.page_view.seria_buttons
                  .slice(0, 1)
                  .map((index, key) => {
                    if (index.state === 1) {                     
                      return (
                        <div
                          key={index.index}
                          onClick={this.sendDataLeftTopBlockOnServer}
                          className="wrapper-left__top__block open"
                        >
                          <img
                            src={seria_buttons_image_top_left}
                            className="left-top-block__photo"
                            alt=""
                          ></img>
                          <div className="left-top-block__description">
                            Компактные турникеты
                            <br />
                            &emsp;&emsp;&emsp;серии "STR"
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div
                          key={index.index}
                          onClick={this.sendDataLeftTopBlockOnServer}
                          className="wrapper-left__top__block"
                        >
                          <img
                            src={seria_buttons_image_top_left}
                            className="left-top-block__photo"
                            alt=""
                          ></img>
                          <div className="left-top-block__description">
                            Компактные турникеты
                            <br />
                            &emsp;&emsp;&emsp;серии "STR"
                          </div>
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
                          className="wrapper-right__top__block open"
                        >
                          <img
                            src={seria_buttons_image_top_right}
                            className="right-top-block__photo"
                            alt=""
                          ></img>
                          <div className="right-top-block__description">
                            Тумбовые турникеты
                            <br />
                            &emsp;&emsp;серии "STR"
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div
                          key={index.index}
                          onClick={this.sendDataRightTopBlockOnServer}
                          className="wrapper-right__top__block"
                        >
                          <img
                            src={seria_buttons_image_top_right}
                            className="right-top-block__photo"
                            alt=""
                          ></img>
                          <div className="right-top-block__description">
                            Тумбовые турникеты
                            <br />
                            &emsp;&emsp;серии "STR"
                          </div>
                        </div>
                      );
                    }
                  })}
              </div>

              <div className="block">
                {turnstile.page_view.seria_buttons
                  .slice(2, 3)
                  .map((index, key) => {
                    if (index.state === 1) {
                      return (
                        <div
                          key={index.index}
                          onClick={this.sendDataLeftBottomBlockOnServer}
                          className="wrapper-left__bottom__block open"
                        >
                          <img
                            src={seria_buttons_image_bottom_left}
                            className="left-bottom-block__photo"
                            alt=""
                          ></img>
                          <div className="left-bottom-block__description">
                            Тумбовые турникеты
                            <br />
                            &emsp;&emsp;серии "STX"
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div
                          key={index.index}
                          onClick={this.sendDataLeftBottomBlockOnServer}
                          className="wrapper-left__bottom__block"
                        >
                          <img
                            src={seria_buttons_image_bottom_left}
                            className="left-bottom-block__photo"
                            alt=""
                          ></img>
                          <div className="left-bottom-block__description">
                            Тумбовые турникеты
                            <br />
                            &emsp;&emsp;серии "STX"
                          </div>
                        </div>
                      );
                    }
                  })}
                {turnstile.page_view.seria_buttons
                  .slice(3, 4)
                  .map((index, key) => {
                    if (index.state === 1) {
                      return (
                        <div
                          key={index.index}
                          onClick={this.sendDataRightBottomBlockOnServer}
                          className="wrapper-right__bottom__block open"
                        >
                          <img
                            src={seria_buttons_image_bottom_right}
                            className="right-bottom-block__photo"
                            alt=""
                          ></img>
                          <div className="right-bottom-block__description">
                            Тумбовые турникеты
                            <br />
                            &emsp;&emsp;серии "STX"
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div
                          key={index.index}
                          onClick={this.sendDataRightBottomBlockOnServer}
                          className="wrapper-right__bottom__block"
                        > 
                        <img
                            src={seria_buttons_image_bottom_right}
                            className="right-bottom-block__photo"
                            alt=""
                          ></img>
                          <div className="right-bottom-block__description">
                            Тумбовые турникеты
                            <br />
                            &emsp;&emsp;серии "STX"
                          </div>
                        </div>
                      );
                    }
                  })}
              </div>
            </div>

             {/****************** CENTRAL BLOCK ******************/}

            <div className="wrapper-center-block__turnstille">
              <div className="center-block__top">
                <Carousel autoPlay infiniteLoop>
                  <div>
                    <img className="center-block__top" src={photoOne} alt="" />
                  </div>
                  <div>
                    <img className="center-block__top" src={photoTwo} alt="" />
                  </div>
                  <div>
                    <img className="center-block__top" src={photoThree} alt="" />
                  </div>
                  <div>
                    <img className="center-block__top" src={photoFour} alt="" />
                  </div>
                </Carousel>
              </div>
              <div className="center-block__bottom">
                <div className="center-block__description">Комплектация:</div>
                <div className="center-block__list">
                  <ul className="list">
                    {turnstile.page_view.model_module_list.map((index, key) => (
                      <li key={index.index}>{index.caption}</li>
                    ))}
                  </ul>
                  <ul className="list-price">
                    {turnstile.page_view.model_module_list.map((index, key) => (
                      <li key={index.index}>{index.price}</li>
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
                  <div className="description-price">
                    {turnstile.page_view.model_price}
                  </div>
                </div>
                <div className="right-block__bottom-description">
                  <div className="description-model">
                    {turnstile.page_view.model_name}
                  </div>
                  <a
                    className="description-button"
                    href={turnstile.page_view.download_broshure_button_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Скачать описание
                  </a>
                </div>
              </div>
              <div className="right-block__bottom">
                {/** //BLOCK 1 */}

                {turnstile.page_view.module_selectors
                  .slice(0, 1)
                  .map((index, key) => {
                    if (index.state === -1) {
                      return (
                        <div className="wrapper-select none">
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
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            {index.caption}
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div key={index.index} className="wrapper-select">
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
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            {index.caption}
                          </div>
                        </div>
                      );
                    }
                  })}

                {/** //BLOCK 2 */}

                {turnstile.page_view.module_selectors
                  .slice(1, 2)
                  .map((index, key) => {
                    if (index.state === -1) {
                      return (
                        <div className="wrapper-select none">
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
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            {index.caption}
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div key={index.index} className="wrapper-select">
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
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            {index.caption}
                          </div>
                        </div>
                      );
                    }
                  })}

                {/** //BLOCK 3 */}

                {turnstile.page_view.module_selectors
                  .slice(2, 3)
                  .map((index, key) => {
                    if (index.state === -1) {
                      return (
                        <div className="wrapper-select none">
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
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            {index.caption}
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div key={index.index} className="wrapper-select">
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
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            {index.caption}
                          </div>
                        </div>
                      );
                    }
                  })}

                {/** //BLOCK 4 */}

                {turnstile.page_view.module_selectors
                  .slice(3, 4)
                  .map((index, key) => {
                    if (index.state === -1) {
                      return (
                        <div className="wrapper-select none">
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
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            {index.caption}
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div key={index.index} className="wrapper-select">
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
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            {index.caption}
                          </div>
                        </div>
                      );
                    }
                  })}

                {/** //BLOCK 5 */}
                {turnstile.page_view.module_selectors
                  .slice(4, 5)
                  .map((index, key) => {
                    if (index.state === -1) {
                      return (
                        <div key={index.index} className="wrapper-select none">
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
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            {index.caption}
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div key={index.index} className="wrapper-select">
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
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            {index.caption}
                          </div>
                        </div>
                      );
                    }
                  })}

                {/** //BLOCK 6 */}
                {turnstile.page_view.module_selectors
                  .slice(5, 6)
                  .map((index, key) => {
                    if (index.state === -1) {
                      return (
                        <div key={index.index} className="wrapper-select none">
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
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            {index.caption}
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div key={index.index} className="wrapper-select">
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
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            {index.caption}
                          </div>
                        </div>
                      );
                    }
                  })}

                {/** //BLOCK 7 */}
                {turnstile.page_view.module_selectors
                  .slice(6, 7)
                  .map((index, key) => {
                    if (index.state === -1) {
                      return (
                        <div key={index.index} className="wrapper-select none">
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
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            {index.caption}
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div key={index.index} className="wrapper-select">
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
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            {index.caption}
                          </div>
                        </div>
                      );
                    }
                  })}

                {/** //BLOCK 8 */}

                {turnstile.page_view.module_selectors
                  .slice(7)
                  .map((index, key) => {
                    if (index.state === -1) {
                      return (
                        <div key={index.index} className="wrapper-select none">
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
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            {index.caption}
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div key={index.index} className="wrapper-select">
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
                          <div
                            key={key.index}
                            className="right-block__select-description"
                          >
                            {index.caption}
                          </div>
                        </div>
                      );
                    }
                  })}
                {/** // ENDS BLOCK */}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Turnstille;