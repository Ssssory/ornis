$(document).ready(function(){
  $('.top_slider').slick({
    dots: true
  });

$('.comment_slider_wrap').slick({
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 5000
});
tempWidth = $('header').css('width');
$('.slider_complete').css('width','tempWidth');
$('.slider_complete').slick({
  slidesToShow: 1,
  fade: true,
  cssEase: 'linear'
//  asNavFor: '.slider_right'
});
//$('.slider_right').slick({
//  slidesToShow: 3,
//  slidesToScroll: 1,
//  lazyLoad: 'ondemand'
//  asNavFor: '.slider_description'
//});
});
//плавная прокрутка до якоря
$('a.slow_effect').click(function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
    //вычитаем из этой высоты, высоту плавающего блока меню если меню не мобильное
      correct = $('.menu_nav').height();
      if($('html').width()>721){  //на 720px меню становится мобильным
        top -= correct;
      }else{
        top -= 40
      }
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

// popup
$('#worck_pay').click(function() {
				$('#shadow_feedback').show();
				$('#window_feedback').show();
				$('.close_feedback').css('display', 'block');
			});

$('#give_plan').click(function() {
				$('#shadow_feedback').show();
				$('#window_feedback2').show();
				$('.close_feedback').css('display', 'block');
			});

$('#number_to_call').click(function() {
				$('#shadow_feedback').show();
				$('#window_feedback3').show();
				$('.close_feedback').css('display', 'block');
			});

$('#call_my').click(function() {
        $('#shadow_feedback').show();
        $('#window_feedback3').show();
        $('.close_feedback').css('display', 'block');
        return false;
      });

$('#add_comment').click(function() {
        $('#shadow_feedback').show();
        $('#window_feedback4').show();
        $('.close_feedback').css('display', 'block');
      });

$('.close_feedback').click(function() {
  $('#shadow_feedback').hide();
  if($('#window_feedback').css('display')=='block'){
    $('#window_feedback').hide();
  }
  if($('#window_feedback2').css('display')=='block'){
    $('#window_feedback2').hide();
  }
  if($('#window_feedback3').css('display')=='block'){
    $('#window_feedback3').hide();
  }
  if($('#window_feedback4').css('display')=='block'){
    $('#window_feedback4').hide();
  }
  $('.close_feedback').css('display', 'none');
});







// callback возможный вариант обработки формы
$(".feedbackForm").submit(function(){ // перехватываем все при событии отправки
			var form = $(this); // запишем форму, чтобы потом не было проблем с this
			var error = false; // предварительно ошибок нет
			form.find('input[type=text]').each( function(){ // пробежим по каждому полю в форме
				if ($(this).val() == '') { // если находим пустое
					alert('Заполните поле "'+$(this).attr('placeholder')+'"!'); // говорим заполняй!
					error = true; // ошибка
				}
			});
			if (!error) { // если ошибки нет
				var data = form.serialize(); // подготавливаем данные
				$.ajax({ // инициализируем ajax запрос
				   type: 'POST', // отправляем в POST формате, можно GET
				   url: '/bitrix/templates/profstile_pages/ajax/feedback.php', // путь до обработчика, у нас он лежит в той же папке
				   dataType: 'json', // ответ ждем в json формате
				   data: data, // данные для отправки
				   beforeSend: function(data) { // событие до отправки
						form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
					  },
				   success: function(data){ // событие после удачного обращения к серверу и получения ответа
						if (data['error']) { // если обработчик вернул ошибку
							alert(data['error']); // покажем её текст
						} else { // если все прошло ок
							form.find('input,textarea').not('input[type="submit"]').val('');
							alert('Письмо отвравлено! Ждите звонка менеджера.'); // пишем что все ок
						}
					 },
				   error: function (xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
						alert(xhr.status); // покажем ответ сервера
						alert(thrownError); // и текст ошибки
					 },
				   complete: function(data) { // событие после любого исхода
						form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
					 }

					 });
			}
			return false; // вырубаем стандартную отправку формы
		});




    $('.up_arrow').scroolly([
                {
                    alias: 'hidden',
//                    from: 'doc-top',
                    to: 'doc-top + 100vp',
                    css: {
                        opacity: '0',
                        bottom: '-100px'
                    }
                },
                {
                    alias: 'shown',
                    from: 'doc-top + 100vp',
                    to: 'doc-bottom + 50vp',
                    css: {
                        opacity: '1',
                        bottom: '30px'
                    }
                }

            ]);
$('.sand_mail').scroolly([
            {
                alias: 'hidden',
//                    from: 'doc-top',
                to: 'doc-top + 100vp',
                css: {
                    opacity: '0',
                    bottom: '-100px'
                }
            },
            {
                alias: 'shown',
                from: 'doc-top + 100vp',
                to: 'doc-bottom',
                css: {
                    opacity: '1',
                    bottom: '30px'
                }
            }
        ], $('.page_body'));


$('.call_phone').click(function(){
            $('html, body').animate({scrollTop: 0}, 500);
        }).scroolly([
            {
                alias: 'hidden',
//                    from: 'doc-top',
                to: 'doc-top + 100vp',
                css: {
                    opacity: '0',
                    bottom: '-100px'
                }
            },
            {
                alias: 'shown',
                from: 'doc-top + 100vp',
                to: 'doc-bottom',
                css: {
                    opacity: '1',
                    bottom: '130px'
                }
            }
        ], $('.page_body'));


a = $('.container');
$('.menu_nav').scroolly([
                {
                    to: 'con-top',
                    css: {
                        position: 'absolute',
                        top: ''
                    }
                },
                {
                    from: 'con-top',
                    css: {
                        position: 'fixed',
                        top: '0'
                    }
                }
            ], $('.page_body'));

// Гамбургер

$(document).ready(function () {
  if (($("html").width()) < 870) {
    responsiveNav('.menu_nav ul');
  }

});

function responsiveNav(menu) {

  var nav = $(menu);
  var mobileNavWidth = $(nav).width();

  var hambNav = $('.mobile_menu');
  var mobileWrapper = $('.mobile-wrapper');

  $(hambNav).click(function () {
    navShow();
    $('.mobile_menu').css('display','none');
  });

  $(mobileWrapper).click(function () {
    navHide();
	    $('.mobile_menu').css('display','block');
  });
  $('.menu_nav a').click(function () {
    navHide();
	  $('.mobile_menu').css('display','block');
  });

  function navShow() {
    nav.css({
      'left': '0'
    });
    $('.menu_nav').css({
      'height': '100%',
      'width': '300px',
      'top': '0px'
    });
    mobileWrapper.css({
      'display': 'block'
    });
  }

  function navHide() {
    nav.css({
      'left': -mobileNavWidth - 120 + 'px'
    });
    $('.menu_nav').css({
      'height': '40px',
      'width': '100%'
    });
    temp = $('header').css('height');
    if  ($(window).scrollTop() <= parseInt(temp)){
      $('.menu_nav').css({
        'top': temp
        });
    } else {
      $('.menu_nav').css({
        'top': '0px'
        });
    }
    mobileWrapper.css({
      'display': 'none'
    });
  }
}
