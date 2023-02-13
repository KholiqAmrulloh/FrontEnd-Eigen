var Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];

function diagonal1() {
     var hasil = 0;
     for(var i=0; i<Matrix.length; i++){
          for(var j = 0; j<Matrix[i].length; j++){
               if(i == j){
                    hasil = hasil + Matrix[i][j];
               }
          }
     }
     return hasil;
}

function diagonal2() {
     var output = 0;
     for(var i = 0; i < Matrix.length ; i++){
          for(var j = Matrix[i].length - 1; j >= 0; j--){
               if(i+j == Matrix.length - 1){
                    output = output + Matrix[i][j];
               }
          }
     }
     return output;
}
var output = diagonal1() - diagonal2();
console.log('Hasil dari ' + diagonal1() + ' - ' + diagonal2() + ' adalah ' + output );
