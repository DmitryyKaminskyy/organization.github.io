//Инициализация скрипта фильтрации
$('#portfolio_grid').mixItUp();

$(function(){
	$('.products__items').click(function(){
		$('.products__items').removeClass('active');
		$(this).addClass('active');
	});	
});

$('#first').parallax({imageSrc: 'img/first_fon.jpg'});
// $('#forma').parallax({imageSrc: 'img/forma_fon.jpg'});
	
$('.nav,.ff,.video__wrapper,.commRight')
	.waypoint( function(dir) {
		$(this).css("opacity", "0");
       if ( dir === 'down' )
           $(this)
           .removeClass('animated fadeOutRight')
           .addClass('animated fadeInRight').css("opacity", "1");
       else
           $(this)
           .removeClass('animated fadeInRight')
           .addClass('animated fadeOutRight').css("opacity", "0");
   }, {
       offset: '80%'
   }).waypoint( function(dir) {
   	$(this).css("opacity", "0");
       if ( dir === 'down' )
           $(this)
           .removeClass('animated fadeInRight')
           .addClass('animated fadeOutRight').css("opacity", "0");
       else
           $(this)
           .removeClass('animated fadeOutRight')
           .addClass('animated fadeInRight').css("opacity", "1");
   }, {
       offset: -50
});

$('.commLeft,#communications h2')
	.waypoint( function(dir) {
		$(this).css("opacity", "0");
       if ( dir === 'down' )
           $(this)
           .removeClass('animated fadeOutLeft')
           .addClass('animated fadeInLeft').css("opacity", "1");
       else
           $(this)
           .removeClass('animated fadeInLeft')
           .addClass('animated fadeOutLeft').css("opacity", "0");
   }, {
       offset: '100%'
   }).waypoint( function(dir) {
   	$(this).css("opacity", "0");
       if ( dir === 'down' )
           $(this)
           .removeClass('animated fadeInLeft')
           .addClass('animated fadeOutLeft').css("opacity", "0");
       else
           $(this)
           .removeClass('animated fadeOutLeft')
           .addClass('animated fadeInLeft').css("opacity", "1");
   }, {
       offset: -200
});

$(".socials__1")
.waypoint( function(dir) {
	$(this).css("opacity", "0");
	if ( dir === 'down' )
        $(this)
        .removeClass('animated bounceOutLeft')
        .addClass('animated bounceInLeft').css("opacity", "1");
   else
        $(this)
        .removeClass('animated bounceInLeft')
        .addClass('animated bounceOutLeft').css("opacity", "0");
	}, {
	    offset: '93%'
	}).waypoint( function(dir) {
		$(this).css("opacity", "0");
		if ( dir === 'down' )
	        $(this)
	        .removeClass('animated bounceInLeft')
	        .addClass('animated bounceOutLeft').css("opacity", "0");
	   else
	        $(this)
	        .removeClass('animated bounceOutLeft')
	        .addClass('animated bounceInLeft').css("opacity", "1");
	}, {
	    offset: -$(window).height()
});

$(".socials__2")
.waypoint( function(dir) {
	$(this).css("opacity", "0");
	if ( dir === 'down' )
        $(this)
        .removeClass('animated bounceOutDown')
        .addClass('animated bounceInDown').css("opacity", "1");
   else
        $(this)
        .removeClass('animated bounceInDown')
        .addClass('animated bounceOutDown').css("opacity", "0");
	}, {
	    offset: '93%'
	}).waypoint( function(dir) {
		$(this).css("opacity", "0");
		if ( dir === 'down' )
	        $(this)
	        .removeClass('animated bounceInDown')
	        .addClass('animated bounceOutDown').css("opacity", "0");
	   else
	        $(this)
	        .removeClass('animated bounceOutDown')
	        .addClass('animated bounceInDown').css("opacity", "1");
	}, {
	    offset: -$(window).height()
});

$(".socials__3")
.waypoint( function(dir) {
	$(this).css("opacity", "0");
	if ( dir === 'down' )
        $(this)
        .removeClass('animated bounceOutDown')
        .addClass('animated bounceInUp').css("opacity", "1");
   else
        $(this)
        .removeClass('animated bounceInUp')
        .addClass('animated bounceOutDown').css("opacity", "0");
	}, {
	    offset: '93%'
	}).waypoint( function(dir) {
		$(this).css("opacity", "0");
		if ( dir === 'down' )
	        $(this)
	        .removeClass('animated bounceInUp')
	        .addClass('animated bounceOutDown').css("opacity", "0");
	   else
	        $(this)
	        .removeClass('animated bounceOutDown')
	        .addClass('animated bounceInUp').css("opacity", "1");
	}, {
	    offset: -$(window).height()
});

