/**
 * Created with PyCharm.
 * User: Oliver
 * Date: 05/04/13
 * Time: 7:56 PM
 * To change this template use File | Settings | File Templates.
 */

function check_email(str) {
    var emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailReg.test(str) || str == '') {
        alert('please input a valid email address');
        return false;
    }
    return true;
}

function check_age(str) {
    if (!/^\+?(0|[1-9]\d*)$/.test(str)){
        alert('please input a valid age')
        return false;
    }
    return true;
}

function move_model_data() {
    $('#id_email').val($('#model-email').val());
    $('#id_age').val($('#model-age').val());
    $('#id_gender').val($('#model-gender').val());
}

function collect(){
    if(check_email($('#model-email').val()) && check_age($('#model-age').val())){
        move_model_data();
        $('#survey').addClass('hide fade');
        $('#input-field').removeClass('uneditable-input');
    }
}

$(document).ready(function () {
    $('#model-ok').bind('click', collect)
});
