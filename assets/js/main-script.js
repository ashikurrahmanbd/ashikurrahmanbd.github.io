$(document).ready(function () {
    // Initially show the first tab content
    $(".catalog-result > div").first().addClass("active");
    $(".catalog-category li").first().addClass("active");

    $(".catalog-category li").on("click", function (e) {
        e.preventDefault();

        // Remove 'active' class from all items
        $(".catalog-category li").removeClass("active");
        $(".catalog-result > div").removeClass("active");

        // Add 'active' class to the clicked tab and corresponding content
        $(this).addClass("active");
        const target = $(this).data("target");
        $(target).addClass("active");
    });


    //function to show the mobile menu
    $('.toggle-icon svg').on('click', function(){

        $('.mobile-menu-conatainer').toggleClass('mobile-active');

    });

    //smooth scroll
     // Smooth scroll to anchor
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior

        var target = this.hash;
        var $target = $(target);

        // Animate scroll
        $('html, body').animate({
        scrollTop: $target.offset().top
        }, 1000); // Duration: 1000ms (1 second)
    });

});


// $(document).ready(function () {
//     // Initially show the first tab content
//     $(".catalog-result > div").first().addClass("active");
//     $(".catalog-category li").first().addClass("active");

//     $(".catalog-category li").on("click", function (e) {
//         e.preventDefault();

//         // Remove 'active' class from all items
//         $(".catalog-category li").removeClass("active");
//         $(".catalog-result > div").removeClass("active");

//         // Add 'active' class to the clicked tab and corresponding content
//         $(this).addClass("active");
//         const target = $(this).data("target");

//         // Delay adding the 'active' class for smooth transition
//         setTimeout(() => {
//             $(target).addClass("active");
//         }, 50); // Small delay to ensure smooth transition
//     });
// });