$(".socials__4")
.waypoint( function(dir) {
	$(this).css("opacity", "0");
	if ( dir === 'down' )
        $(this)
        .removeClass('animated bounceOutRight')
        .addClass('animated bounceInRight').css("opacity", "1");
   else
        $(this)
        .removeClass('animated bounceInRight')
        .addClass('animated bounceOutRight').css("opacity", "0");
	}, {
	    offset: '93%'
	}).waypoint( function(dir) {
		$(this).css("opacity", "0");
		if ( dir === 'down' )
	        $(this)
	        .removeClass('animated bounceInRight')
	        .addClass('animated bounceOutRight').css("opacity", "0");
	   else
	        $(this)
	        .removeClass('animated bounceOutRight')
	        .addClass('animated bounceInRight').css("opacity", "1");
	}, {
	    offset: -$(window).height()
});

$(".forma_zoom")
.waypoint( function(dir) {
	$(this).css("opacity", "0");
	if ( dir === 'down' )
        $(this)
        .removeClass('animated zoomInOut')
        .addClass('animated zoomInUp').css("opacity", "1");
   else
        $(this)
        .removeClass('animated zoomInUp')
        .addClass('animated zoomInOut').css("opacity", "0");
	}, {
	    offset: '93%'
	}).waypoint( function(dir) {
		$(this).css("opacity", "0");
		if ( dir === 'down' )
	        $(this)
	        .removeClass('animated zoomInUp')
	        .addClass('animated zoomInOut').css("opacity", "0");
	   else
	        $(this)
	        .removeClass('animated zoomInOut')
	        .addClass('animated zoomInUp').css("opacity", "1");
	}, {
	    offset: -$(window).height()
});	

new WOW().init();

// wow = new WOW({
// 	mobile: false
// });
// wow.init();



// $(document).ready(function(){
// 	$(".nav").animated("fadeInRight", "fadeOutRight");
// }); 

//Гамбургер меню

var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }

$(".hamburger").click(function(){
	$("#hamburger__sidebar").slideToggle(300);
});

$(".navs__href").click(function(){
	$("#hamburger__sidebar").slideToggle(300);
	$(".hamburger").toggleClass("is-active");
});

$(".rental").click(function(){
	$("#order__rental").arcticmodal();
});


//Инициализация модального окна MagnificPopup
$('.popup_content, .popup-link').magnificPopup({
  type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300
    //mainClass: 'my-mfp-slide-bottom'
 });

$(".team__fotos .fotos_items .men1").click(function(){
	$(".team__name h3").fadeOut();
	$("h3.men1").fadeIn(1500);
	$(".team__info p").fadeOut();
	$(".team__info p.men1").slideToggle(1500);
	$(".team__big__foto img").fadeOut();
	$("img.men1").slideToggle(1500);
	$(".all__ff").addClass('all__f');
	$(".all__dd").addClass('all__d');
	$(".all__bb").addClass('all__b');
	$(".all__tt").addClass('all__t');
	setTimeout(function (){
		$(".all__ff").removeClass('all__f');
		$(".all__dd").removeClass('all__d');
		$(".all__bb").removeClass('all__b');
		$(".all__tt").removeClass('all__t');
   },1000);
   //Меняем линки на соцсети и публикации работ для каждого члена команды
   $(".all__ff").attr("href", "https://www.facebook.com/Stive-Jobs-149814438447565/?fref=ts");
   $(".all__dd").attr("href", "https://www.facebook.com/Stive-Jobs-149814438447565/?fref=ts");
   $(".all__bb").attr("href", "https://www.facebook.com/Stive-Jobs-149814438447565/?fref=ts");
   $(".all__tt").attr("href", "https://www.facebook.com/Stive-Jobs-149814438447565/?fref=ts");
});

