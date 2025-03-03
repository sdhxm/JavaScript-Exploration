const orang = {nama: "Syakila", umur: 18, kota: "banda aceh"};

let text = "";
for (let x in orang) {
  text += orang[x] + " ";
}
console.log(text);