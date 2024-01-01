let card1_items = false;
let card2_items = false;
let card3_items = false;

function expand_card1() {
    if (card1_items == false) {
        $('.card2').addClass('hidden');
        $('.card3').addClass('hidden');
        $('.hidden_items_card1').removeClass('hidden');
        card1_items = true;
    } else {
        $('.card2').removeClass('hidden');
        $('.card3').removeClass('hidden');
        $('.hidden_items_card1').addClass('hidden');
        card1_items = false;
    }
}

function expand_card2() {
    if (card2_items == false) {
        $('.card3').addClass('hidden');
        $('.hidden_items_card2').removeClass('hidden');
        card2_items = true;
    } else {
        $('.card3').removeClass('hidden');
        $('.hidden_items_card2').addClass('hidden');
        card2_items = false;
    }
}

function expand_card3() {
    if (card3_items == false) {
        $('.hidden_items_card3').removeClass('hidden');
        card3_items = true;
    } else {
        $('.hidden_items_card3').addClass('hidden');
        card3_items = false;
    }
}

function go_to_home() {
    window.open("/", "_self");
}

function open_sidebar() {
    $(".phone_fullpage_services").addClass('hidden'); 
    $(".phone_sidebar").removeClass('hidden'); 
    $("body").css("background-color", "#ffc5cb")
}

function close_sidebar() {
    $(".phone_fullpage_services").removeClass('hidden'); 
    $(".phone_sidebar").addClass('hidden'); 
    $("body").css("background-color", "beige")
}