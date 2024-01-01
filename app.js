$(function() {
    setTimeout(function() {
        $(".phone_full_page_container_first").addClass('hidden'); 
        $(".phone_full_page_container_second").removeClass('hidden');
}, 1200)
});

$(function() {
    setTimeout(function() {
        $(".phone_full_page_container_third").removeClass('hidden');
}, 2500)
});

$(function() {
    setTimeout(function() {
        $(".phone_full_page_container_second").addClass('hidden'); 
}, 3200)
});

$(function() {
    setTimeout(function() {
        $(".phone_full_page_container_third").addClass('hidden'); 
}, 4000)
});

$(function() {
    setTimeout(function() {
        $(".phone_final_screen").removeClass('hidden'); 
}, 3500)
});

function open_sidebar() {
    $(".phone_final_screen").addClass('hidden'); 
    $(".phone_sidebar").removeClass('hidden'); 
}

function close_sidebar() {
    $(".phone_final_screen").removeClass('hidden'); 
    $(".phone_sidebar").addClass('hidden'); 
}

function open_sidebar_about() {
    $(".phone_about").addClass('hidden'); 
    $(".phone_sidebar").removeClass('hidden'); 
}

function close_sidebar_about() {
    $(".phone_about").removeClass('hidden'); 
    $(".phone_sidebar").addClass('hidden'); 
}

function go_to_home() {
    window.open("/", "_self");
}
