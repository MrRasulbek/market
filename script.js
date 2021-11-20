let item = ""
let total = 0
let delivery = 9000
for (const key in cartObj()) {
               let itemInfo = cartObj()[key].info
               let itemPrice = cartObj()[key].price
               total += itemPrice
               item += key + " " + itemInfo + ", "
}
console.log("Sizning buyurtmangiz: " + item + " | jami: " + total + " so'm");
console.log("Yetkazib berish xizmati narxi: "+delivery+" so'm"+". Agar siz buyurtmangizni yetkazib berishlarini xohlasangiz, siz jami: "+(total+delivery)+" so'm to'lashingiz kerak !");
console.log("Tashrifingiz uchun katta rahmat !");