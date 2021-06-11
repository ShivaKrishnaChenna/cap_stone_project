$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
      $('nav').addClass('blackto');
    } else {
      $('nav').removeClass('blackto');
    }
  });
  

$('.home-img img').mousemove( function(e){
    var moveX = (e.pageX * -1/25);
    var moveY = (e.pageY * -1/25);
    $(this).css({
        'transform': 'translate('+ moveX +'px,' + moveY + 'px)'
    })
});

// $('.home .home-heading1').mousemove( function(e){
//     var moveX = (e.pageX * -1/25);
//     var moveY = (e.pageY * -1/25);
//     $(this).css({
//         'transform': 'translate('+ moveX +'px,' + moveY + 'px)'
//     })
// });





window.sr = ScrollReveal();

sr.reveal('.home h1', {
	duration: 2000,
	origin: 'left',
	distance: '110px',
	opacity: 0.3,
	delay: 0,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
	// rotate: { x: 0, y: 10, z: 0 },
});

sr.reveal('.home h3', {
	duration: 2000,
	origin: 'right',
	distance: '100px',
	delay: 100,
	opacity: 0,
});

sr.reveal('.home p', {
	duration: 2000,
	origin: 'right',
	distance: '100px',
	delay: 200,
	opacity: 0,
});

sr.reveal('.home button', {
	duration: 2000,
	origin: 'right',
	distance: '100px',
	delay: 300,
	opacity: 0,
});

// sr.reveal('.home button', {
// 	duration: 2000,
// 	origin: 'right',
// 	distance: '120px',
// 	delay: 0,
// 	opacity: 0.1,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });

sr.reveal('.about-heading h1', {
	duration: 1500,
	origin: 'bottom',
	distance: '100px',
	viewFactor: 0.01,
	delay: 0,
	opacity: 0.6,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('.about-img img', {
	duration: 1800,
	origin: 'left',
	distance: '300px',
	viewFactor: 0.01,
	delay: 80,
	opacity: 0.6,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});
sr.reveal('.about-content h2', {
	duration: 2000,
	origin: 'left',
	distance: '210px',
	viewFactor: 0.1,
	delay: 0,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});
sr.reveal('.about-content p', {
	duration: 2000,
	origin: 'left',
	distance: '110px',
	viewFactor: 0.1,
	delay: 0,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});
sr.reveal('.about-content button', {
	duration: 2000,
	origin: 'left',
	distance: '110px',
	viewFactor: 0.1,
	delay: 0,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('.service-heading h1', {
	duration: 1500,
	origin: 'bottom',
	distance: '100px',
	viewFactor: 0.01,
	delay: 0,
	opacity: 0.6,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('.service-left', {
	duration: 2500,
	origin: 'left',
	distance: '210px',
	viewFactor: 0.1,
    delay: 0,
    opacity: 0.7,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});






sr.reveal('.svr1', {
	duration: 2000,
	origin: 'right',
	distance: '80px',
	viewFactor: 0.2,
	delay: 0,
	opacity: 0.1,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});
sr.reveal('.svr2', {
	duration: 2100,
	origin: 'right',
	distance: '90px',
	viewFactor: 0.2,
	delay: 200,
	opacity: 0.1,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});
sr.reveal('.svr3', {
	duration: 2200,
	origin: 'right',
	distance: '100px',
	viewFactor: 0.2,
	delay: 300,
	opacity: 0.1,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});
sr.reveal('.svr4', {
	duration: 2200,
	origin: 'right',
	distance: '110px',
	viewFactor: 0.2,
	delay: 400,
	opacity: 0.1,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});




sr.reveal('.portfolio-heading h1', {
	duration: 1500,
	origin: 'bottom',
	distance: '100px',
	viewFactor: 0.21,
	delay: 0,
	opacity: 0.6,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});




sr.reveal('.contact-heading h1', {
	duration: 1500,
	origin: 'bottom',
	distance: '50px',
	viewFactor: 0.25,
	delay: 0,
	opacity: 0.6,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('.contact-heading p', {
	duration: 1500,
	origin: 'bottom',
	distance: '100px',
	viewFactor: 0.25,
	delay: 100,
	opacity: 0.6,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});





sr.reveal('.contact-form', {
	duration: 2500,
	origin: 'bottom',
	distance: '10px',
	viewFactor: 0.25,
    delay: 10,
    scale: 0.8,
	opacity: 0.6,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});