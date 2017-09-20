$(function() {

    $(".toggle-mnu,.hidden-menu ").click(function() {
        $('.toggle-mnu',this).toggleClass("on");
        $(this).toggleClass("on");
        $(".nav  nav").toggleClass('show');
        $('.nav .dropdown .subMenu').css({display:"none"});
        return false;
    });
    //$('.tabs .tabs-content #physioOffice').addClass('show');


    $('.nav .dropdown a').on('click', function(event) {

        if($('.nav .dropdown .subMenu').is(":animated")) return;

        $('.subMenu',this.parentNode).slideToggle();
        return false;
    });

    // $('.nav-page3 nav >ul>li>a').on('click', function(event) {
    //     $('.nav-page3 nav >ul>li>a').removeClass('active')
    //
    //     $(this).toggleClass('active');
    //     return false;
    // });

    $('.content-nav .dropdown a').on('click', function(event) {

    var element = $(this);

        $(this).next("ul").slideToggle();

        setTimeout(
            function (e) {
                element.parent("li").toggleClass("active");
            }, 300 );


        return false;
    });

    $('.content-nav .specialist a').on('click', function(event) {

        $('.content-nav .specialist li').removeClass('active');

        var element = $(this);

        $(this).next("ul").slideToggle();

        setTimeout(
            function (e) {
                element.parent("li").addClass("active");
            }, 300 );

       //  if($('ul',this.parentNode).is(":animated")) return;
       //
       //  $('ul',this.parentNode).slideToggle();
       //
       //
       //  $('.content-nav .specialist a').removeClass('active');
       // // $(this).toggleClass('rotate-icon');
       //
       //
       //  $(this).toggleClass('active');


        return false;
    });


    $('.tabs .tabs-nav a').on('click', function(event) {
        event.preventDefault();


        let targetId = $(this).attr('href');


        $('.tabs .tabs-content div').removeClass('show');
        $('.tabs .tabs-nav div').removeClass('show');
        $('.tabs .tabs-nav a').removeClass('active');


        $('.tabs .tabs-content '+ targetId).addClass('show');
        $(this).addClass('active');

        //tabsResponsive();

    });


    function tabsResponsive() {

        if(window.matchMedia('(max-width: 767px)').matches){

            $('.tabs-nav li >div').appendTo($('.tabs .tabs-content'));

            let currentShowBlok =  $('.tabs .tabs-content .show');
            let targetLi = $('.tabs .tabs-nav a.active').parent();

            $(currentShowBlok).appendTo( $(targetLi));

        }
        else{
            $('.tabs-nav li >div').appendTo($('.tabs .tabs-content'));
        }
    }


    function getSliderSettings(){
        return {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 1500
        }
    }

    $('.topLine-slider .slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500
        //fade: true,
        //asNavFor: '.slider-nav'
    });



    let sliderResponsive = () =>{
        if(window.matchMedia('(max-width: 767px)').matches){
            try{
                let slider = $('.topLine-slider .slider');
                 if(slider)
                     $('.topLine-slider .slider').css({display:'none'});
            }catch(e) {}
        }
        else{
            try{
                let slider = $('.topLine-slider .slider');
                 if(slider) {
                     $('.topLine-slider .slider').css({display: 'block'});
                     $('.topLine-slider .slider').slick(getSliderSettings());
                 }
            }catch(e) {}
        }
    };

    sliderResponsive();

    window.addEventListener("orientationchange", function () {
        sliderResponsive();
        // if(window.matchMedia('(max-width: 767px)').matches){
        //     //$('.topLine-slider .slider').unslick();
        //     try{
        //         $('.topLine-slider .slider').css({display:'none'});
        //     //$('.slider').remove();
        //     }catch(e) {}
        // }
        // else{
        //     try{
        //         $('.topLine-slider .slider').css({display:'block'});
        //         $('.topLine-slider .slider').slick(getSliderSettings());
        //     }catch(e) {}
        //     //$('.topLine-slider .slider').slick('reinit');
        // }
    }, false);


    $(window).resize(function () {
        sliderResponsive();
        // if(window.matchMedia('(max-width: 767px)').matches){
        //     //$('.topLine-slider .slider').unslick();
        //     try{
        //         $('.topLine-slider .slider').css({display:'none'});
        //     }catch(e) {}
        //
        //     //$('.slider').remove();
        // }
        // else{
        //
        //     try{
        //         $('.topLine-slider .slider').css({display:'block'});
        //         $('.topLine-slider .slider').slick(getSliderSettings());
        //     }catch(e) {}
        //     //$('.topLine-slider .slider').slick('reinit');
        // }
    });




    //tabsResponsive();


    // myPlacemark = new ymaps.Placemark([56.315695,44.017063], {
    //     // Контент балуна
    //     balloonContent: '<div style = "margin-top: 30px; margin-left: 20px;" ><b>Оперный театр</b><br/>ул. Белинского, 59</div>'
    // }, {
    //     // Изображение иконки метки
    //     iconImageHref: 'theater.png',
    //     // Размеры изображения иконки
    //     iconImageSize: [32, 37],
    //     // смещение картинки
    //     iconImageOffset: [-16, -37],
    //     // Размеры содержимого балуна
    //     balloonContentSize: [130, 130],
    //     // Задаем макет балуна - пользовательская картинка с контентом
    //     balloonLayout: "default#imageWithContent",
    //     // Картинка балуна
    //     balloonImageHref: 'newbaloon.png',
    //     // Смещение картинки балуна
    //     balloonImageOffset: [-5, -60],
    //     // Размеры картинки балуна
    //     balloonImageSize: [150, 150],
    //     // Балун не имеет тени
    //     balloonShadow: false
    // });
    // // Добавляем метку на карту
    // myMap.geoObjects.add(myPlacemark);

    // Как только будет загружен API и готов DOM, выполняем инициализацию
    //ymaps.ready(init);



    var myMap; // заглобалим переменную карты чтобы можно было ею вертеть из любого места
    ymaps.ready(init); // карта соберется после загрузки скрипта и элементов


    function init () {
        // Создание экземпляра карты и его привязка к контейнеру с
        // заданным id ("map")
        myMap = new ymaps.Map('map', {
            // При инициализации карты, обязательно нужно указать
            // ее центр и коэффициент масштабирования
            center: [56.038979, 92.869716], // Красноярск
            zoom: 16,
            iconColor: '#ff0000',
            behaviors: ['default', 'scrollZoom'], // скроллинг колесом
        });

        // Создание метки
        var myPlacemark = new ymaps.Placemark(
            // Координаты метки
            [56.038979, 92.869716],
            {
                balloonContent: '<div class="mapStyle">Красноярск, ул. Чернышевского 75а </div>' // сдесь содержимое балуна в формате html, все стили в css
            },
            {
                // Задаем стиль метки (метка в виде круга).
                preset: "islands#dotCircleIcon",
                // Задаем цвет метки (в формате RGB).
                iconColor: '#ff0000',
                iconImageHref: 'img/map_pointer.png', // картинка иконки,
                iconImageSize: [39, 54], // размер иконки,
                iconImageOffset: [-23, -64], // позиция иконки
                balloonContentSize: [270, 99], // размер нашего кастомного балуна в пикселях
                balloonLayout: "default#imageWithContent", // указываем что содержимое балуна кастомная херь
                //balloonImageHref: 'img/ballon1.png', // Картинка заднего фона балуна
                balloonImageOffset: [-65, -89], // смещание балуна, надо подогнать под стрелочку
                balloonImageSize: [260, 89], // размер картинки-бэкграунда балуна
                balloonShadow: false,
               // closeButton: true
            }
        );

        myMap.controls // добавим всяких кнопок, в скобках их позиции в блоке
            .add('zoomControl', { left: 5, top: 5 }) //Масштаб
            .add('typeSelector') //Список типов карты
            .add('mapTools', { left: 35, top: 5 }) // Стандартный набор кнопок
            .add('searchControl'); // Строка с поиском


        // Добавление метки на карту
        myMap.geoObjects.add(myPlacemark);



        myMap.events.add('click', function() {
            myMap.balloon.close();
        });




        // myMap.events.add('balloonopen', function (e) {
        //
        //     var balloon = e.get('balloon');
        //
        //     myMap.events.add('click', function (e) {
        //         balloon.close();
        //         console.log(e.get('target'));
        //         //if(e.get('target') === myMap) { // Если клик был на карте, а не на геообъекте
        //
        //           //  balloon.close();
        //
        //      //   }
        //
        //     });

        //});


    }



    $('.item-photo .button-left').on('click', function(event) {
        if($(this).is(":animated")) return;

        let prevItem =   $('.item-img .active').parent().parent().prev();
        if(prevItem.attr('show') == undefined) return;

        $('.item-img img').removeClass('active');
        $('img',prevItem).addClass('active');

        let showItemId = prevItem.attr('show');

        $('.content-body .items  .item').removeClass('show');
        $(showItemId).addClass('show');

    });

    $('.item-photo .button-right').on('click', function(event) {
        if($(this).is(":animated")) return;

        let prevItem =   $('.item-img .active').parent().parent().next();
        if(prevItem.attr('show') == undefined) return;

        $('.item-img img').removeClass('active');
        $('img',prevItem).addClass('active');

        let showItemId = prevItem.attr('show');

        $('.content-body .items  .item').removeClass('show');
        $(showItemId).addClass('show');
    });

    $('.item-img  img').on('click', function(event) {
        if($(this).is(":animated")) return;

        let item =   $(this).parent().parent();
        if(item.attr('show') == undefined) return;


        $('.item-img img').removeClass('active');
        $('img',item).addClass('active');

        let showItemId = item.attr('show');

        $('.content-body .items  .item').removeClass('show');
        $(showItemId).addClass('show');
    });


    // $('.slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.slider-nav'
    // });
    // $('.slider-nav').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     asNavFor: '.slider-for',
    //     variableWidth: true,
    //     dots: true,
    //     centerMode: true,
    //     focusOnSelect: true
    // });

    $('.popup').on('click', function(event) {


        if($(this).hasClass('policyMobile')){
            let targetPopup = $(this).attr('targetPopup');

            $(targetPopup).fadeIn();
            $('.overlay').fadeIn();
            return false;
        }



        //if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        if (window.matchMedia('(max-width: 767px)').matches) {

            let targetPopup = $(this).attr('targetPopup');

            if(targetPopup == '#policy'){

                $('.requestCall').css({opacity:'0', 'z-index': 0});
                $(targetPopup).fadeIn();
                $('.overlay').fadeIn();
                event.preventDefault();

            }

            if(targetPopup == '#requestCall'){

                $(".requestCall").css({opacity: 1, 'z-index': 5});
            }

            // код для мобильных устройств
            return true;
        } else {
            // код для обычных устройств
           // console.log('desctop');



            let targetPopup = $(this).attr('targetPopup');

            if(targetPopup == '#policy'){

                $('.requestCall').css({opacity:'0', 'z-index': 0});

            }

            if(targetPopup == '#requestCall'){

                $(".requestCall").css({opacity: 1, 'z-index': 5});
            }



            //console.log(targetPopup);
            $(targetPopup).fadeIn();
            $('.overlay').fadeIn();

            return false;
        }

       return false;
    });

    $('.close').on('click', function(event) {



        // if(this.closest('.policy') ){
        //     //console.log('policy');
        //     $('.requestCall').css({opacity:'1','z-index': 5});
        //     $(this.parentNode.parentNode).fadeOut();
        //
        //
        //     if( $(".requestCall").is(":visible") == false)
        //         $('.overlay').fadeOut();
        //
        //     return;
        // }
        //
        // $(this.parentNode.parentNode).fadeOut();
        // $('.overlay').fadeOut();





        if( $(".requestCall").is(":visible") == true ){
            if($("#policy").is(":visible") == true) {

                $("#requestCall").css({opacity: 1, 'z-index': 5});
                $("#policy").fadeOut();

                return;
            }
        }



        if( $(".succes").is(":visible") == true ){
            $(".requestCall").css({opacity: 1, 'z-index': 5});
            $('.succes').fadeOut();

        }

        $("#requestCall").fadeOut();
        $("#policy").fadeOut();
        //$("#requestCall").css({display:'none'});


        //$(".policy").css({display:'none'});
        //$('.succes').fadeOut();

        $('.overlay').fadeOut();
    });


    // $('input[type=tel]').on('keyup',function(){
    //     if($(this).val().length < 5)
    //         $(this).css({'border-color':'#d8512d'});
    //     else
    //         $(this).removeAttr('style');
    // });

    $('input[type=tel]').blur(function () {
        if($(this).val().length < 5)
            $(this).css({'border-color':'#d8512d'});
        else
            $(this).removeAttr('style');
    });

    // Функция подсветки незаполненных полей
    function lightEmpty(){

        $('.requestCall .form').find('.rfield').each(function(){

            // if( $(this).val() != ''){
            //     // Если поле не пустое удаляем класс-указание
            //     $(this).removeClass('empty_field');
            // } else {
            //     // Если поле пустое добавляем класс-указание
            //     $(this).addClass('empty_field');
            // }

            if($(this).val().length < 5)
                $('.requestCall .form').find("input[type=tel]").addClass('empty_field');

        });




        $('.requestCall .form').find('.empty_field').css({'border-color':'#d8512d'});
        // Через полсекунды удаляем подсветку
        // setTimeout(function(){
        //     $('.requestCall .form').find('.empty_field').removeAttr('style');
        // },1000);
    }

    $('#requestCall .btn').on('click', function(event) {
        event.preventDefault();

        let min = 5;
        let count = $('#requestCall input#phone').val().length;

        let check = $('#requestCall input[type=checkbox]').prop('checked');



        if(count < min || check == false) {

            let message = '';

            //проверка ie
            var ua = window.navigator.userAgent;
            var trident = ua.indexOf('Trident/');

                if(check == false)
                {
                    message = $('#requestCall input#checkPolicy').next("span").next("span");
                    message.css({left: '0', top: '100%'});
                    if(trident > 0) {
                        // тут пишем обработчик для IE броузера
                        console.log('ie');
                        message.css({left: '-732px', top: '100%'});
                    }

                    if (window.matchMedia('(max-width: 539px)').matches) {
                        message.css({left: '0', top: '100%'});

                    }
                    if (window.matchMedia('(max-width: 479px)').matches) {
                        message.css({left: '0', top: '100%'});
                    }
                    if (window.matchMedia('(max-width: 425px)').matches) {
                        message.css({left: '0', top: '100%',paddingLeft: '1rem'});
                    }
                    if (window.matchMedia('(max-width: 320px)').matches) {
                        message.css({left: '0', top: '100%',paddingLeft: '1rem'});
                    }
                }

            if(count < min) {
                message = $('#requestCall input#phone').next('span');
            }




            // if(count < min)
            //     $('.requestCall .form').find("input[type=tel]").addClass('empty_field');

                //console.log(message);

                message.fadeIn();
                message.delay(3000).fadeOut();
            return;
        }
        else {
            $('.requestCall .form').find('.empty_field').removeAttr('style');

            var th =  $('.requestCall .form');

            $.ajax({
                type: "POST",
                url: "/formsend.php", //Change
                data: th.serialize()
            });

            //$('#requestCall .title').text("Спасибо! Звонок принят.");
           // $('#requestCall form').css({display: 'none'});


            $('#requestCall').fadeOut();
            $('.succes .container').css({paddingBottom: 0});

            $(".requestCall").css({opacity: 1, 'z-index': 5});

            $('.succes').fadeIn();
            $("#requestCall form").trigger("reset");

            setTimeout(function () {
                // Done Functions
                //$("#requestCall form").trigger("reset");
            }, 1000);


        }









    });

    $('.overlay').on('click', function(event) {
       // console.log($(".requestCall"));

        if( $(".requestCall").is(":visible") == true ){
            if($("#policy").is(":visible") == true) {

                $("#requestCall").css({opacity: 1, 'z-index': 5});
                $("#policy").fadeOut();

                return;
            }
        }



        if( $(".succes").is(":visible") == true ){
            $(".requestCall").css({opacity: 1, 'z-index': 5});
            $('.succes').fadeOut();

        }

        $("#requestCall").fadeOut();
        $("#policy").fadeOut();
        //$("#requestCall").css({display:'none'});


        //$(".policy").css({display:'none'});
        //$('.succes').fadeOut();

        $('.overlay').fadeOut();

    });




    $('.contacts-signUp').on('click', function(event) {
        event.preventDefault();
        //console.log('button');
        $("#requestCall").fadeIn();
        $('.overlay').fadeIn();

    });

});
