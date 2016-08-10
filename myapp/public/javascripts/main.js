
var topnav = document.getElementsByClassName('topnav');
function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}
// $(document).ready(function () {
//     var scroll_start = 0;
//     var startchange = $(".maintext");
//     var offset = startchange.offset();
//
//     if (startchange.length) {
//         $(document).scroll(function () {
//             scroll_start = $(this).scrollTop();
//             if (scroll_start > offset.top) {
//                 $(topnav).css('background-color', 'rgba(0,0,0,.75)');
//             } else {
//                 $(topnav).css('background-color', 'transparent');
//             }
//         });
//     }
// });