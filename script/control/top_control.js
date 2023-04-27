function top_control() {
    let top_btn = document.querySelector(".btn_top");
    let target;
    let target_height = 0;
    let w = 0;
    let target_height_sub = 0;
    w = innerWidth;
    let body = document.querySelector(".body");
    let body_ch = body.clientHeight;

    $('.btn_top').click(function (e) {
        e.preventDefault();
        $(window).scrollTo(this.hash || 0, {
            duration: 500
        });
    })

    if (w >= 1024) {
        target = document.querySelector(".target");
        target_height_sub = body_ch * 0.7;
        target_height = body_ch - target_height_sub;
    } else {
        target = document.querySelector(".target");
        target_height_sub = body_ch * 0.7;
        target_height = body_ch - target_height_sub;
    }

    function toggle(display, opacity) {
        top_btn.style.visibility = display;
        top_btn.style.opacity = opacity;
    }

    function moveTop(value) {
        top_btn.style.bottom = value;
    }

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    window.addEventListener('resize', function (e) {
        w = innerWidth;
        body_ch = body.clientHeight;
        if (w >= 1024) {
            target = document.querySelector(".target");
            target_height_sub = body_ch * 0.7;
            target_height = body_ch - target_height_sub;
        } else {
            target = document.querySelector(".target");
            target_height_sub = body_ch * 0.7;
            target_height = body_ch - target_height_sub;
        }
    });

    window.addEventListener('scroll', function (e) {
        let scrollHeight = window.scrollY;

        // console.log(scrollHeight);

        const rect = target.getBoundingClientRect();

        // console.log(rect);

        let messageText = '';

        if (scrollHeight >= target_height) {
            toggle("visible", 1);
        } else {
            toggle("hidden", 0);
        }

        if (isInViewport(target)) {
            // messageText = 'The box is visible in the viewport';
            moveTop("120px");
        } else {
            // messageText = 'The box is not visible in the viewport';
            moveTop("15px");
        }

        // console.log(messageText);
    });
}