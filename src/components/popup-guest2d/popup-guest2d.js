import React from "react";
import { Link } from 'react-router-dom';
import "./popup-guest2d.scss";

class PopupGuest2D extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characteristics: false
    };
  }
  toggleCharacteristics = event => {
    event.preventDefault();
    this.setState({ characteristics: !this.state.characteristics });
  };
  render() {
    const { characteristics } = this.state;
    return (
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
              {characteristics === false ? (
                <span onClick={this.toggleCharacteristics}>ХАРАКТЕРИСТИКИ</span>
              ) : (
                <span onClick={this.toggleCharacteristics}>
                  ПОКАЗАТЬ ОПИСАНИЕ
                </span>
              )}
            </div>
            <Link to='/turnstile' className="wrapper-popup__right-block-header__close-modal"></Link>
          </div>
          <div className="wrapper-popup__right-block-main">
            {characteristics === false ? (
              <div className="wrapper-popup__right-block-main__description">
                Модуль биометрической идентификации по отпечаткам пальцев
                гарантирует надежный контроль доступа на территорию для
                авторизованного персонала. Встраиваемые модули биометрической
                идентификации «FRE-02» и «FRM-02» предназначены для обеспечения
                доступа через турникеты авторизованным пользователям посредством
                сканирования отпечатков пальцев. Также, в виде дополнительной
                возможности, в данные модули встроены RFID считыватели
                стандартов Em-Marine или MiFare.
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
              </div>
            )}
          </div>
          <div className="wrapper-popup__right-block-footer">
            <div className="wrapper-popup__right-block__footer__price">
              <span>Стоимость опции</span>
              20000 Р
            </div>
            <div className="wrapper-popup__right-block__footer__button">
              Добавить
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PopupGuest2D;
