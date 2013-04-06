/**
 * Created with PyCharm.
 * User: Oliver
 * Date: 31/03/13
 * Time: 3:42 PM
 * To change this template use File | Settings | File Templates.
 */


var Testtext = "'O Captain, my Captain.' Who knows where that comes from? Anybody? Not a clue? It's from a poem by Walt Whitman about Mr. Abraham Lincoln. Now in this class, you can either call me Mr. Keating, or if you're slightly more daring, O Captain, my Captain. Now let me dispel a few rumors so they don't fester into facts. Yes, I too attended Hell-ton and survived. And no, at that time I was not the mental giant you see before you. I was the intellectual equivalent of a ninety-eight pound weakling. I would go to the beach and people would kick copies of Byron in my face.";

var start_time = Date.now();
var time = 0;
var err = 0;
var max_length = 0;
var text_box = $('#input-field');
var info_text = $('#info-text');
var started = false;

function reset(element) {
    // reset the test to original condition
    started = false;
    time = 0;
    err = 0;
    element.val('');
}

function display_error(element) {
    if(check_error(element)) element.css('background', '#f2b5af');
    else element.css('background', 'white');
}

function avg_WPM(element) {
    var words = element.val().split(' ').length;
    var current_time = Date.now() - start_time;
    return words / current_time * 60000;
}

function check_error(element) {
    // returns true if the current keypress resulted in an mismatch.
    var current_text = element.val();
    return Testtext.indexOf(current_text) === -1;
}

function check_completion(element) {
    var current_text = element.val();
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
    if(!started) {
        start_time = Date.now();
        started = true;
    }
    else if (element.val().length == 0) reset(element);

    if(started){
        if (check_error(element)) err += 1;
        display_error(element);

        if (element.val().length > max_length){
            // only check for error if the text grew
            check_error(element);
            max_length = element.val().length;
        }
        if (check_completion(element)) {
            time = Date.now() - start_time;
            return true;
        }
    }
    return false;
}
$(document).ready(function () {

    $('#Test').text(Testtext);

    text_box.bind('input propertychange', function(e) {

        if (keypress_update(text_box)) {
            alert('complete');
            submitFrm();
        }

        if (started) {
            info_text.text(
                'Words Per Minute: ' + avg_WPM(text_box).toString().slice(0,4) + ' Errors: ' + err.toString()
            );
        }
        else info_text.text('');
    });
});
