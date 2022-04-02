import React, { Component } from "react";
import { connect } from "react-redux";
class Thanos extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()} {
      0% { top: -50px; }
      25% { top: 100px; }
      50% { top: -50px; }
      75% { top: 100px; }
      100% { top: 0;}
    }`;
    return (
      <div className="text-center ironman">
        <style>{keyframe}</style>
        <div className="thinking" style={{position:'relative'}}>
          <img
          style={{position:'absolute',left:'30%',animation:`randomItem${Date.now()} 0.5s`}}
            className="mt-3"
            width={50}
            height={50}
            src={this.props.thanos.hinhAnh}
            alt=""
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          src="./img/OanTuXi/playerComputer.png"
          width={200}
          height={200}
          alt=""
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    thanos: state.BaiTapOanTuTiReducer.thanos,
  };
};
export default connect(mapStateToProps)(Thanos);
