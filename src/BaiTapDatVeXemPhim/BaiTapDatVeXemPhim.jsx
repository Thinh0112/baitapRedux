import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGheData from "../Data/danhSachGhe.json";
import HangGhe from "./HangGhe";
export default class BaiTapDatVeXemPhim extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(./img/BookingTicket/bgmovie.jpg)",
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          position: "fixed",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
          }}
        >
          <div className="container-fluid">
            <div className="row bookingMovie">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                className="col-8"
              >
                <h1
                  style={{ textTransform: "uppercase" }}
                  className="text-warning"
                >
                  Đặt vé xem phim Cyberlearn.vn
                </h1>
                <p className="text-light text-center">Màn hình</p>
                <div className="screen"></div>
                {this.renderHangGhe()}
              </div>
              <div className="col-4">
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
