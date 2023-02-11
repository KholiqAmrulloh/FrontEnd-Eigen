var INPUT = ['xc', 'dz', 'bbb', 'dz'];
var QUERY = ['bbb', 'ac', 'dz'];

function cekKata() {
     var angka = 0;
     var output = [];
     for(var i = 0; i < QUERY.length; i++){
          for(var j = 0; j < INPUT.length; j++){
               if(QUERY[i] == INPUT[j]){
                   angka = angka + 1;
               }
          }
          output[i] = angka;
          angka = 0;
     }
     return output;
}

console.log(cekKata());