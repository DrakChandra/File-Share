$(function () {

	$("#login-form-link").click(function (e) {
		$("#login-form").delay(100).fadeIn(100);
		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		$('#logIn').addClass('login');
		$('#Create').removeClass('create');
		e.preventDefault();
	});
	$('#register-form-link').click(function (e) {
		$("#register-form").delay(100).fadeIn(100);
		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		$('#Create').addClass('create');
		$('#logIn').removeClass('login');
		e.preventDefault();
	});
	$('#signup').click(function (e) {
		$("#register-form").delay(100).fadeIn(100);
		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$('#register-form-link').addClass('active');
		$('#Create').addClass('create');
		$('#logIn').removeClass('login');
		e.preventDefault();
	});
});

