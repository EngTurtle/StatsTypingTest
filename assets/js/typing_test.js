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
var max_length = 0;
var text_box = $('#input-field');
var started = false;

function reset(element) {
    // reset the test to original condition
    started = false;
    time = 0;
    err = 0;
    element.value = '';
}

function avg_WPM(element) {
    var words = element.value.split(' ').length;
    var current_time = Date.now() - start_time;
    return words / current_time * 60000;
}

function check_error(element) {
    // returns true if the current keypress resulted in an mismatch.
    var current_text = element.value;
    return Testtext.indexOf(current_text) === -1;
}

function check_completion(element) {
    var current_text = element.value;
    return current_text == Testtext;
}

function submitFrm() {
    $('#id_total_time').val(time);
    $('#id_errors').val(err);
    $('#id_device_string').val(navigator.userAgent);
    $('#test_result').submit();
}

function keypress_update(element) {
    // function to bind to textbox input changes
    // returns true only when type test is completed
    if(!started && element.value.length > 0) {
        start_time = Date.now();
        started = true;
    }
    else reset(element);

    if(started){
        if (check_error(element)) err += 1;
        if (element.value.length > max_length){
            // only check for error if the text grew
            check_error(element);
            max_length = element.value.length;
        }
        if (check_completion(element)) {
            time = Date.now() - start_time;
            return true;
        }
    }
    return false;
}
$(document).ready(function () {

    $('#Test').text(Testtext)

    text_box.bind('input propertychange', function(e) {

        if (keypress_update(text_box_id)) {
            alert('complete');
        }
    });
});
