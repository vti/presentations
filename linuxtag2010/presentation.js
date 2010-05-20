function Presentation() {
    var presentation = this;

    presentation.slides = $('.slide');

    presentation.currentSlide = 0;
    presentation.totalSlides = presentation.slides.length;

    presentation.onnextslide = function() {};
    presentation.onprevslide = function() {};

    var loc = $(document).attr('location').hash;
    var match = /#slide(\d+)/i.exec(loc);
    if (match && match[1] && match[1] < presentation.slides.size()) {
        presentation.currentSlide = match[1];
    }

    presentation.updateClass = function (n, newClass) {
        var slide = presentation.slides[n];

        if (!slide) { return; }

        $(slide).removeClass('far-past past current future far-future');
        $(slide).addClass(newClass);
    };

    presentation.animateSlide = function (n, params) {
        var slide = presentation.slides[n];

        if (!slide) { return; }

        $(slide).animate(params);
    };

    presentation.animateSlides = function(direction) {
        if (direction == 'left') {
            presentation.animateSlide(presentation.currentSlide - 2, '.far-past');
            presentation.animateSlide(presentation.currentSlide - 1, '.past');
            presentation.animateSlide(presentation.currentSlide, '.current');
            presentation.animateSlide(presentation.currentSlide + 1, '.future');
            presentation.animateSlide(presentation.currentSlide + 2, '.far-future');
        }
        else {
            presentation.animateSlide(presentation.currentSlide + 2, '.far-future');
            presentation.animateSlide(presentation.currentSlide + 1, '.future');
            presentation.animateSlide(presentation.currentSlide, '.current');
            presentation.animateSlide(presentation.currentSlide - 1, '.past');
            presentation.animateSlide(presentation.currentSlide - 2, '.far-past');
        }

        if (presentation.currentSlide > 0) {
            $(document).attr('location').hash = '#slide' + presentation.currentSlide;
        }
        else {
            $(document).attr('location').hash = '';
        }
    };

    presentation.initSlides = function () {
        presentation.updateClass(presentation.currentSlide - 2, 'far-past');
        presentation.updateClass(presentation.currentSlide - 1, 'past');
        presentation.updateClass(presentation.currentSlide, 'current');
        presentation.updateClass(presentation.currentSlide + 1, 'future');
        presentation.updateClass(presentation.currentSlide + 2, 'far-future');
    };

    presentation.nextSlide = function () {
        if (presentation.currentSlide >= presentation.slides.size() - 1) {
            return;
        }

        presentation.currentSlide++;
        presentation.animateSlides('right');

        presentation.onnextslide();
    };

    presentation.prevSlide = function () {
        if (presentation.currentSlide <= 0) {
            return;
        }

        presentation.currentSlide--;
        presentation.animateSlides('left');

        presentation.onprevslide();
    };

    presentation.initSlides();
};
