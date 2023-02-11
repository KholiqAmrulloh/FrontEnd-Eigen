var stringAwal = 'NEGIE1';

var splitString = stringAwal.split('');
var jumlahString = stringAwal.length - 1;

function reverse(str) {
     var stringBaru = '';
     var stringFinal = ''
     for(var i = str.length - 2; i >= 0; i--){
          stringBaru = stringBaru + str[i];
     }
     stringFinal = stringBaru + str[5];
     return stringFinal;
}

console.log(reverse('NEGIE1'))