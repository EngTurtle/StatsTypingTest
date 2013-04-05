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
    $('#id_total_time').val(time);
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
        }
    });
});
