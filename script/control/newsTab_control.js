$(function () {

    const newslab = $('.body .section_news .box_news_options .btn_news');
    const article = $('.body .section_news .box_news');
    const aligntab = $('.body .section_news .box_news_options .news_arrange');


    aligntab.change(function () {
        let value = $(this).val();
        console.log(value);

        if (value == 'latest_asc') {
            console.log('최신기사');
            article.append(function () {
                return $(this).children().sort(function (a, b) {
                    return $(b).attr('data-date') - $(a).attr("data-date");
                });
            });
        }
        if (value == 'latest_desc') {
            console.log('오랜기사');
            article.append(function () {
                return $(this).children().sort(function (a, b) {
                    return $(a).attr('data-date') - $(b).attr("data-date");
                });
            });
        }
        if (value == 'popular_asc') {
            console.log('많이본기사');
            article.append(function () {
                return $(this).children().sort(function (a, b) {
                    return $(b).attr('data-watched') - $(a).attr(
                        "data-watched");
                });
            });
        }
        if (value == 'popular_desc') {
            console.log('적게본기사');
            article.append(function () {
                return $(this).children().sort(function (a, b) {
                    return $(a).attr('data-watched') - $(b).attr(
                        "data-watched");
                });
            });
        }
        if (value == 'suggest_asc') {
            console.log('추천많은기사');
            article.append(function () {
                return $(this).children().sort(function (a, b) {
                    return $(b).attr('data-likes') - $(a).attr("data-likes");
                });
            });
        }
        if (value == 'suggest_desc') {
            console.log('추천적은기사');
            article.append(function () {
                return $(this).children().sort(function (a, b) {
                    return $(a).attr('data-likes') - $(b).attr("data-likes");
                });
            });
        }

    })

    newslab.click(function () {
        newslab.removeClass('on');
        $(this).addClass('on');


        if ($(this).hasClass("btn_list")) {
            // list
            article.removeClass().addClass("box_news");
            article.addClass("style_list");
        }
        if ($(this).hasClass("btn_grid")) {
            // grid
            article.removeClass().addClass("box_news");
            article.addClass("style_grid");
        }
        if ($(this).hasClass("btn_square")) {
            // square
            article.removeClass().addClass("box_news");
            article.addClass("style_square");
        }

    });
});