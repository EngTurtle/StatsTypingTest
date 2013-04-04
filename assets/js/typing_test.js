/**
 * Created with PyCharm.
 * User: Oliver
 * Date: 31/03/13
 * Time: 3:42 PM
 * To change this template use File | Settings | File Templates.
 */


var Testtext = "The term \"design of experiments\" derives from early statistical work performed by Sir Ronald Fisher. He was described as \"a genius who almost single-handedly created the foundations for modern statistical science.\" Fisher initiated the principles of design of experiments and elaborated on his studies of \"analysis of variance\". Perhaps even more important, Fisher began his systematic approach to the analysis of real data as the springboard for the development of new statistical methods. He began to pay particular attention to the labour involved in the necessary computations performed by hand, and developed methods that were as practical as they were founded in rigour. In 1925, this work culminated in the publication of his first book, Statistical Methods for Research Workers.";

var start_time = Date.now();
var time = 0;
var err = 0;
var text_box_id = 'input-field';
var started = false;

function check_error(id) {
//    returns true if the text in the specified id doesn't match the original text.
    var current_text = document.getElementById(id).value;
    return Testtext.indexOf(current_text) === -1;
}

function check_completion(id) {
    var current_text = document.getElementById(id).value;
    return current_text == Testtext;
}

function submitFrm() {
    $('#id_total_time').val(((Date.now() - time) / 1000));
    $('#id_errors').val(err);
    $('#id_device_string').val(navigator.userAgent);
    $('#test_result').submit();
}

function keypress_update(id) {
    if (check_error(id)) err += 1;
    if (check_completion(id)) {
        time = Date.now() - start_time;
        return true;
    }
    return false;
}
$(document).ready(function () {

    $('#Test').text(Testtext)

    $('#' + text_box_id).bind('input propertychange', function(e) {

        if(!started) {
            start_time = Date.now();
            started = true;
        }

        if (keypress_update(text_box_id)) {
            alert('complete');
            submitFrm();
        }
    });
});
