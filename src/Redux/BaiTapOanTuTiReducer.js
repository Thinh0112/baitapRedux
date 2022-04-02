const stateDefault = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/OanTuXi/keo.png", datCuoc: true },
    { ma: "bua", hinhAnh: "./img/OanTuXi/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./img/OanTuXi/bao.png", datCuoc: false },
  ],
  ketQua: "I'm ironman, i love you 3000",
  soBanThang: 0,
  soBanChoi: 0,
  thanos: { ma: "keo", hinhAnh: "./img/OanTuXi/keo.png", datCuoc: false },
};

export const BaiTapOanTuTiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      let mangCuocUpdate = [...state.mangDatCuoc];
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        return { ...item, datCuoc: false };
      });
      let index = mangCuocUpdate.findIndex((qc) => qc.ma === action.maCuoc);
      if (index !== -1) {
        mangCuocUpdate[index].datCuoc = true;
      }
      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }
    case "RANDOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.thanos = quanCuocNgauNhien;
      return { ...state };
    }
    case "END_GAME": {
      state.soBanChoi += 1;
      let iroman = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let thanos = state.thanos;
      switch (iroman.ma) {
        case "keo":
          if (thanos.ma === "keo") {
            state.ketQua = "hòa";
          } else if (thanos.ma === "bua") {
            state.ketQua = "thua";
          } else {
            state.ketQua = "I'm iron man, i love you 3000";
            state.soBanThang += 1;
          }
          break;
        case "bua":
          if (thanos.ma === "keo") {
            state.ketQua = "I'm iron man, i love you 3000";
            state.soBanThang += 1;
          } else if (thanos.ma === "bua") {
            state.ketQua = "hòa";
          } else {
            state.ketQua = "thua";
          }
          break;
        case "bao":
          if (thanos.ma === "keo") {
            state.ketQua = "thua";
          } else if (thanos.ma === "bua") {
            state.ketQua = "I'm iron man, i love you 3000";
            state.soBanThang += 1;
          } else {
            state.ketQua = "hòa";
          }
          break;
        default:
          state.ketQua = "I'm iron man, i love you 3000";
          break;
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};
