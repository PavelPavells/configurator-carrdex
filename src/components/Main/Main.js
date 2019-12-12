import React, { Component } from 'react';
import axios from 'axios';
import site from "../../Global";
import { NavLink } from 'react-router-dom';
import Loader from "../Loader/Loader";
import "./Main.scss";

//****************** MAIN COMPONENTS ******************//

class Main extends Component {
    constructor() {
        super()
        this.state = {
            main: [],
            loadingData: false,
            error: null
        }
    }
    componentDidMount() {
        axios
        .post(`${site}/main`)
        .then(data => {
            this.setState({
                main: data.data,
                loadingData: true
            })
        })
        .catch(err => console.log(err))
    }
    render() {
        const { main, loadingData, error } = this.state;
        
        let photo_left_block = main.page_view ? main.page_view.device_buttons[0].image_source : null; 
        photo_left_block = site + photo_left_block;

        let photo_right_block = main.page_view ? main.page_view.device_buttons[1].image_source : null;
        photo_right_block = site + photo_right_block;

        if(error) {
            return(
                <div>Error: {error.message}</div>
            )
        } else if(!loadingData) {
            return <Loader />
        }
        return (
            <div className="wrapper-main">
                <p className="main-description">{main.page_view.caption}</p>
                <div className="wrapper-main-content">
                    <div className="wrapper-left-block">
                        <p className="left-block-description">
                            &emsp;&emsp;&emsp;Шлагбаумы<br />для парковок и стоянок
                        </p>
                        <NavLink exact activeClassName="link-barrier" to="/barrier">
                            <div className="left-block-image">
                                <div className="image">
                                    <img className="image" src={photo_left_block} alt="" />
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="wrapper-right-block">
                        <p className="right-block-description">
                            &emsp;&emsp;&emsp;Турникеты<br />для контроля доступа
                        </p>
                        <NavLink exact activeClassName="link-turnstille" to="/turnstile">
                            <div className="right-block-image">
                                <div className="image">
                                <img className="image" src={photo_right_block} alt="" />
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
export default Main;