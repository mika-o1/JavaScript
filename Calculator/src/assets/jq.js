import $ from 'jquery'

$(document).ready(function () {
    var a = null;
    var val = [];
    var val2 = [];
    var bool = false;
    var out = null;
    var res = null;
    var oper;
    var item = 0;

    $('.num-set').on('click', function () {
        if (bool === false) {
            a = $(this).val();
            val.push(a);
            out = parseInt(val.join(''));
            $('.result').val(out);
            console.log(out);
            console.log(val);
        } else {
            a = $(this).val();
            val2.push(a);
            out = parseInt(val2.join(''));
            $('.result').val(out);
            console.log(out);
            console.log(val2);
        }
    });

    $('c').on('click', function () {
        bool = false;
        $('.par-out').html('');
        $('.result').val('');
        val = [];
        val2 = [];
    });

    $('ce').on('click', function () {
        if (bool) {
            val2 = [];
            $('.result').val2('');
        } else {
            val = [];
            $('.result').val('');
        }
    });

    $('.plus').on('click', function () {
        bool = true;
        oper = 1
        item += 1;
        $('.result').val('');
        if (item === 1) {
            res = parseInt(val.join(''));
            $('.par-out').prepend(out);
        }
        if (item > 1) {
            res = res + parseInt(val2.join(''));
            val2 = [];
            $('.result').val(res);
            $('.par-out').prepend(out + "+");
        }
    });

    $('.minus').on('click', function () {
        bool = true;
        oper = 2;
        item += 1;
        $('.result').val('');
        if (item === 1) {
            res = parseInt(val.join(''));
            $('.par-out').prepend(out);
        }
        if (item > 1) {
            res = res - parseInt(val2.join(''));
            val2 = [];
            $('.result').val(res);
            $('.par-out').prepend(out + "-");
        }
    });

    $('.divide').on('click', function () {
        bool = true;
        oper = 3;
        item += 1;
        $('.result').val('');
        if (item === 1) {
            res = parseInt(val.join(''));
            $('.par-out').prepend(out);
        }
        if (item > 1) {
            res = res / parseInt(val2.join(''));
            val2 = [];
            $('.result').val(res);
            $('.par-out').prepend(out + "/")
        }
    });

    $('.times').on('click', function () {
        bool = true;
        oper = 4;
        item += 1;
        $('.result').val('');
        if (item === 1) {
            res = parseInt(val.join(''));
            $('.par-out').prepend(out);
        }
        if (item > 1) {
            res = res * parseInt(val2.join(''));
            val2 = [];
            $('.result').val(res);
            $('.par-out').prepend(out + "*");
        }
    });

    $('.eq').on('click', function () {
        if (oper == 1) {
            res = res + parseInt(val2.join(''));
            $('.par-out').append(out)
        } else if (oper == 2) {
            res = res + parseInt(val2.join(''));
            $('.par-out').append(out)
        } else if (oper == 4) {
            res = res + parseInt(val2.join(''));
            $('.par-out').append(out)
        } else if (oper == 3) {
            res = res + parseInt(val2.join(''));
            $('.par-out').append(out)
        }
        $('.result').val(res);
        bool = false
        val = [];
        val2 = [];
    });
});