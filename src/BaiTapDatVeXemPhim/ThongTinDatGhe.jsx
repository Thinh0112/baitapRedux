import React, { Component } from "react";
import { connect } from "react-redux";
class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <h1
          className="text-light mt-2"
          style={{ textTransform: "uppercase", fontSize: "25px" }}
        >
          Danh sách ghế bạn chọn
        </h1>
        <button className="gheDuocChon mt-2"></button>
        <span className="text-light">Ghế đã đặt</span>
        <br />
        <button className="gheDangChon"></button>
        <span className="text-light">Ghế đang đặt</span>
        <br />
        <button className="ghe ml-0"></button>
        <span className="text-light">Ghế chưa đặt</span>
        <table className="table mt-5" border="2">
          <thead>
            <tr className="text-light" style={{ fontSize: "25px" }}>
              <th>Số ghế</th>
              <th>Giá</th>
              <th />
            </tr>
          </thead>
          <tbody className="text-warning">
            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
              return (
                <tr key={index}>
                  <td>{gheDangDat.soGhe}</td>
                  <td>{gheDangDat.gia}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.props.dispatch({
                          type: "HUY_GHE",
                          soGhe: gheDangDat.soGhe,
                        });
                      }}
                    >
                      Hủy
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="text-warning">
            <tr>
              <td>Tổng tiền</td>
              <td>
                {this.props.danhSachGheDangDat.reduce(
                  (tongTien, gheDangDat, index) => {
                    return (tongTien += gheDangDat.gia);
                  },
                  0
                )}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
  };
};
export default connect(mapStateToProps)(ThongTinDatGhe);
