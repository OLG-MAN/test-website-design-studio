$(function() {
    $('.toggles button').click(function() {
        var get_id = this.id;
        var get_current = $('.posts .' + get_id);

        $('.post').not(get_current).hide(0);
        get_current.show(500);

        $('.showall').not(get_current).hide(0);
        get_current.show(500);
    });

    $('#showall').click(function() {
        $('.post').show(500);
    });
});