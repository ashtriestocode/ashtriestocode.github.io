(function ($) {
    "use strict";
    $(".sakura-falling").sakura();
})(jQuery);

$("#openCardButton").on("click", function () {
    $("#mainPage").css("display", "block");
    $("#entryPage").css("display", "none");
    $("#body").css("height", "auto");
    document.getElementById("my_audio").play();
});

//to show diff pages
const pages = [
    "#entryPage",
    "#mainPage",
    "#detailedItinerary",
    "#loveStory",
    "#howToReach",
    "#picGallery",
    "#rsvpPage",
];

const showHidePages = function (pageToShow) {
    for (page of pages) {
        if (page !== pageToShow) {
            $(page).css("display", "none");
        }
    }
    $(pageToShow).css("display", "block");
};

$(".backButton").on("click", function () {
    showHidePages(pages[1]);
});

$("#detailedItineraryBlock").on("click", function () {
    window.scrollTo(0, 0);
    showHidePages(pages[2]);
});

$("#howToReachBlock").on("click", function () {
    window.scrollTo(0, 0);
    showHidePages(pages[4]);
});

$("#picGalleryBlock").on("click", function () {
    window.scrollTo(0, 0);
    showHidePages(pages[5]);
});

$("#rsvp").on("click", function () {
    window.scrollTo(0, 0);
    showHidePages(pages[6]);
});

$("#rsvpButton").on("click", function () {
    window.scrollTo(0, 0);
    showHidePages(pages[6]);
});