$(".team__fotos .fotos_items .men2").click(function(){
	$(".team__name h3").fadeOut();
	$("h3.men2").fadeIn(1500);
	$(".team__info p").fadeOut();
	$(".team__info p.men2").slideToggle(1500);
	$(".team__big__foto img").fadeOut();
	$("img.men2").slideToggle(1500);
	$(".all__ff").addClass('all__f');
	$(".all__dd").addClass('all__d');
	$(".all__bb").addClass('all__b');
	$(".all__tt").addClass('all__t');
	setTimeout(function (){
		$(".all__ff").removeClass('all__f');
		$(".all__dd").removeClass('all__d');
		$(".all__bb").removeClass('all__b');
		$(".all__tt").removeClass('all__t');
   },1000);
    //Меняем линки на соцсети и публикации работ для каждого члена команды
   $(".all__ff").attr("href", "https://www.facebook.com/search/top/?init=quick&q=MIKL%20PARADIZE&tas=0.5855366425351525");
   $(".all__dd").attr("href", "https://www.facebook.com/search/top/?init=quick&q=MIKL%20PARADIZE&tas=0.5855366425351525");
   $(".all__bb").attr("href", "https://www.facebook.com/search/top/?init=quick&q=MIKL%20PARADIZE&tas=0.5855366425351525");
   $(".all__tt").attr("href", "https://www.facebook.com/search/top/?init=quick&q=MIKL%20PARADIZE&tas=0.5855366425351525");
});

$(".team__fotos .fotos_items .woomen1").click(function(){
	$(".team__name h3").fadeOut();
	$("h3.woomen1").fadeIn(1500);
	$(".team__info p").fadeOut();
	$(".team__info p.woomen1").slideToggle(1500);
	$(".team__big__foto img").fadeOut();
	$("img.woomen1").slideToggle(1500);
	$(".all__ff").addClass('all__f');
	$(".all__dd").addClass('all__d');
	$(".all__bb").addClass('all__b');
	$(".all__tt").addClass('all__t');
	setTimeout(function (){
		$(".all__ff").removeClass('all__f');
		$(".all__dd").removeClass('all__d');
		$(".all__bb").removeClass('all__b');
		$(".all__tt").removeClass('all__t');
   },1000);
   //Меняем линки на соцсети и публикации работ для каждого члена команды
   $(".all__ff").attr("href", "https://www.facebook.com/merylstreepforever1/?nr");
   $(".all__dd").attr("href", "https://www.facebook.com/merylstreepforever1/?nr");
   $(".all__bb").attr("href", "https://www.facebook.com/merylstreepforever1/?nr");
   $(".all__tt").attr("href", "https://www.facebook.com/merylstreepforever1/?nr");
});

$(".team__fotos .fotos_items .woomen2").click(function(){
	$(".team__name h3").fadeOut();
	$("h3.woomen2").fadeIn(1500);
	$(".team__info p").fadeOut();
	$(".team__info p.woomen2").slideToggle(1500);
	$(".team__big__foto img").fadeOut();
	$("img.woomen2").slideToggle(1500);
	$(".all__ff").addClass('all__f');
	$(".all__dd").addClass('all__d');
	$(".all__bb").addClass('all__b');
	$(".all__tt").addClass('all__t');
	setTimeout(function (){
		$(".all__ff").removeClass('all__f');
		$(".all__dd").removeClass('all__d');
		$(".all__bb").removeClass('all__b');
		$(".all__tt").removeClass('all__t');
   },1000);
   //Меняем линки на соцсети и публикации работ для каждого члена команды
   $(".all__ff").attr("href", "https://www.facebook.com/nikita.parsons.7?fref=ts");
   $(".all__dd").attr("href", "https://www.facebook.com/nikita.parsons.7?fref=ts");
   $(".all__bb").attr("href", "https://www.facebook.com/nikita.parsons.7?fref=ts");
   $(".all__tt").attr("href", "https://www.facebook.com/nikita.parsons.7?fref=ts");
});

//Плавный скролл

