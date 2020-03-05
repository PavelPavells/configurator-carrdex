import axios from 'axios';
import site from "../../Global";

export const sendDataLeftTopBlock = () => {
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
    }