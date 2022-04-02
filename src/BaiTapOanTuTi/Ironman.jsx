import React, { Component } from "react";
import { connect } from "react-redux";
class Ironman extends Component {
  render() {
    return (
      <div className="text-center ironman">
        <div className="thinking">
          <img
            className="mt-3"
            width={50}
            height={50}
            src={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true).hinhAnh
            }
            alt=""
          />
        </div>
        <div className="speech-bubble"></div>
        <img src="./img/OanTuXi/player.png" width={200} height={200} alt="" />
        <div className="row">
          {this.props.mangDatCuoc.map((item, index) => {
            let border = {};
            if (item.datCuoc) {
              border = { border: "3px solid orange" };
            }
            return (
              <div key={index} className="col-4">
                <button
                  onClick={() => {
                    this.props.datCuoc(item.ma); // nay ban chua truyen ma o day thi tat ca cai o tren reducer no tra ve false het
                  }}
                  style={border}
                >
                  <img width={50} height={50} src={item.hinhAnh} alt="" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { mangDatCuoc: state.BaiTapOanTuTiReducer.mangDatCuoc };
};
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({
        type: "CHON_KEO_BUA_BAO",
        maCuoc,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Ironman);
