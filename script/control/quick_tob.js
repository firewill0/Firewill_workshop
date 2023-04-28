$(function () {

    const quick_tob = $('.quick_tob');
    const quick_tobA = $('.quick_tob a');
    const tobA = $('.article_tob .article_tob_box a');
    const page = $('.section_article .article_box .article_desc');
    const tobBtn =  $('.tob_icon');
    const stickTop = $('.stickTop');
    const stickTopImg = $('.stickTop img');
    const stickCenter = $('.stickCenter');
    const stickBottom = $('.stickBottom');
    const stickBottomImg = $('.stickBottom img');

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
            stickTop.css('transform','rotate(31deg)');
            stickCenter.css('opacity','0');
            stickBottom.css('transform','rotate(-31deg)');
            stickTopImg.attr('src','./img/stick_on.png');
            stickBottomImg.attr('src','./img/stick_on.png');
            $('.quick_tob_box').css('left','15px');
        } else {
            console.log('not on');
            stickTop.css('transform','rotate(0deg)');
            stickCenter.css('opacity','1');
            stickBottom.css('transform','rotate(0deg)');
            stickTopImg.attr('src','./img/stick_off.png');
            stickBottomImg.attr('src','./img/stick_off.png');
            $('.quick_tob_box').css('left','150px');
        }
    });
})