$(document).ready(function() {
    $(".scrollto").click(function () {
        var elementClick = '#'+$(this).attr("href").split("#")[1]
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
});

//Обработка формы и отправка данных

$(document).ready(function(){
	$('[data-submit]').on('click', function(){
		// e.preventDefault();
		$(this).parent('form').submit();
	})
	$.validator.addMethod(
	        "regex",
	        function(value, element, regexp) {
	            var re = new RegExp(regexp);
	            return this.optional(element) || re.test(value);
	        },
	        "Please check your input."
			);
	function valEl(el){
         el.validate({
        	rules:{
         	tel:{
            	required:true,
            	regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
          	},
         	name:{
            	required:true
         	},
          	email:{
          		required:true,
            	email:true
          	}
        	},
         messages:{
            tel:{
              	required:'This field is required!',
              	regex:'Invalid Phone Format!'
            },
            name:{
              	required:'This field is required!',
            },
            email:{
            	required:'This field is required!',	
            	email:'Invalid E-mail Format!'
            }
        	},           
        	submitHandler: function (form) {
        		$('#loader').fadeIn();
	       		var $form = $(form);
	        		var $formId = $(form).attr('id');
	        		switch($formId){
		        	case'goToNewPage':
		            $.ajax({
		               type: 'POST',
		               url: $form.attr('action'),
		               data: $form.serialize(),
		            })
	                .always(function (response) {  
	                    //ссылка на страницу "спасибо" - редирект
	                    location.href='https://';
	                    //отправка целей в Я.Метрику и Google Analytics
	                    ga('send', 'event', 'masterklass7', 'register');
						yaCounter27714603.reachGoal('lm17lead');
		            });
		        	break;        
		        	case'popupResult':
	    				 $.ajax({
	                  type: 'POST',
	                  url: $form.attr('action'),
	                  data: $form.serialize(),
	                })
	                .always(function (response) {

	                setTimeout(function (){
	                 $('#loader').fadeOut();
	                },1500);
	                setTimeout(function (){
	                  $('#overlay').fadeIn();
	                  $form.trigger('reset');
	                },1600);
	                $('#overlay').on('click', function(e) {
	  						$('#overlay').fadeOut();
						});
	            });
	        		break;
        		}	       
return false; 
    }                           
  })
   }                        
   $('.js-form').each(function() {
      valEl($(this)); 
   });
	$('[data-scroll]').on('click', function(){
		$('html, body').animate({
	        scrollTop: $( $.attr(this, 'data-scroll') ).offset().top
	    }, 2000);
	    event.preventDefault();
	})          
})

//Кнопка "Вверх"

$(window).scroll(function(){
	if($(this).scrollTop() > $(this).height()){
		$('.top').addClass('top__active');
	}else{
		$('.top').removeClass('top__active');
	}
});

$('.top').click(function(){
	$('html, body').stop().animate({scrollTop:0},"slow","swing");
});

//Иницыализация прелоадера

$(window).on("load",function(){
	$(".preloader").delay(2000).fadeOut("slow", function(){Stop();
		// $("#display").clearQueue();
		// $("#display").Stop();
	});
});

//Иницыализация анимации на сайте

window.afterglow.init();

// The preloader script

var width = $(window).width();
var height = $(window).height();

var width = 1280;
var height = 1024;

var vbuf;
var pstart;
var nump;

var canvasElement;
var gl;
window.onload = function() {
  canvasElement = document.getElementById("display");
  canvasElement.width = width;
  canvasElement.height = height;
  
  gl = canvasElement.getContext("webgl");
  if (!gl) {
    gl = canvasElement.getContext("experimental-webgl");
    if (!gl) alert("WebGL not supported!");
  }
  
  nump = 48000;
  pstart = new Float32Array(nump*2);
  var i = pstart.length;
  while (i--) {
    pstart[i] = 0;
    while (pstart[i]*pstart[i] < .3) {
      pstart[i] = Math.random()*2-1;
    }
  }
  
  vbuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER,vbuf);
  gl.bufferData(gl.ARRAY_BUFFER,pstart,gl.STATIC_DRAW);
  
  var vsh = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vsh,
  "\nprecision mediump float;"+
  "attribute vec2 Vertex; varying vec2 V; uniform float T;"+
  "void main(void) {"+
  "gl_PointSize = 2.; V = Vertex;"+
  "vec2 v = Vertex*(mod(T+length(Vertex),1.));"+
  "float ct = (cos(v.x*30.+T*20.)+cos(v.y*30.+T*20.));"+
  "v = mat2(sin(v.x*(10.+ct)),cos(v.x*(10.+ct)),cos(v.y*(10.+ct)),sin(v.y*(10.+ct)))*v;"+
  "gl_Position=vec4(v,0.,1.);"+
  "}"               
                 );
  gl.compileShader(vsh);
  
  var fsh = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fsh,
  "\nprecision mediump float; varying vec2 V; uniform float T;"+
  "void main(void) {"+
  "gl_FragColor = vec4(.7,.7,1.,.1);}");
  
  gl.compileShader(fsh);
  
  var program = gl.createProgram();
  gl.attachShader(program,vsh);
  gl.attachShader(program,fsh);
  gl.linkProgram(program);
  gl.useProgram(program);
  
  var vattr = gl.getAttribLocation(program,"Vertex");
  gl.enableVertexAttribArray(vattr);
  gl.vertexAttribPointer(vbuf,2,gl.FLOAT,false,4,0);
  
  tuni = gl.getUniformLocation(program,"T");
  
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);
  
  gl.disable(gl.DEPTH_TEST);
  
  gl.clearColor(0,0,0,1);
  
  if (!window.requestAnimationFrame) window.requestAnimationFrame = setTimeout;
    
  startTime = Date.now();
  render();
}
                
 var tuni,startTime;      
