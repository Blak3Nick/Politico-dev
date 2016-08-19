
var topnav = document.getElementsByClassName('topnav');
var items = document.getElementsByClassName('items');
function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}
$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $(".maintext");
    var offset = startchange.offset();

    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $(topnav).css('background-color', 'rgba(355,355,355,.99)');
                $(topnav).css('width', '100%');
                $(topnav).css('float', 'right');

            } else {
                $(topnav).css('background-color', 'transparent');
                // $(topnav).css('width', '100%');
            }
        });
    }
});
