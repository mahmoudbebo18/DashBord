$('.adding-new-opt a').click(function() {
    $('.add-new-opt').slideToggle()
})


$(document).ready(function() {
    var $textbox = $("#incdec input");

    $("#up").click(function(e) {
        e.preventDefault();
        var value = parseInt($textbox.val(), 10);

        $textbox.val(value + 1);
    });

    $("#down").click(function(e) {
        e.preventDefault();
        var value = parseInt($textbox.val(), 10);

        if (value > 0) {
            $textbox.val(value - 1);
        }
    });

    $('.show-desc').click(function(e) {
        e.preventDefault();
        $('.add-desc').slideToggle()
    })

})