import React, { Component } from "react";
import { connect } from "react-redux";
class KetQuaTroChoi extends Component {
  render() {
    return (
      <div>
        <div className="display-4 text-warning">{this.props.ketQua}</div>
        <div className="display-4 text-success">
          Số bàn thắng:{" "}
          <span className="text-warning">{this.props.soBanThang}</span>
        </div>
        <div className="display-4 text-success">
          Số bàn chơi:{" "}
          <span className="text-warning">{this.props.soBanChoi}</span>
        </div>
        <button
          onClick={() => {
            this.props.playGame();
          }}
          className="btn btn-success mt-3 p-2"
        >
          Play game
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ketQua: state.BaiTapOanTuTiReducer.ketQua,
    soBanThang: state.BaiTapOanTuTiReducer.soBanThang,
    soBanChoi: state.BaiTapOanTuTiReducer.soBanChoi,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      let randomThanos = setInterval(() => {
        dispatch({
          type: "RANDOM",
        });
        count++;
        if (count > 10) {
          clearInterval(randomThanos);
          dispatch({
            type: 'END_GAME',
          })
        }
      }, 100);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi);
