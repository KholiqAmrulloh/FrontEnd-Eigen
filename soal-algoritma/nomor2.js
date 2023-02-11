var kalimat = 'Saya sangat senang mengerjakan soal algoritma';
var kalimatSplit = kalimat.split(' ');

function longest() {
     var kataDiambil = '';
     panjangSkrg = 0;
     for(var i = 0; i <= kalimatSplit.length - 1; i++){
          if(panjangSkrg < kalimatSplit[i].length){
               panjangSkrg = kalimatSplit[i].length;
               kataDiambil = kalimatSplit[i];
          }
     }
     return kataDiambil + ': ' + panjangSkrg + ' karakter';
}

console.log(longest());