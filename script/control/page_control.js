(
    $(function () {

        if ($.cookie('fw_color_mode') == undefined) {
            $.cookie('fw_color_mode', 'mode_paleazure', {
                expires: 12
            });
        }
        const mode_bright = 'mode_paleazure';
        const mode_dark = 'mode_darkblue';

        if ($.cookie('fw_color_mode') == 'mode_paleazure') {
            $('.body').removeClass().addClass('body').addClass(mode_bright);
        } else {
            $('.body').removeClass().addClass('body').addClass(mode_dark);
        }

        $('.btn_color_paleazure').click(function () {
            $('.body').removeClass().addClass('body').addClass(mode_bright);
            $.cookie('fw_color_mode', 'mode_paleazure');
        });

        $('.btn_color_darkblue').on('click', function () {
            $('.body').removeClass().addClass('body').addClass(mode_dark);
            $.cookie('fw_color_mode', 'mode_darkblue');
        });

        console.log($.cookie('fw_color_mode'));

    })
)