var action="click";
var speed="600";

$(document).ready(function() {
    $('.question').on(action, function() {
        $(this).next()
            .slideToggle('speed')
                .siblings('.answer')
                    .slideUp();
    });
});