function render() {
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.uniform1f(tuni,(Date.now()-startTime)/30000.);
  gl.drawArrays(gl.POINTS,0,nump);
  
  window.requestAnimationFrame(render);
}

// Mail overlay overlay script

var w = c.width = window.innerWidth,
		h = c.height = window.innerHeight,
		ctx = c.getContext( '2d' ),
		
		opts = {
			
			range: 180,
			baseConnections: 3,
			addedConnections: 5,
			baseSize: 5,
			minSize: 1,
			dataToConnectionSize: .4,
			sizeMultiplier: .7,
			allowedDist: 40,
			baseDist: 40,
			addedDist: 30,
			connectionAttempts: 100,
			
			dataToConnections: 1,
			baseSpeed: .04,
			addedSpeed: .05,
			baseGlowSpeed: .4,
			addedGlowSpeed: .4,
			
			rotVelX: .003,
			rotVelY: .002,
			
			repaintColor: '#111',
			connectionColor: 'hsla(200,60%,light%,alp)',
			rootColor: 'hsla(0,60%,light%,alp)',
			endColor: 'hsla(160,20%,light%,alp)',
			dataColor: 'hsla(40,80%,light%,alp)',
			
			wireframeWidth: .1,
			wireframeColor: '#88f',
			
			depth: 250,
			focalLength: 250,
			vanishPoint: {
				x: w / 2,
				y: h / 2
			}
		},
		
		squareRange = opts.range * opts.range,
		squareAllowed = opts.allowedDist * opts.allowedDist,
		mostDistant = opts.depth + opts.range,
		sinX = sinY = 0,
		cosX = cosY = 0,
		
		connections = [],
		toDevelop = [],
		data = [],
		all = [],
		tick = 0,
		totalProb = 0,
		
		animating = false,
		
		Tau = Math.PI * 2;

ctx.fillStyle = '#222';
ctx.fillRect( 0, 0, w, h );
ctx.fillStyle = '#ccc';
ctx.font = '50px Verdana';
ctx.fillText( 'Calculating Nodes', w / 2 - ctx.measureText( 'Calculating Nodes' ).width / 2, h / 2 - 15 );

window.setTimeout( init, 4 ); // to render the loading screen

