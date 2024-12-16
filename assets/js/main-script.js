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