import React, { Component } from "react";
import { connect } from "react-redux";
class HangGhe extends Component {
  renderSoGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }
      return (
        <button
          key={index}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          disabled={disabled}
          onClick={() => {
            this.props.datGhe(ghe);
          }}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  renderSoGheHangDau = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      return <button className="rowNumber">{ghe.soGhe}</button>;
    });
  };
  renderHangGhe = () => {
    let { hangGhe } = this.props;
    if (this.props.soHangGhe === 0) {
      return (
        <div>
          {hangGhe.hang} {this.renderSoGheHangDau()}
        </div>
      );
    } else {
      return (
        <div>
          {hangGhe.hang} {this.renderSoGhe()}
        </div>
      );
    }
  };
  render() {
    return <div className="text-light">{this.renderHangGhe()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch({
        type: "DAT_GHE",
        ghe,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
