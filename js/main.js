// $(".slider_list_01").slick({
//     dots: false,
//     infinite: true,
//     slidesToShow: 5,
//     slidesToScroll: 1
// });
// $(".slider_list_02").slick({
//     dots: false,
//     infinite: true,
//     slidesToShow: 5,
//     slidesToScroll: 1
// });

$('.owl-carousel').owlCarousel({
    itemsCustom: [
        [700, 5]
    ],
    center: true,
    navigation: true
});

$('.owl-prev').html('<img src="images/arrow_left.png" alt="">');
$('.owl-next').html('<img src="images/arrow_right.png" alt="">');
/* Hover wrap images
-------------------------------------- */
$(function() {
    $('img').hover(
        function() {
            $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
        },
        function() {
            $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
        }
    );
});

/* Select slide year number
-------------------------------------- */

$(".num-select").change(function() {
    $(this).find("option:selected").each(function() {
        var optionValue = $(this).attr("value");
        if (optionValue) {
            $(".box_slider").not("." + optionValue).hide();
            $("." + optionValue).show();
        } else {
            $(".box_slider").hide();
        }
    });
}).change();
