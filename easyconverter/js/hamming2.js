/**
 * Created by Ceereals on 05/04/2017.
 */
function hamming_code(input_code,input_ha) {
  var hamming = [];
  hamming[2] = input_code.value[0].toString();
  hamming[4] = input_code.value[1].toString();
  hamming[5] = input_code.value[2].toString();
  hamming[6] = input_code.value[3].toString();
hamming[0] = hamming[2] ^ hamming[4] ^ hamming[6];
hamming[1] = hamming[2] ^ hamming[5] ^ hamming[6];
hamming[3] = hamming[4] ^ hamming[5] ^ hamming[6];
return input_ha.value = hamming.join('');
}
function char_check(input_code){
    if (input_code.value.length == 4)
        return true;
    else return false;
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
        if(!char_check(input_code) && !ctrl) {
            document.getElementById('cod_error').innerHTML="*Solo 4 bit*";
            input_code.value = "";
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

