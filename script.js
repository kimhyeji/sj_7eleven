// header
function HeaderMenu() {
    // bg
    $("header > .top_bar > .menu_box > ul").hover(function() {
        $(this).addClass('hover');
        $(this).closest('header').children('.menu_box-bg').addClass('hover');
    });

    

    $(".menu_box-bg").mouseleave(function() {
        $(this).removeClass('hover');
        console.log("hover");
    });

    //  first menu text color
    $("header > .top_bar > .menu_box .menu_box-sec").mouseenter(function() {
        $(this).closest('li').children('a').addClass("hover");
    });

    $("header > .top_bar > .menu_box .menu_box-sec").mouseleave(function() {
        $(this).closest('li').children('a').removeClass("hover");
    });
}

HeaderMenu();


// 3page Swiper
var swiper = new Swiper('.swiper-box-1 .swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    },
});

$(document).ready(function () {
    $('.tab-box-1__item').on('click', function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        
        let thisClasses = $(this).attr('class').split(' ');
        let targetClass = thisClasses.find(cls => cls.startsWith('tab-box-1__item-'));

        if (targetClass) {
            
            const wrapItems = $(this).closest(".sec_box_3_wrap").find(".tab-box-1__body > li");

            wrapItems.each(function () {
                let itemClasses = $(this).attr('class').split(' ');
                if (itemClasses.includes(targetClass)) {
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            });
        }
    });
});

// 5page swiper
var swiper = new Swiper('.swiper-box-2 .swiper', {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: 3,
    coverflowEffect: {
        rotate: 0,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    // breakpoints: {
    //     0: {
    //         slidesPerView: 1
    //     },
    //     768: {
    //         slidesPerView: 2
    //     },
    //     1024: {
    //         slidesPerView: 2
    //     },
    //     1280: {
    //         slidesPerView: 3
    //     },
    // },
});

$(document).ready(function () {
    $('.tab-box-1__item').on('click', function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        
        let thisClasses = $(this).attr('class').split(' ');
        let targetClass = thisClasses.find(cls => cls.startsWith('tab-box-1__item-'));

        if (targetClass) {
            
            const wrapItems = $(this).closest(".sec_box_5_wrap").find(".tab-box-1__body > li");

            wrapItems.each(function () {
                let itemClasses = $(this).attr('class').split(' ');
                if (itemClasses.includes(targetClass)) {
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            });
        }
    });
});

AOS.init({
    duration: 1000,
});


// wrap : tab-box-1__item tab-box-1__item-1 active
// this: tab-box-1__item tab-box-1__item-1 active

// 내가 지금 제이쿼리로 class를 추출했는데 각각 이렇게 나왔고
// 여기서 wrap에 있는 tab-box-1__item-1 이 클래스와
// this에 있는 tab-box-1__item-1 이 클래스만 추추