function init(){
	
	connections.length = 0;
	data.length = 0;
	all.length = 0;
	toDevelop.length = 0;
	
	var connection = new Connection( 0, 0, 0, opts.baseSize );
	connection.step = Connection.rootStep;
	connections.push( connection );
	all.push( connection );
	connection.link();
	
	while( toDevelop.length > 0 ){
	
		toDevelop[ 0 ].link();
		toDevelop.shift();
	}
	
	if( !animating ){
		animating = true;
		anim();
	}
}
function Connection( x, y, z, size ){
	
	this.x = x;
	this.y = y;
	this.z = z;
	this.size = size;
	
	this.screen = {};
	
	this.links = [];
	this.probabilities = [];
	this.isEnd = false;
	
	this.glowSpeed = opts.baseGlowSpeed + opts.addedGlowSpeed * Math.random();
}
Connection.prototype.link = function(){
	
	if( this.size < opts.minSize )
		return this.isEnd = true;
	
	var links = [],
			connectionsNum = opts.baseConnections + Math.random() * opts.addedConnections |0,
			attempt = opts.connectionAttempts,
			
			alpha, beta, len,
			cosA, sinA, cosB, sinB,
			pos = {},
			passedExisting, passedBuffered;
	
	while( links.length < connectionsNum && --attempt > 0 ){
		
		alpha = Math.random() * Math.PI;
		beta = Math.random() * Tau;
		len = opts.baseDist + opts.addedDist * Math.random();
		
		cosA = Math.cos( alpha );
		sinA = Math.sin( alpha );
		cosB = Math.cos( beta );
		sinB = Math.sin( beta );
		
		pos.x = this.x + len * cosA * sinB;
		pos.y = this.y + len * sinA * sinB;
		pos.z = this.z + len *        cosB;
		
		if( pos.x*pos.x + pos.y*pos.y + pos.z*pos.z < squareRange ){
		
			passedExisting = true;
			passedBuffered = true;
			for( var i = 0; i < connections.length; ++i )
				if( squareDist( pos, connections[ i ] ) < squareAllowed )
					passedExisting = false;

			if( passedExisting )
				for( var i = 0; i < links.length; ++i )
					if( squareDist( pos, links[ i ] ) < squareAllowed )
						passedBuffered = false;

			if( passedExisting && passedBuffered )
				links.push( { x: pos.x, y: pos.y, z: pos.z } );
			
		}
		
	}
	
	if( links.length === 0 )
		this.isEnd = true;
	else {
		for( var i = 0; i < links.length; ++i ){
			
			var pos = links[ i ],
					connection = new Connection( pos.x, pos.y, pos.z, this.size * opts.sizeMultiplier );
			
			this.links[ i ] = connection;
			all.push( connection );
			connections.push( connection );
		}
		for( var i = 0; i < this.links.length; ++i )
			toDevelop.push( this.links[ i ] );
	}
}
Connection.prototype.step = function(){
	
	this.setScreen();
	this.screen.color = ( this.isEnd ? opts.endColor : opts.connectionColor ).replace( 'light', 30 + ( ( tick * this.glowSpeed ) % 30 ) ).replace( 'alp', .2 + ( 1 - this.screen.z / mostDistant ) * .8 );
	
	for( var i = 0; i < this.links.length; ++i ){
		ctx.moveTo( this.screen.x, this.screen.y );
		ctx.lineTo( this.links[ i ].screen.x, this.links[ i ].screen.y );
	}
}
Connection.rootStep = function(){
	this.setScreen();
	this.screen.color = opts.rootColor.replace( 'light', 30 + ( ( tick * this.glowSpeed ) % 30 ) ).replace( 'alp', ( 1 - this.screen.z / mostDistant ) * .8 );
	
	for( var i = 0; i < this.links.length; ++i ){
		ctx.moveTo( this.screen.x, this.screen.y );
		ctx.lineTo( this.links[ i ].screen.x, this.links[ i ].screen.y );
	}
}
Connection.prototype.draw = function(){
	ctx.fillStyle = this.screen.color;
	ctx.beginPath();
	ctx.arc( this.screen.x, this.screen.y, this.screen.scale * this.size, 0, Tau );
	ctx.fill();
}
function Data( connection ){
	
	this.glowSpeed = opts.baseGlowSpeed + opts.addedGlowSpeed * Math.random();
	this.speed = opts.baseSpeed + opts.addedSpeed * Math.random();
	
	this.screen = {};
	
	this.setConnection( connection );
}
Data.prototype.reset = function(){
	
	this.setConnection( connections[ 0 ] );
	this.ended = 2;
}
Data.prototype.step = function(){
	
	this.proportion += this.speed;
	
	if( this.proportion < 1 ){
		this.x = this.ox + this.dx * this.proportion;
		this.y = this.oy + this.dy * this.proportion;
		this.z = this.oz + this.dz * this.proportion;
		this.size = ( this.os + this.ds * this.proportion ) * opts.dataToConnectionSize;
	} else 
		this.setConnection( this.nextConnection );
	
	this.screen.lastX = this.screen.x;
	this.screen.lastY = this.screen.y;
	this.setScreen();
	this.screen.color = opts.dataColor.replace( 'light', 40 + ( ( tick * this.glowSpeed ) % 50 ) ).replace( 'alp', .2 + ( 1 - this.screen.z / mostDistant ) * .6 );
	
}
Data.prototype.draw = function(){
	
	if( this.ended )
		return --this.ended; // not sre why the thing lasts 2 frames, but it does
	
	ctx.beginPath();
	ctx.strokeStyle = this.screen.color;
	ctx.lineWidth = this.size * this.screen.scale;
	ctx.moveTo( this.screen.lastX, this.screen.lastY );
	ctx.lineTo( this.screen.x, this.screen.y );
	ctx.stroke();
}
Data.prototype.setConnection = function( connection ){
	
	if( connection.isEnd )
		this.reset();
	
	else {
		
		this.connection = connection;
		this.nextConnection = connection.links[ connection.links.length * Math.random() |0 ];
		
		this.ox = connection.x; // original coordinates
		this.oy = connection.y;
		this.oz = connection.z;
		this.os = connection.size; // base size
		
		this.nx = this.nextConnection.x; // new
		this.ny = this.nextConnection.y;
		this.nz = this.nextConnection.z;
		this.ns = this.nextConnection.size;
		
		this.dx = this.nx - this.ox; // delta
		this.dy = this.ny - this.oy;
		this.dz = this.nz - this.oz;
		this.ds = this.ns - this.os;
		
		this.proportion = 0;
	}
}
Connection.prototype.setScreen = Data.prototype.setScreen = function(){
	
	var x = this.x,
			y = this.y,
			z = this.z;
	
	// apply rotation on X axis
	var Y = y;
	y = y * cosX - z * sinX;
	z = z * cosX + Y * sinX;
	
	// rot on Y
	var Z = z;
	z = z * cosY - x * sinY;
	x = x * cosY + Z * sinY;
	
	this.screen.z = z;
	
	// translate on Z
	z += opts.depth;
	
	this.screen.scale = opts.focalLength / z;
	this.screen.x = opts.vanishPoint.x + x * this.screen.scale;
	this.screen.y = opts.vanishPoint.y + y * this.screen.scale;
	
}
function squareDist( a, b ){
	
	var x = b.x - a.x,
			y = b.y - a.y,
			z = b.z - a.z;
	
	return x*x + y*y + z*z;
}

