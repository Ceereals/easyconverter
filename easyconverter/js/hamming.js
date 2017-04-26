/**
 * Created by Riccardo on 06/04/2017.
 */
/*
Controllo i bit coperti dal bit ridondante passato come parametro
e salvo la loro posizione in un vettore
 */
function bit_check(ll,pos,temp){
    var j = 0;
    for (var i = 1; i <= ll; i++){
        if(((i >> pos- 1) & 1) && i != pos) //Fralini Code
           temp.push(i - 1);
    }
}
//Controllo se il numero passato è una potenza di 2
function pow_check(num) {
    var i = 0;
    while(true){
        if (num == Math.pow(2,i)) return true;    //Fralini code
        else if(num < Math.pow(2,i++)) return false;
    }

}
//Determino quanti bit servono a codificare in hamming
function ham_bit(ll) {
    var bit = 0,i,k;
    for (i=0, k = 0; i <= ll; i++,k++) {
        if (pow_check(k)){
            i--;
            bit++;
    }
    }
    return bit + ll;
}
function hamming_code_det(ham, code, c){
    for (var i = 1, k = 0; i <= c; i++){
        if (!pow_check(i)) ham[i-1] = code.value[k++];
        else ham[i-1] = 0;
    }
}
//determino il codice di hamming
function hamming_code(input_code,input_ha){
  var i;
  var hamming = [], temp = [];
  var c = ham_bit(input_code.value.length);
  hamming_code_det(hamming,input_code, c);
  for(i=1; i < c;i++){
      if (pow_check(i)){
          bit_check(c,i,temp)
            for (var j = 0; j < c; j++){
                hamming[i-1] ^= hamming[temp[j]];
          }
          //hamming[3] ^= 1;
      }
  }
    return input_ha.value = hamming.join(''); //trasformo l'array in un stringa senza separatori e lo ritorno alla casella html
}


function bin_check(bin) {
    var ll = bin.value.length;
    for (var i = 0; i < ll; i++) {
        if (bin.value[i] != '0' && bin.value[i] != '1')
            return false;
    }
    return true;
}

window.onload = function () {
    var input_code = document.getElementById("code");
    var input_ha = document.getElementById("hamming");
    var button = document.getElementById("button");
    var ctrl;
    button.addEventListener("click", function () {
        ctrl = false;
        if(!bin_check(input_code) && !ctrl)
        {
            document.getElementById('cod_error').innerHTML="*Solo numeri binari*";
            input_code.value =""
            input_ha.value = "";
            ctrl = true;
        }
        else if (!ctrl) {
            document.getElementById('cod_error').innerHTML="";
            document.getElementById('ham_error').innerHTML="";
            hamming_code(input_code, input_ha);

        }
    });
    input_ha.addEventListener("click", function () {
        document.getElementById('ham_error').innerHTML="*Non puoi inserire nulla qua*";
        input_ha.value = '';
        input_code.value='';
    });
}
