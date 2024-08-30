(function($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Modal Video
    $(document).ready(function() {
        var $videoSrc;
        $('.btn-play').click(function() {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function(e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function(e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function() {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });


    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });

})(jQuery);

function makeTimer() {
    var endTime = new Date("01 June 2019 10:45:00 GMT+01:00");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days + "<h6>Days</h6>");
    $("#hours").html(hours + "<h6>Hrs</h6>");
    $("#minutes").html(minutes + "<h6>Min</h6>");
    $("#seconds").html(seconds + "<h6>Sec</h6>");
}
setInterval(function() { makeTimer(); }, 1000);


function actualizarContador() {
    const fechaEvento = new Date('2024-06-22T13:00:00'); // Fecha y hora del evento
    const ahora = new Date();
    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) {
        clearInterval(intervalo);
        document.getElementById('contador-tiempo').innerText = '¡El evento ha comenzado!';
        return;
    }

    const unDiaEnMilisegundos = 1000 * 60 * 60 * 24;
    const unHoraEnMilisegundos = 1000 * 60 * 60;
    const unMinutoEnMilisegundos = 1000 * 60;
    const unSegundoEnMilisegundos = 1000;

    const dias = Math.floor(diferencia / unDiaEnMilisegundos);
    const horas = Math.floor((diferencia % unDiaEnMilisegundos) / unHoraEnMilisegundos);
    const minutos = Math.floor((diferencia % unHoraEnMilisegundos) / unMinutoEnMilisegundos);
    const segundos = Math.floor((diferencia % unMinutoEnMilisegundos) / unSegundoEnMilisegundos);

    document.getElementById('dias').innerText = dias < 10 ? '0' + dias : dias;
    document.getElementById('horas').innerText = horas < 10 ? '0' + horas : horas;
    document.getElementById('minutos').innerText = minutos < 10 ? '0' + minutos : minutos;
    document.getElementById('segundos').innerText = segundos < 10 ? '0' + segundos : segundos;
}

actualizarContador(); // Actualiza el contador al cargar la página
const intervalo = setInterval(actualizarContador, 1000); // Actualiza el contador cada segundo
