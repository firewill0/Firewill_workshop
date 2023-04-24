(
    $(function () {

        $('.sitemap').on('click',function(){
            $(this).toggleClass('sitemap_on');
        });

        const btn_footer_mobile = $('.btn_footer_mobile');
        btn_footer_mobile.on('click',function(){
            btn_footer_mobile.toggleClass("footer_mobile_on");
        });

        const mobile_menu_tab = $('.btn_menu_m_common');

        mobile_menu_tab.click(function () {
            if ($(this).hasClass('on')) {
                mobile_menu_tab.removeClass('on');
            }
            else {
                mobile_menu_tab.removeClass('on');
                $(this).addClass('on');
            }
        });

        $('.profile_btn_setting').on('click', function () {
            $('.profile_btn_setting').toggleClass('pc_setting_on');

            if ($('.profile_btn_setting').hasClass('pc_setting_on')) {
                $('.profile_option_box').css("height", "90px");
            } else {
                $('.profile_option_box').css("height", "0px");
            }
        });

        $('.btn_profile_setting_m').on('click', function () {
            $('.btn_profile_setting_m').toggleClass('m_setting_on');

            if ($('.btn_profile_setting_m').hasClass('m_setting_on')) {
                $('.profile_option_box_m').css("height", "90px");
            } else {
                $('.profile_option_box_m').css("height", "0px");
            }
        });

        $('.btn_language').on('click', function () {
            $('.btn_language').toggleClass('pc_language_on');
        });

        $('.language_m').on('click', function () {
            $('.language_m').toggleClass('m_language_on');
        });

        $('.btn_menu_mobile').on('click', function () {
            $('.btn_menu_mobile').toggleClass('mobile_btn_on');
            $('.wing_menu_mobile').toggleClass('mobile_menu_on');
        });

        if ($.cookie('fw_color_mode') == undefined) {
            $.cookie('fw_color_mode', 'mode_paleazure', {
                expires: 12,
                path: '/'
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