function anim(){
	
	window.requestAnimationFrame( anim );
	
	ctx.globalCompositeOperation = 'source-over';
	ctx.fillStyle = opts.repaintColor;
	ctx.fillRect( 0, 0, w, h );
	
	++tick;
	
	var rotX = tick * opts.rotVelX,
			rotY = tick * opts.rotVelY;
	
	cosX = Math.cos( rotX );
	sinX = Math.sin( rotX );
	cosY = Math.cos( rotY );
	sinY = Math.sin( rotY );
	
	if( data.length < connections.length * opts.dataToConnections ){
		var datum = new Data( connections[ 0 ] );
		data.push( datum );
		all.push( datum );
	}
	
	ctx.globalCompositeOperation = 'lighter';
	ctx.beginPath();
	ctx.lineWidth = opts.wireframeWidth;
	ctx.strokeStyle = opts.wireframeColor;
	all.map( function( item ){ item.step(); } );
	ctx.stroke();
	ctx.globalCompositeOperation = 'source-over';
	all.sort( function( a, b ){ return b.screen.z - a.screen.z } );
	all.map( function( item ){ item.draw(); } );
	
	/*ctx.beginPath();
	ctx.strokeStyle = 'red';
	ctx.arc( opts.vanishPoint.x, opts.vanishPoint.y, opts.range * opts.focalLength / opts.depth, 0, Tau );
	ctx.stroke();*/
}

window.addEventListener( 'resize', function(){
	
	opts.vanishPoint.x = ( w = c.width = window.innerWidth ) / 2;
	opts.vanishPoint.y = ( h = c.height = window.innerHeight ) / 2;
	ctx.fillRect( 0, 0, w, h );
});
window.addEventListener( 'click', init );

// Resize Window Section
// $(document).ready(function() {
//    function heightDetect(){
//    	$(".main__head").css("height", $(window).height());
//    };
//    heightDetect();
//    $(window).resize(function(){
//    	heightDetect();
//    });
// });

// $(".togle_mnu").click(function() {
// 	if($(".top.mnu").is(":visible")){
// 		$(".top.mnu").fadeOut(600);
// 	} else {
// 		$(".top.mnu").fadeIn(600);
// 	};
// });