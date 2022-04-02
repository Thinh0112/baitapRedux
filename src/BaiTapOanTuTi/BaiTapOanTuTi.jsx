import React, { Component } from "react";
import "./BaiTapOanTuTi.css";
import Ironman from "./Ironman";
import Thanos from "./Thanos";
import KetQuaTroChoi from "./KetQuaTroChoi";
export default class BaiTapOanTuTi extends Component {
  render() {
    return (
      <div className="background-OanTuTi">
        <div className="row text-center">
          <div className="col-4 mt-5">
            <Ironman />
          </div>
          <div className="col-4 mt-5">
            <KetQuaTroChoi />
          </div>
          <div className="col-4 mt-5">
            <Thanos />
          </div>
        </div>
      </div>
    );
  }
}
