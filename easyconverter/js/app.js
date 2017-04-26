function dec_bin(input_dec, input_bin) {
    var dec = parseInt(input_dec.value);
    var bin = '0';
    if (isNaN(input_dec.value)) {
        document.getElementById("dec_error").innerHTML='Puoi inserire solo numeri!';
        input_dec.value = '0';
    }
    else
        bin = parseInt(input_dec.value,10).toString(2);
    return input_bin.value = bin;
}
function dec_hex(input_dec, input_hex) {
    return input_hex.value = parseInt(input_dec.value, 10).toString(16).toUpperCase();
}
function dec_oct(input_dec, input_oct) {
    return input_oct.value = parseInt(input_dec.value, 10).toString(8);
}
function bin_dec(input_dec, input_bin) {
    var dec = 0, ll = input_bin.value.length - 1;
    if (bin_check(input_bin)) {
        for (var i = ll, j = 0; i >= 0; i-- , j++) {
            dec += (input_bin.value[i]) * Math.pow(2, j);
        }
    }
    else {
        document.getElementById("bin_error").innerHTML='Puoi inserire solo numeri binari!';
        input_bin.value = '0';
    }
    return input_dec.value = dec;
}

function bin_hex(input_bin, input_hex) {
    return input_hex.value = parseInt(input_bin.value, 2).toString(16).toUpperCase();
}
function bin_oct(input_bin, input_oct) {
    return input_oct.value = parseInt(input_bin.value, 2).toString(8);
}

function bin_check(bin) {
    var ll = bin.value.length;
    for (var i = 0; i < ll; i++) {
        if (bin.value[i] != '0' && bin.value[i] != '1')
            return false;
    }
    return true;
}
function oct_check(entry) {
    var validChar = '01234567.';   // legal chars
    var strlen = entry.length;       // test string length
    entry = entry.toUpperCase(); // case insensitive
    for (var idx = 0; idx < strlen; idx++) {
        if (validChar.indexOf(entry.charAt(idx)) < 0) return false;
    } // end scanning
    return true;
}
function hex_check(entry) {
    var validChar = '012345678ABCDEFabcdef.';   // legal chars
    var strlen = entry.length;       // test string length
    entry = entry.toUpperCase(); // case insensitive
    for (var idx = 0; idx < strlen; idx++) {
        if (validChar.indexOf(entry.charAt(idx)) < 0) return false;
    } // end scanning
    return true;
}
function hex_dec(input_hex, input_dec) {
    return input_dec.value = parseInt(input_hex.value.toUpperCase(), 16).toString(10);
}
function hex_bin(input_hex, input_bin) {
    return input_bin.value = parseInt(input_hex.value.toUpperCase(), 16).toString(2);
}
function hex_oct(input_hex, input_oct) {
    return input_oct.value = parseInt(input_hex.value.toUpperCase(), 16).toString(8);
}
function oct_dec(input_oct, input_dec) {
    return input_dec.value = parseInt(input_oct.value, 8).toString(10);
}
function oct_bin(input_oct, input_bin) {
    return input_bin.value = parseInt(input_oct.value, 8).toString(2);
}
function oct_hex(input_oct, input_hex) {
    return input_hex.value = parseInt(input_oct.value, 8).toString(16).toUpperCase();
}
window.onload = function () {
    var input_dec = document.getElementById('dec');
    var input_bin = document.getElementById('bin');
    var input_hex = document.getElementById('hex');
    var input_oct = document.getElementById('oct');
    //var button = document.getElementById('button');
    input_dec.addEventListener('input', function () {
        document.getElementById("oct_error").innerHTML='';
        document.getElementById("hex_error").innerHTML='';
        document.getElementById("bin_error").innerHTML='';
        document.getElementById("dec_error").innerHTML='';
        input_hex.value = '';
        input_oct.value = '';
        dec_bin(input_dec, input_bin);
        dec_hex(input_dec, input_hex);
        dec_oct(input_dec, input_oct);
    });
    input_bin.addEventListener('input', function () {
        document.getElementById("oct_error").innerHTML='';
        document.getElementById("hex_error").innerHTML='';
        document.getElementById("bin_error").innerHTML='';
        document.getElementById("dec_error").innerHTML='';
        input_hex.value = '';
        input_oct.value = '';
        bin_dec(input_dec, input_bin);
        bin_hex(input_bin, input_hex);
        bin_oct(input_bin, input_oct);
    })
    input_hex.addEventListener('input', function () {
        document.getElementById("oct_error").innerHTML='';
        document.getElementById("hex_error").innerHTML='';
        document.getElementById("bin_error").innerHTML='';
        document.getElementById("dec_error").innerHTML='';
        if (!hex_check(input_hex.value)) {
            input_oct.value = '';
            input_bin.value = '';
            input_hex.value = '';
            input_dec.value = '';
            document.getElementById("hex_error").innerHTML='Puoi inserire solo cifre da 0 a 9 e lettere da A a F (maiuscole)';
        } else {
            hex_dec(input_hex, input_dec);
            hex_bin(input_hex, input_bin);
            hex_oct(input_hex, input_oct);
        }
    })
    input_oct.addEventListener('input', function () {
        document.getElementById("oct_error").innerHTML='';
        document.getElementById("hex_error").innerHTML='';
        document.getElementById("bin_error").innerHTML='';
        document.getElementById("dec_error").innerHTML='';
        if (oct_check(input_oct.value)) {
            oct_dec(input_oct, input_dec);
            oct_bin(input_oct, input_bin);
            oct_hex(input_oct, input_hex);
        } else {
            input_oct.value = '';
            input_bin.value = '';
            input_hex.value = '';
            input_dec.value = '';
            document.getElementById("oct_error").innerHTML='Puoi inserire solo cifre da 0 a 7!!';
        }
    })
};
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
