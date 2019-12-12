import React, { Component } from "react";
import axios from "axios";
import site from "../../Global";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Loader from "../Loader/Loader";
import "./Barrier.scss";


class Barrier extends Component {
  constructor() {
    super();
    this.state = {
      barrier: [],
      loadingData: false,
      isChecked: false,
      app_id: "0",
      seria: 0,
      trigger: 0,
      trigger_state: 0,
      state: 0,
      defaultSelect: true,
      selectOne: false,
      selectTwo: false,
      selectThree: false,
      selectFour: false,
      selectFive: false,
      selectSix: false,
      selectSeven: false,
      selectEight: false,
      //selectNine: 0,
      error: null
    };
  }
  componentDidMount() {
    if (window.location.search === "") {
      axios
        .post(`${site}/barrier`, {
          app_id: this.state.app_id,
          trigger: this.state.trigger,
          seria: this.state.seria,
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
            },
            {
              module: 8,
              state: this.state.selectNine
            }
          ]
        })
        .then(
          data => {
            this.setState({
              barrier: data.data,
              loadingData: true
            });
          },
          error => {
            this.setState({
              loadingData: true,
              error
            });
          }
        )
        .catch(err => console.log(err));
    } else {
        axios
        .get(`${site}/turnstile${window.location.search}`)
        .then(
          data => {
            this.setState({
              turnstile: data.data,
              loadingData: true
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

        this.sendDataTopBlockOnServer();
        this.sendDataBottomBlockOnServer();

      this.handleClickOneSelect();
      this.handleClickTwoSelect();
      this.handleClickThreeSelect();
      this.handleClickFourSelect();
      this.handleClickFiveSelect();
      this.handleClickSixSelect();
      this.handleClickEightSelect();
    }
  }

  sendDataTopBlockOnServer = e => {
    //e.preventDefault();
    //let elem = document.querySelector(".wrapper-top__top__block");
    //elem.classList.toggle("open-barrier");
    axios
      .post(`${site}/barrier`, {
        app_id: "UUID1",
        trigger: 1,
        trigger_state: 1,
        seria: 1,
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
          },
          {
            module: 8,
            state: this.state.selectNine
          }
        ]
      })
      .then(
        data => {
          this.setState({
            turnstile: data.data,
            trigger: 1,
            seria: 1,
            trigger_state: 1,
            loadingData: true
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

  sendDataBottomBlockOnServer = e => {
    //e.preventDefault();
    //let elem = document.querySelector(".wrapper-top__bottom__block");
    //elem.classList.toggle("open-barrier");
    axios
      .post(`${site}/barrier`, {
        app_id: "UUID2",
        trigger: 2,
        trigger_state: 2,
        seria: 2,
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
          },
          {
            module: 8,
            state: this.state.selectNine
          }
        ]
      })
      .then(
        data => {
          this.setState({
            turnstile: data.data,
            loadingData: true
          });
        },
        error => {
          this.setState({
            loadingData: true,
            trigger: 2,
            seria: 2,
            trigger_state: 1,
            error
          });
        }
      )
      .catch(err => err);
  };

  handleClickOneSelect = () => {
    if (this.state.selectOne === 1 || this.selectOne === -1) {
      this.setState({
        selectOne: 0
      });
    } else {
      this.setState({
        selectOne: 0
      });
    }
  };
  handleClickTwoSelect = () => {
    if (this.state.selectTwo === 1 || this.selectTwo === -1) {
      this.setState({
        selectTwo: 0
      });
    } else {
      this.setState({
        selectTwo: 0
      });
    }
  };
  handleClickThreeSelect = () => {
    if (this.state.selectThree === 1 || this.selectThree === -1) {
      this.setState({
        selectThree: 0
      });
    } else {
      this.setState({
        selectThree: 0
      });
    }
  };
  handleClickFourSelect = () => {
    if (this.state.selectFour === 1 || this.selectFour === -1) {
      this.setState({
        selectFour: 0
      });
    } else {
      this.setState({
        selectFour: 0
      });
    }
  };
  handleClickFiveSelect = () => {
    if (this.state.selectFive === 1 || this.selectFive === -1) {
      this.setState({
        selectFive: 0
      });
    } else {
      this.setState({
        selectFive: 0
      });
    }
  };
  handleClickSixSelect = () => {
    if (this.state.selectSix === 1 || this.selectSix === -1) {
      this.setState({
        selectSix: 0
      });
    } else {
      this.setState({
        selectSix: 0
      });
    }
  };
  handleClickSevenSelect = () => {
    if (this.state.selectSeven === 1 || this.selectSeven === -1) {
      this.setState({
        selectSeven: 0
      });
    } else {
      this.setState({
        selectSeven: 0
      });
    }
  };
  handleClickEightSelect = () => {
    if (this.state.selectEight === 1 || this.selectEight === -1) {
      this.setState({
        selectEight: 0
      });
    } else {
      this.setState({
        selectEight: 0
      });
    }
  };
  handleClickNineSelect = () => {
    if (this.state.selectNine === 1 || this.selectNine === -1) {
      this.setState({
        selectNine: 0
      });
    } else {
      this.setState({
        selectNine: 0
      });
    }
  };

  render() {
    const { barrier, loadingData, error } = this.state;
    console.log(barrier.page_view);

    //let seria_buttons_image_top = barrier.page_view
    //  ? barrier.page_view.seria_buttons[0].image_source
    //  : null;
    //  seria_buttons_image_top = site + seria_buttons_image_top;

    //let seria_buttons_image_bottom = barrier.page_view
    //  ? barrier.page_view.seria_buttons[1].image_source
    //  : null;
    //  seria_buttons_image_bottom = site + seria_buttons_image_bottom;

    let photoOne = barrier.page_view
        ? barrier.page_view.carousel_images[0].image_source
        : null;
    photoOne = site + photoOne;
    let photoTwo = barrier.page_view
        ? barrier.page_view.carousel_images[1].image_source
        : null;
    photoTwo = site + photoTwo;
    let photoThree = barrier.page_view
        ? barrier.page_view.carousel_images[2].image_source
        : null;
    photoThree = site + photoThree;
    let photoFour = barrier.page_view
        ? barrier.page_view.carousel_images[3].image_source
        : null;
    photoFour = site + photoFour;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!loadingData) {
      return <Loader />;
    } else {
      return (
        <div className="wrapper-main">
          <p className="main-description">
            Мастер подбора конфигурации оборудования - шлагбаумы {/** {barrier.page_view.caption} */}
          </p>
          <div className="wrapper-main-content">
            {/**                     CENTRAL BLOCK                        */}

            <div className="wrapper-top-block__barrier">
              <div className="block">
                
                <div className="wrapper-top__block open-barrier">
                  <div className="top-block__photo"></div>
                  <div className="top-block__description">
                    Шлагбаумы
                  </div>
                </div>
                {/** 
                {barrier.page_view.seria_buttons
                    .slice(0, 1)
                    .map((index, key) => {
                      if (index.state === 1) {
                        return (
                          <div
                            key={key.index}
                            onClick={this.sendDataLeftTopBlockOnServer}
                            className="wrapper-top__block open-barrier"
                          >
                            <img
                              src={seria_buttons_image_top}
                              className="top-block__photo"
                              alt=""
                            ></img>
                            <div className="top-block__description">
                              Компактные турникеты
                              <br />
                              &emsp;&emsp;&emsp;серии "STR"
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div
                            key={key.index}
                            onClick={this.sendDataLeftTopBlockOnServer}
                            className="wrapper-left__top__block"
                          >
                            <img
                              src={seria_buttons_image_top}
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
                */}
              </div>
              <div className="block">
                <div className="wrapper-bottom__block">
                  <div className="bottom-block__photo"></div>
                  <div className="bottom-block__description">
                    Шлагбаумы
                  </div>
                </div>
                {/** 
                {barrier.page_view.seria_buttons
                    .slice(1, 2)
                    .map((index, key) => {
                      if (index.state === 1) {
                        return (
                          <div
                            key={key.index}
                            onClick={this.sendDataLeftTopBlockOnServer}
                            className="wrapper-bottom__block open-barrier"
                          >
                            <img
                              src={seria_buttons_image_bottom}
                              className="bottom-block__photo"
                              alt=""
                            ></img>
                            <div className="bottom-block__description">
                              Компактные турникеты
                              <br />
                              &emsp;&emsp;&emsp;серии "STR"
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div
                            key={key.index}
                            onClick={this.sendDataLeftTopBlockOnServer}
                            className="wrapper-bottom__block"
                          >
                            <img
                              src={seria_buttons_image_bottom}
                              className="bottom-block__photo"
                              alt=""
                            ></img>
                            <div className="bottom-block__description">
                              Компактные турникеты
                              <br />
                              &emsp;&emsp;&emsp;серии "STR"
                            </div>
                          </div>
                        );
                      }
                    })}
                */}
              </div>
            </div>

            {/**                     CENTRAL BLOCK                        */}

            <div className="wrapper-center-block__turnstille">
              <div className="center-block__top">
                <Carousel>
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
              {/*
              <div className="center-block__carousel">
                <div className="arrow-left"></div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div className="arrow-right"></div>
              </div>
              */}
              <div className="center-block__bottom">
                <div className="center-block__description">Комплектация:</div>
                <div className="center-block__list">
                {/** 
                  <ul className="list">
                    {barrier.page_view.model_module_list.map((index, key) => (
                        <li key={key.index}>{index.caption}</li>
                    ))}
                  </ul>
                  <ul className="list-price">
                    {barrier.page_view.model_module_list.map((index, key) => (
                        <li key={key.index}>{index.price}</li>
                    ))}
                  </ul>
                  */}
                </div>
              </div>
            </div>

            {/**                     RIGHT BLOCK                        */}

            <div className="wrapper-right-block__turnstille">
              <div className="right-block__top">
                <div className="right-block__top-description">
                  <div className="description-model">Модель</div>
                  <div className="description-price">
                    42 150 руб {/** {barrier.page_view.model_price} */}
                  </div>
                </div>
                <div className="right-block__bottom-description">
                  <div className="description-model">
                    STR-02SNQE {/** {barrier.page_view.model_name} */}
                  </div>
                  {/**
                  <a className="description-button"
                    href={barrier.page_view.download_broshure_button_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  
                    Скачать описание
                  </a>
                  */}
                </div>
              </div>
              {/** 
                <div className="right-block__bottom">
                {/** //BLOCK 1 

                {barrier.page_view.module_selectors
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
                                disabled
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
                      } else if (index.state === 1) {
                        return (
                          <div className="wrapper-select">
                            <div className="onoffswitch">
                              <input
                                type="checkbox"
                                name="onoffswitch"
                                className="onoffswitch-checkbox"
                                id="header-checkbox"
                                onClick={this.handleClickOneSelect}
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
                      } else {
                        return (
                          <div className="wrapper-select">
                            <div className="onoffswitch">
                              <input
                                type="checkbox"
                                name="onoffswitch"
                                className="onoffswitch-checkbox"
                                id="header-checkbox"
                                onClick={this.handleClickOneSelect}
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
  
                  {/** //BLOCK 2 
  
                  {barrier.page_view.module_selectors
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
                                disabled
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
                      } else if (index.state === 1) {
                        return (
                          <div className="wrapper-select">
                            <div className="onoffswitch2">
                              <input
                                type="checkbox"
                                name="onoffswitch"
                                className="onoffswitch2-checkbox"
                                id="header2-checkbox"
                                onClick={this.handleClickTwoSelect}
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
                      } else {
                        return (
                          <div className="wrapper-select">
                            <div className="onoffswitch2">
                              <input
                                type="checkbox"
                                name="onoffswitch"
                                className="onoffswitch2-checkbox"
                                id="header2-checkbox"
                                onClick={this.handleClickTwoSelect}
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
  
                  {/** //BLOCK 3 
  
                  {barrier.page_view.module_selectors
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
                                disabled
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
                      } else if (index.state === 1) {
                        return (
                          <div className="wrapper-select">
                            <div className="onoffswitch3">
                              <input
                                type="checkbox"
                                name="onoffswitch"
                                className="onoffswitch3-checkbox"
                                id="header3-checkbox"
                                onClick={this.handleClickThreeSelect}
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
                      } else {
                        return (
                          <div className="wrapper-select">
                            <div className="onoffswitch3">
                              <input
                                type="checkbox"
                                name="onoffswitch"
                                className="onoffswitch3-checkbox"
                                id="header3-checkbox"
                                onClick={this.handleClickThreeSelect}
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
  
                  {/** //BLOCK 4 
  
                  {barrier.page_view.module_selectors
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
                                disabled
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
                      } else if (index.state === 1) {
                        return (
                          <div className="wrapper-select">
                            <div className="onoffswitch4">
                              <input
                                type="checkbox"
                                name="onoffswitch"
                                className="onoffswitch4-checkbox"
                                id="header4-checkbox"
                                onClick={this.handleClickFourSelect}
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
                      } else {
                        return (
                          <div className="wrapper-select">
                            <div className="onoffswitch4">
                              <input
                                type="checkbox"
                                name="onoffswitch"
                                className="onoffswitch4-checkbox"
                                id="header4-checkbox"
                                onClick={this.handleClickFourSelect}
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
  
                  {/** //BLOCK 5 
                  {barrier.page_view.module_selectors
                    .slice(4, 5)
                    .map((index, key) => {
                      if (index.state === -1) {
                        return (
                          <div className="wrapper-select none">
                            <div className="onoffswitch5">
                              <input
                                type="checkbox"
                                name="onoffswitch"
                                className="onoffswitch5-checkbox"
                                id="header5-checkbox"
                                onClick={this.handleClickFiveSelect}
                                disabled
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
                      } else if (index.state === 1) {
                        return (
                          <div className="wrapper-select">
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
                      } else {
                        return (
                          <div className="wrapper-select">
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
  
                  {/** //BLOCK 6 
                  {barrier.page_view.module_selectors
                    .slice(5, 6)
                    .map((index, key) => {
                      if (index.state === -1) {
                        return (
                          <div className="wrapper-select none">
                            <div className="onoffswitch6">
                              <input
                                type="checkbox"
                                name="onoffswitch"
                                className="onoffswitch6-checkbox"
                                id="header6-checkbox"
                                onClick={this.handleClickSixSelect}
                                disabled
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
                      } else if (index.state === 1) {
                        return (
                          <div className="wrapper-select">
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
                      } else {
                        return (
                          <div className="wrapper-select">
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
  
                  {/** //BLOCK 7 
                  {barrier.page_view.module_selectors
                    .slice(6, 7)
                    .map((index, key) => {
                      if (index.state === -1) {
                        return (
                          <div className="wrapper-select none">
                            <div className="onoffswitch7">
                              <input
                                type="checkbox"
                                name="onoffswitch"
                                className="onoffswitch7-checkbox"
                                id="header7-checkbox"
                                onClick={this.handleClickSevenSelect}
                                key={key.index}
                                disabled
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
                      } else if (index.state === 1) {
                        return (
                          <div className="wrapper-select">
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
                      } else {
                        return (
                          <div className="wrapper-select">
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
  
                  {/** //BLOCK 8 
  
                  {barrier.page_view.module_selectors
                    .slice(7)
                    .map((index, key) => {
                      if (index.state === -1) {
                        return (
                          <div className="wrapper-select none">
                            <div className="onoffswitch8">
                              <input
                                type="checkbox"
                                name="onoffswitch"
                                className="onoffswitch8-checkbox"
                                id="header8-checkbox"
                                onClick={this.handleClickEightSelect}
                                disabled
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
                      } else if (index.state === 1) {
                        return (
                          <div className="wrapper-select">
                            <div className="onoffswitch8">
                              <input
                                type="checkbox"
                                name="onoffswitch"
                                className="onoffswitch8-checkbox"
                                id="header8-checkbox"
                                onClick={this.handleClickEightSelect}
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
                      } else {
                        return (
                          <div className="wrapper-select">
                            <div className="onoffswitch8">
                              <input
                                type="checkbox"
                                name="onoffswitch"
                                className="onoffswitch8-checkbox"
                                id="header8-checkbox"
                                onClick={this.handleClickEightSelect}
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
                  {/** // ENDS BLOCK 
                
              */}
              <div className="right-block__bottom">
                <div className="wrapper-select">
                  <div className="onoffswitch">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      className="onoffswitch-checkbox"
                      id="header-checkbox"
                    />
                    <label
                      className="onoffswitch-label"
                      htmlFor="header-checkbox"
                    >
                      <span className="onoffswitch-inner"></span>
                      <span className="onoffswitch-switch"></span>
                    </label>
                  </div>
                  <div className="right-block__select-description">
                    Универсальный сетевой контроллер EP-2000
                  </div>
                </div>
                <div className="wrapper-select">
                  <div className="onoffswitch2">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      className="onoffswitch2-checkbox"
                      id="header2-checkbox"
                    />
                    <label
                      className="onoffswitch2-label"
                      htmlFor="header2-checkbox"
                    >
                      <span className="onoffswitch2-inner"></span>
                      <span className="onoffswitch2-switch"></span>
                    </label>
                  </div>
                  <div className="right-block__select-description">
                    RFID идентификаторы EMMarin 125 kHz
                  </div>
                </div>
                <div className="wrapper-select">
                  <div className="onoffswitch3">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      className="onoffswitch3-checkbox"
                      id="header3-checkbox"
                    />
                    <label
                      className="onoffswitch3-label"
                      htmlFor="header3-checkbox"
                    >
                      <span className="onoffswitch3-inner"></span>
                      <span className="onoffswitch3-switch"></span>
                    </label>
                  </div>
                  <div className="right-block__select-description">
                    RFID идентификаторы Mifare 13,56 MHz
                  </div>
                </div>
                <div className="wrapper-select">
                  <div className="onoffswitch4">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      className="onoffswitch4-checkbox"
                      id="header4-checkbox"
                    />
                    <label
                      className="onoffswitch4-label"
                      htmlFor="header4-checkbox"
                    >
                      <span className="onoffswitch4-inner"></span>
                      <span className="onoffswitch4-switch"></span>
                    </label>
                  </div>
                  <div className="right-block__select-description">
                    Биометрическая идентификация по отпечаткам пальцев
                  </div>
                </div>
                <div className="wrapper-select">
                  <div className="onoffswitch5">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      className="onoffswitch5-checkbox"
                      id="header5-checkbox"
                    />
                    <label
                      className="onoffswitch5-label"
                      htmlFor="header5-checkbox"
                    >
                      <span className="onoffswitch5-inner"></span>
                      <span className="onoffswitch5-switch"></span>
                    </label>
                  </div>
                  <div className="right-block__select-description">
                    Информационный дисплей учета рабочего времени
                  </div>
                </div>
                <div className="wrapper-select">
                  <div className="onoffswitch6">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      className="onoffswitch6-checkbox"
                      id="header6-checkbox"
                    />
                    <label
                      className="onoffswitch6-label"
                      htmlFor="header6-checkbox"
                    >
                      <span className="onoffswitch6-inner"></span>
                      <span className="onoffswitch6-switch"></span>
                    </label>
                  </div>
                  <div className="right-block__select-description">
                    Контроль разовых посещений 2D штрих-коды
                  </div>
                </div>
                <div className="wrapper-select">
                  <div className="onoffswitch7">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      className="onoffswitch7-checkbox"
                      id="header7-checkbox"
                    />
                    <label
                      className="onoffswitch7-label"
                      htmlFor="header7-checkbox"
                    >
                      <span className="onoffswitch7-inner"></span>
                      <span className="onoffswitch7-switch"></span>
                    </label>
                  </div>
                  <div className="right-block__select-description">
                    Гостевой доступ по 2D штрих-кодам
                  </div>
                </div>
                <div className="wrapper-select">
                  <div className="onoffswitch8">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      className="onoffswitch8-checkbox"
                      id="header8-checkbox"
                    />
                    <label
                      className="onoffswitch8-label"
                      htmlFor="header8-checkbox"
                    >
                      <span className="onoffswitch8-inner"></span>
                      <span className="onoffswitch8-switch"></span>
                    </label>
                  </div>
                  <div className="right-block__select-description">
                    Корпус кожуха из нержавеющей стали
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      );
    }
  }
}
export default Barrier;