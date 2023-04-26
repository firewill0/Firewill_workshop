$(function () {

    const quick_tob = $('.quick_tob');
    const quick_tobA = $('.quick_tob a');
    const tobA = $('.article_tob .article_tob_box a');
    const page = $('.section_article .article_box .article_desc');
    const tobBtn =  $('.tob_icon');

    quick_tob.css('top', $(window).height() / 2 - quick_tob.height() / 2);

    let pointHidden = $(this).scrollTop();
    let offsetTop = $('.section_article #article1').offset().top;

    if (pointHidden >= offsetTop) {
        quick_tob.css('visibility', 'visible');
        quick_tob.css('opacity', 1);
    } else {
        quick_tob.css('visibility', 'hidden');
        quick_tob.css('opacity', 0);
    }

    let point = $(this).scrollTop() + ($(window).height() / 2 - quick_tob.height() / 2);

    quick_tob.stop().animate({
        top: point
    }, 100);

    $(window).scroll(function () {
        let pointHidden = $(this).scrollTop();
        let offsetTop = $('.section_article #article1').offset().top;

        if (pointHidden >= offsetTop) {
            quick_tob.css('visibility', 'visible');
            quick_tob.css('opacity', 1);
        } else {
            quick_tob.css('visibility', 'hidden');
            quick_tob.css('opacity', 0);
        }

        let point = $(this).scrollTop() + ($(window).height() / 2 - quick_tob.height() / 2);

        quick_tob.stop().animate({
            top: point
        }, 100);

        page.each(function () {
            let point = $(window).scrollTop();
            let index = $(this).index();
            console.log(index);

            if (point >= $(this).offset().top) {
                quick_tobA.removeClass('on');
                quick_tobA.eq(index).addClass('on');
            }
        })
    });

    quick_tobA.click(function (e) {
        e.preventDefault();

        $(window).scrollTo(this.hash || 0, {
            offset: 1,
            duration: 1000
        });
    });

    tobA.click(function (e) {
        e.preventDefault();

        $(window).scrollTo(this.hash || 0, {
            offset: 1,
            duration: 1000
        });
    });

    tobBtn.click(function () {
        tobBtn.toggleClass('on');

        if (tobBtn.hasClass('on')) {
            console.log('on');
            tobBtn.attr('src','/img/tob_close.png');
            $('.quick_tob_box').css('left','15px');
        } else {
            console.log('not on');
            tobBtn.attr('src','/img/tob.png');
            $('.quick_tob_box').css('left','150px');
        }
    });
})