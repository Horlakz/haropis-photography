// Smooth Scroll Animation
$('#view-work',). on('click', function() {
    const images = $('#images').position().top;
    $('html, body').animate({scrollTop: images}, 900);
});

$('#view-contact'). on('click', function() {
    const images = $('#contact').position().top;
    $('html, body').animate({scrollTop: images}, 1500);
});