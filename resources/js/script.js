// Variables
var LoginDropdownLink = $('#log');
var LanguageDropdownLink = $('#lang');
var CurrencyDropdownLink = $('#coin');
var CartDropdownLink = $('#cart');
var FavoritesDropdownLink = $('#fav');
var SearchDropdownLink = $('#search');
var LoginTab = $('#loginandregister');
var LangaugeTab = $('#language');
var CurrencyTab = $('#via');
var CartTab = $('#cart-items');
var FavoritesTab = $('#favorites');
var searchTab = $('#show-search');
var CloseLoginLink = $('div.close-loginandregister a');
var CloseLanguageLink = $('div#language div.close-language a');
var CloseCurrencyLink = $('div#via div.close-via a');
var CloseCartLink = $('div#cart-items div.close-cart-items a');
var CloseFavoritesLink = $('div#favorites div.close-fav-items a');
var CloseSearchLink = $('div#show-search div.close-search a');
var ColorList = $("ul.color-list li");
var GoTopLink = $('a.gotop');
$(document).ready(function () {
    // Login And Register
    LoginDropdownLink.on('click',function () {
        LoginTab.slideToggle(500);
        LangaugeTab.slideUp(500);
        CurrencyTab.slideUp(500);
        CartTab.slideUp(500);
        FavoritesTab.slideUp(500);
        searchTab.slideUp(500);
    });
    // Language
    LanguageDropdownLink.on('click',function () {
        LangaugeTab.slideToggle(500);
        LoginTab.slideUp(500);
        CurrencyTab.slideUp(500);
        CartTab.slideUp(500);
        FavoritesTab.slideUp(500);
        searchTab.slideUp(500);
    });
    // Coin
    CurrencyDropdownLink.on('click',function () {
        CurrencyTab.slideToggle(500);
        LangaugeTab.slideUp(500);
        LoginTab.slideUp(500);
        CartTab.slideUp(500);
        FavoritesTab.slideUp(500);
        searchTab.slideUp(500);
    });
    // Cart
    CartDropdownLink.on('click',function () {
        CartTab.slideToggle(500);
        CurrencyTab.slideUp(500);
        LangaugeTab.slideUp(500);
        LoginTab.slideUp(500);
        FavoritesTab.slideUp(500);
        searchTab.slideUp(500);
    });
    // Favorites
    FavoritesDropdownLink.on('click',function () {
        FavoritesTab.slideToggle(500);
        searchTab.slideUp(500);
        CartTab.slideUp(500);
        CurrencyTab.slideUp(500);
        LangaugeTab.slideUp(500);
        LoginTab.slideUp(500);
    });
    // Search
    SearchDropdownLink.on('click',function () {
        searchTab.slideToggle(500);
        CartTab.slideUp(500);
        CurrencyTab.slideUp(500);
        LangaugeTab.slideUp(500);
        FavoritesTab.slideUp(500);
        LoginTab.slideUp(500);
    });
    // Close Login And Register
    CloseLoginLink.on('click',function () {
        LoginTab.slideUp(500);
    });
    // Close Language
    CloseLanguageLink.on('click',function () {
        LangaugeTab.slideUp(500);
    });
    // Close Coin
    CloseCurrencyLink.on('click',function () {
        CurrencyTab.slideUp(500);
    });
    // Close Cart
    CloseCartLink.on('click',function () {
        CartTab.slideUp(500);
    });
    // Close Favorites
    CloseFavoritesLink.on('click',function () {
        FavoritesTab.slideUp(500);
    });
    // Close Search
    CloseSearchLink.on('click',function () {
        searchTab.slideUp(500);
    });
    $('.carousel-fade').carousel({
        interval: 5000,
        pause: false
    });
    // mobile button
    $('button.mobile-toggle-button').on('click',function () {
        if ($(this).hasClass('closed')) {
            $(this).addClass('opened');
            $(this).removeClass('closed');
            $('.mobile-menu').css({'left': '0px', 'transition': 'all ease-in-out 0.3s', '-webkit-transition': 'all ease-in-out 0.3s', '-moz-transition': 'all ease-in-out 0.3s', '-o-transition': 'all ease-in-out 0.3s;'});
        } else {
            $(this).addClass('closed');
            $(this).removeClass('opened');
            $('.mobile-menu').css({'left': '-200px', 'transition': 'all ease-in-out 0.3s', '-webkit-transition': 'all ease-in-out 0.3s', '-moz-transition': 'all ease-in-out 0.3s', '-o-transition': 'all ease-in-out 0.3s;'});
        }
    });
    // Close Mobile Menu
    $('#close-mobile-toggle').on('click',function () {
        $('.mobile-menu').css({'left': '-200px', 'transition': 'all ease-in-out 0.3s', '-webkit-transition': 'all ease-in-out 0.3s', '-moz-transition': 'all ease-in-out 0.3s', '-o-transition': 'all ease-in-out 0.3s;'});
        $('.mobile-toggle-button').removeClass('opened');
        $('.mobile-toggle-button').addClass('closed');
    });
    // Change Theme Color
    ColorList.eq(0).css({"background": "#fab90a"}).end();
    ColorList.eq(1).css({"background": "#3498db"}).end();
    ColorList.eq(2).css({"background": "#9b59b6"}).end();
    ColorList.eq(3).css({"background": "#e74c3c"}).end();
    ColorList.eq(4).css({"background": "#e67e22"}).end();
    ColorList.eq(5).css({"background": "#2ecc71"});

    ColorList.on('click',function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
        $("img[src*='logo']").attr("src", $(this).attr("data-logo"));
        $("link[href*='icon']").attr("href", $(this).attr("data-icon"));
    });
    // Color Box
    $('.option-box i').on('click',function () {
        $('.color-option').fadeToggle(100);
    });
    // aside dropdown menu
    $('.main-li').on('click',function () {
        $(this).children('.sub-ul').slideToggle();
    });
    // price range slider
    $("#price-range-slider").slider({});
});

// Show Scroll Button
$(document).on('scroll',function () {
    if ($(this).scrollTop() > 300)
    {
        GoTopLink.on('fadeIn',200);
    } else {
        GoTopLink.on('fadeOut',200);
    }

});
// Scroll To Top
GoTopLink.click(function () {
    $("html, body").on('animate',{scrollTop: 0}, 500);
    return false;
});

// Loading
$(window).load(function () {
    $('.loading').fadeOut(500);
});