import React, { Component } from "react";
import axios from "axios";
import site from "../../Global";
import { NavLink } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./Main.scss";

//****************** MAIN COMPONENTS ******************//

class Main extends Component {
  constructor() {
    super();
    this.state = {
      main: [],
      loadingData: false,
      error: null
    };
  }
  componentDidMount() {
    axios
      .post(`${site}/main`)
      .then(data => {
        this.setState({
          main: data.data,
          loadingData: true
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { main, loadingData, error } = this.state;
    //console.log(main.page_view);
    let photo_left_block = main.page_view
      ? main.page_view.device_buttons[0].image_source
      : null;
    photo_left_block = site + photo_left_block;

    let photo_right_block = main.page_view
      ? main.page_view.device_buttons[1].image_source
      : null;
    photo_right_block = site + photo_right_block;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!loadingData) {
      return <Loader />;
    }
    return (
      <div className="wrapper-main">
        <p className="main-description">{main.page_view.caption}</p>
        <p className="main-description__subparagraph">
          Выберите необходимую категорию оборудования
        </p>
        <div className="wrapper-main__content">
          {main.page_view.device_buttons.slice(1, 2).map((index, key) => {
            return (
              <div key={index.index} className="wrapper-left-block">
                <div className="left-block-image">
                  <div className="image">
                    <img className="image" src={photo_right_block} alt="" />
                  </div>
                </div>
                <NavLink activeClassName="link-turnstille" to="/turnstile">
                  <div className="left-block-description">
                    <p className="left-block-description__head">
                      Турникеты для контроля доступа
                    </p>
                    <p className="left-block-description__main-paragraph">
                      Турникеты и электронные проходные CARDDEX предоставляют
                      широкий выбор средств, методов и организации контроля
                      доступа на объекты, требующие наличия пропускной системы и
                      учета времени посещений
                    </p>
                  </div>
                </NavLink>
              </div>
            );
          })}
          {main.page_view.device_buttons.slice(0, 1).map((index, key) => {
            return (
              <div key={index.index} className="wrapper-right-block">
                <div className="right-block-image">
                  <div className="image">
                    <img className="image" src={photo_left_block} alt="" />
                  </div>
                </div>
                <NavLink activeClassName="link-barrier" to="/barrier">
                  <div className="right-block-description">
                    <p className="right-block-description__head">
                      Шлагбаумы для парковок и стоянок
                    </p>
                    <p className="right-block-description__main-paragraph">
                      Шлагбаумы и оборудование контроля проезда CARDDEX
                      позволяют сформировать гибкие системы допуска, учета и
                      контроля проезда автотранспортных средств с развитой
                      инфраструктурой
                    </p>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Main;
