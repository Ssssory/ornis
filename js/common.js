$(document).ready(function(){
  $('.top_slider').slick({
    dots: true
  });
});
$('.comment_slider_wrap').slick({
  slidesToShow: 1

});
//плавная прокрутка до якоря
$('a[href^="#"]').click(function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

// popup
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
