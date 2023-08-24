function tinhDiemKhuVuc(khuVuc){
    if (khuVuc === "khuVucA")return 2 ;
    else if (khuVuc === "khuVucB")return 1 ;
    else if (khuVuc === "khuVucC")return 0.5;
    return 0 ;
    }   
function tinhDiemDoiTUong(doiTuong){
    if (doiTuong === "doiTuong1")return 2.5 ;
    else if (doiTuong === "doiTuong2")return 1.5 ;
    else if (doiTuong === "doiTuong3")return 1 ;
    return 0 ;
}

function tongdiem(){
    const diemChuan = document.getElementById("diem-chuan").value * 1;
    const diemToan = document.getElementById("diem-toan").value * 1 ;
    const diemVan = document.getElementById("diem-van").value * 1 ;
    const diemAnh = document.getElementById("diem-anh").value * 1 ;
    var tongDiem = 0 ;
    const khuVuc = document.getElementById("khu-vuc").value ;
    const diemKhuVuc = tinhDiemKhuVuc(khuVuc);
    const doiTuong = document.getElementById("doi-tuong").value ;
    const diemDoiTuong = tinhDiemDoiTUong(doiTuong);
    tongDiem = diemToan + diemVan + diemAnh + diemKhuVuc + diemDoiTuong ;
    if  (diemToan == 0 || diemVan == 0 || diemAnh == 0){
        document.getElementById('ket-qua').innerHTML = `Điểm: ${tongDiem} Rớt lấy hột vịt về luộc`;
    }else if (tongDiem >= diemChuan) {
        document.getElementById('ket-qua').innerHTML = `Điểm: ${tongDiem} Đậu vòng gửi xe`;
    } else {
        document.getElementById('ket-qua').innerHTML = `Điểm: ${tongDiem} Rớt đi bán muối `;  
    }
}   
// Tiền Điện
function tienDien(){
    var soDien = document.getElementById('so-dien').value * 1;
    var ten = document.getElementById('ten').value;
    var tongTien ;
    if (soDien <= 50 ) {
        tongTien = soDien * 500 ;
    }else if (soDien <= 100 ) {
        tongTien = 50 * 500 + (soDien - 50 ) * 650 ;
    }else if (soDien <= 200) {
        tongTien = 50 * 500 + 50 * 650 + (soDien - 100 ) * 850 ;
    }else if (soDien <= 350 ) {
        tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soDien - 200) * 1100 ; 
    }if  (soDien > 350 ) {
        tongTien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + ( soDien - 350 ) * 1300 ; 
    }
    document.getElementById('tong-tien').innerHTML = `${ten} cần thanh toán :${tongTien.toLocaleString()} VNĐ`;
}
// Tính thuế thu nhập cá nhân.
function tinhThue(){
    var thuNhap = document.getElementById('thu-nhap').value * 1;
    var phuThuoc = document.getElementById('phu-thuoc').value;
    var chiuThue = 0 ;
    if (thuNhap <= 0 ){
        return 0 
    }else if (thuNhap <= 60){
        chiuThue = (thuNhap - 4 - phuThuoc * 1.6 ) * 0.05 ;
     } else if (thuNhap <=120){
        chiuThue = (thuNhap - 4 - phuThuoc * 1.6) * 0.1 ;
    }else if (thuNhap <=210){
        chiuThue = (thuNhap - 4 - phuThuoc * 1.6) * 1.5 ;
    }else if (thuNhap <=384){
        chiuThue = (thuNhap - 4 - phuThuoc * 1.6) * 2 ;
    }else if (thuNhap <=624){
        chiuThue = (thuNhap - 4 - phuThuoc * 1.6) * 2.5 ;
    }else if (thuNhap <=960){
        chiuThue = (thuNhap - 4 - phuThuoc * 1.6) * 3 ;
    }if (thuNhap >= 960 ) {
        chiuThue = (thuNhap - 4 - phuThuoc * 1.6) * 3.5 ;
    }
    document.getElementById('tinhThue').innerHTML = `Trả Thuế : ${chiuThue.toLocaleString(2)}` ;
}

// tính tiền cáp
function thayDoi(){
    const loaiKhach = document.getElementById('loai-khach').value;
    const ketNoiInPut = document.getElementById("ket-noi");
    if (loaiKhach === "nha-dan"){
        ketNoiInPut.disabled = true;
    }else if (loaiKhach === "doanh-nghiep"){
        ketNoiInPut.disabled = false ;
    }
}
function tinhCap(){
    const loaiKhach = document.getElementById('loai-khach').value ;
    const ketNoi = document.getElementById("ket-noi").value * 1 ;
    const soKenh = document.getElementById('so-kenh').value * 1 ;
    let tienCap = 0;
    if (loaiKhach === "nha-dan"){
        tienCap = 4.5 + 20.5 + 7.5 * soKenh ;
    }else if (loaiKhach == "doanh-nghiep"){
       const thietBi = ketNoi > 10 ? 75 + (ketNoi - 10 ) * 5 : 75 ;
        tienCap = 15 +  thietBi + 50 * soKenh;
    }
    document.getElementById('tien-cap').innerHTML =`Hoá Đơn : $ ${tienCap}` ;
}
