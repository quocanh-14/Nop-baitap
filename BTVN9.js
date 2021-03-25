// BTVN DAY 9
// Bai 1
/**
 * Viết hàm chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại

Hướng dẫn:

°F  =  ( °C × 1.8 ) +  32

Nên viết thành 2 hàm
 */
function doiSangDoC (f){
    let c = (f-32)/1.8;
    return c;
}
let doC = doiSangDoC(323);


function doiSangDoF (c){
    let f = (c*1.8) + 32;
    return f;
}
let doF = doSangDoF (232);
 
//Bai2
/**
 * Viết function tính thế kỷ của 1 năm. Biết thế kỷ thứ nhất tính từ năm 1 đến 100.

Tham số truyền vào là 1 số nguyên dương.
Kết quả là thế kỷ của năm. Ví dụ 2020 => Kết quả là 21.
Gợi ý: Sử dụng các phương thức của object Math để làm tròn, bao gồm: Math.floor, Math.ceil và Math.round.
 */

function theky(n) {
    let nam = Math.floor((n-1)/100)+1; //C1
    let theky =  Math.ceil(n/100); //C2
    return nam;

}
console.log(theky(2003));
   