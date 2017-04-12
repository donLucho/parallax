var DRYOBJ = ( function ( ) {

	/*################  ES5 pragma  ######################*/
	'use strict';	

	// ALL FORESEEABLE HOISTS	
	
	// The Browser Prefixes
	var _arVendorPREs = [ "moz", "ms", "webkit", "o" ];

	// ######################
	// ##   Window object
	// ######################
	var _window = window; 

	// html5 Touch API support 
	function _If_Touch() {
		return !!( window.Touch );
		// return !!("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch );
	}
	
		// ######################
	// ##   Confirm Video Codices Routine(s)
	// ######################	
	
	function _ReturnVideoCodex( vidByID_pm ) { 
		
		var vdcdxTxt = "";
		if( vidByID_pm.canPlayType && vidByID_pm.canPlayType('video/webm; codecs="vp8, vorbis"') ) {
			// return !!( vidByID_pm.canPlayType && vidByID_pm.canPlayType('video/webm; codecs="vp8, vorbis"') );
			return vdcdxTxt = "webm";
		}
		else 
		if( vidByID_pm.canPlayType && vidByID_pm.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"') ) {
			// return !!( vidByID_pm.canPlayType && vidByID_pm.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"') );
			return vdcdxTxt = "mp4";
		}
		else 
		if( vidByID_pm.canPlayType && vidByID_pm.canPlayType('video/ogg; codecs="theora"') ) { 
			// return !!( vidByID_pm.canPlayType && vidByID_pm.canPlayType('video/ogg; codecs="theora"') );
			return vdcdxTxt = "ogv";
		}
		
		return vdcdxTxt;
		
	}


	// ############################
	// ## 
	// ##     AddEventoHandler Facade Pattern Function
	// ##     function _AddEventoHandler(nodeFlanders, type, callback) {}
	// ##     
	// ##     RemoveEventoHandler Facade Pattern Function
	// ##     function _RemoveEventoHandler(nodeFlanders, type, callback) {	}
	// ##     
	// ##     Each designed to minimize anticipated 
	// ##     disconnect between each the W3C/Netscape
	// ##     and IE8 browser implementation models
	// ##     NO NEED FOR EXAMPLES... these are "GO-TIME" ready!
	// ##     
	// ##     Motivated by each Douglas "Release The 'Crock'" Crockford, John Resig, 
	// ##     Dean Edwards, and Sunday evenings on FOX from many, many, many years ago-- ¡Grax a todos! (Thank you all)
	// ##     
	// ##     But with respect to the separation of 'DOMContentLoaded' from any other type of
	// ##     event behavior contained within the AddEventoHandler Facade Pattern Function is 100% don Lucho's idea.
	// ##     
	// ############################
	function _AddEventoHandler( nodeFlanders, type, callback ) {
		if( type !== "DOMContentLoaded") { 
			if( nodeFlanders.addEventListener ) { 
				// W3C browser implementation 
				nodeFlanders.addEventListener( type, callback, false);
			}		
			else	
			if( nodeFlanders.attachEvent ) { 
				// IE8-- browser implementation 
				nodeFlanders.attachEvent( "on" + type, callback );
			} 		
			else { 
				// Classical Event model
				nodeFlanders["on" + type] = callback; 
			}
		}
		else 
		if( type === "DOMContentLoaded" ) { 
			if( nodeFlanders.addEventListener ) { 
				// W3C browser implementation 
				nodeFlanders.addEventListener( type, callback, false);
			}
			else 
			if( nodeFlanders.attachEvent ) { 
				if( nodeFlanders.readyState === "loading" ) {
					nodeFlanders.onreadystatechange = callback;
				}
			}
			else { 
				// Classical Event model
				nodeFlanders["on" + type] = callback; 
			}
		}
	}
	function _RemoveEventoHandler( nodeFlanders, type, callback ) {		
		
		if( nodeFlanders.removeEventListener) {
			// W3C browser implementation 
			 nodeFlanders.removeEventListener( type, callback, false);
		}
		else 
		if( nodeFlanders.detachEvent ) { 
			// IE8-- browser implementation PLUS the Classical model
			nodeFlanders.detachEvent( "on" + type, callback );
			
		}		
		else { 
			 nodeFlanders[ type + callback ] = null;
		}
		
	}

	// ######################
	// ##   Generic CSS Property Constructor Routine 
	// ##   with pm1( CSSProp ) 
	// ##   and pm2( document.createElement("div").style ) 
	// ######################	
	
	function _ReturnJSProperty( pm1 ) { // ( pm1, pm2 ) 
		var pm2 = document.createElement("div").style; // 
		var ar_vendorPreez = _arVendorPREs; // -->  object
		// [ "moz", "ms", "webkit", "o" ] 
		var clCharMax = ar_vendorPreez.length; // 3 
		var leProp;
		var dL;
		
		var param = pm1; // " transform "
		var paramEl = pm2; // " document.createElement("div").style "
		var len = param.length; 
		var nc = param.slice( 0,1 ); // t
		var Uc = param.slice( 0,1 ).toUpperCase(); // T
		
		var Param = param.replace( nc, Uc ); // transform	
		if ( param in paramEl ) { 
			leProp = param; 
		} 
		for ( dL = 0; dL < clCharMax; dL = dL + 1) { 
			if ( ar_vendorPreez[ dL ] + Param in paramEl ) { 
		// " transform " --> msTransform, webkitTransform, oTransform, mozTransform
				leProp = ar_vendorPreez[ dL ] + Param; 
			} 
		} 
		return leProp;
	}

	// ######################
	// ##   Return CSS Property Routine 
	// ##   with pm1( CSSProp ) 
	// ##   and pm2( document.createElement("div").style ) 
	// ######################	
	
	function _ReturnCSSProperty( pm1 ) { // ( pm1, pm2 ) 
		var dashChar = "-";
		var pm2 = document.createElement("div").style;  
		var ar_vendorPreez = _arVendorPREs; // -->  object
		// [ "moz", "ms", "webkit", "o" ] 
		var clCharMax = ar_vendorPreez.length; // 3 
		var leProp;
		var dL;
		
		var param = pm1; // " transform "
		var paramEl = pm2; // " document.createElement("div").style "
		var len = param.length; 
		var nc = param.slice( 0,1 ); // t
		var Uc = param.slice( 0,1 ).toUpperCase(); // T
		
		var Param = param.replace( nc, Uc ); // transform	
		if ( param in paramEl ) { 
			leProp = param; 
		} 
		for ( dL = 0; dL < clCharMax; dL = dL + 1) { 
			if ( ar_vendorPreez[ dL ] + Param in paramEl ) { 
		// " transform " --> -ms-transform, -webkit-transform, -o-transform, -moz-transform
				leProp = dashChar + ar_vendorPreez[ dL ] + dashChar + param; 
			} 
		} 
		return leProp;
	}

	// END of _private properties 
	return {

		DeviceCapabilities : { 
			html5_If_Touch : function() { 
				return _If_Touch();	
			} 
		} ,

		Codices: { 
			ReturnVideoCodex : function( vidByID_pm ) {
				return _ReturnVideoCodex( vidByID_pm );
			} 
		} , // END DRYOBJ.Codices  

		RetELs : {
			glow : function() { 
				return _window; 
			} 
		} , // END DRYOBJ.RetELs
				
		ApplyPrefixes : { 
			ReturnJSProperty : function( pm1 ) {
				return _ReturnJSProperty( pm1 );
			} , 
			ReturnCSSProperty : function( pm1 ) {
				return _ReturnCSSProperty( pm1 );
			} 
		} , // END DRYOBJ.ApplyPrefixes 
		
		Utils : {

			// ######################
			// ##   
			// ##   Anti-featureDetection pattern(s)
			// ##   
			// ##   SnifferREGEX()
			// ##   
			// ######################
			
			SnifferREGEX : function() { 			
				if(navigator.userAgent.match(/iPad/)) {
					return "iPad";
				}
				else 
				if(navigator.userAgent.match(/iPod/)) { 
					return "iPod";
				}
				else 
				if(navigator.userAgent.match(/iPhone/)) { 
					return "iPhone";
				}
				else 
				if(navigator.userAgent.match(/Linux; Android /)) { 
					return "Newer_Android_Device";
				}
				else
				if(navigator.userAgent.match(/Android.*Mobile Safari/i)) { 
					return "Android_Phone";
				}
				else 
				if(navigator.userAgent.match(/Android.*Safari/i)) { 
					return "Android_Tablet";
				}
				return "Sorry_Charlie";
			} , // END DRYOBJ.Utils.SnifferREGEX

			evt_u : {
				AddEventoHandler : function( nodeFlanders, type, callback ) {
					return _AddEventoHandler( nodeFlanders, type, callback );
				} , 
				RemoveEventoHandler : function( nodeFlanders, type, callback ) {
					return _RemoveEventoHandler( nodeFlanders, type, callback );
				} 
			} //  , // END DRYOBJ.Utils.evt_u

			
		} // END DRYOBJ.Utils

	}; // END public properties
}() ); // console.log( DRYOBJ ); 

var Gh_pages_parallax = ( function () {
	
	var _wooly_Touch = DRYOBJ.DeviceCapabilities.html5_If_Touch();
	var _fingerCount, _startX, _startY, _lastX, _lastY, _dragging = false, vidEL_configObject;

	// #############
	// NEW functionality

	var _str_href = window.location.href; 
	// console.log( "_str_href" , _str_href ); // ~ https://donlucho.github.io/parallax/ 

	// #############	

	vidEL_configObject = { 
		fallbackURLs : { ogv : _str_href + "media/bnc_ogv/sanji-n-nami.ogv" , mp4 : _str_href + "media/bnc_mp4/sanji-n-nami.mp4" , mp4v2 : _str_href + "media/bnc_iOS_mp4/sanji-n-nami_iOS.mp4" , webm : _str_href + "media/bnc_webM/sanji-n-nami.webm" }, 		
		posterADDR : _str_href + "img/shared/nami-chwan.jpg" , 
		vidELID : "visual" 
	};
	
	var YEAR = new Date().getFullYear(); 
	var ownDOC = window.document;
	var windowOBJ = window.self;	

	var GLO_innerWidth = function() {
		return windowOBJ.innerWidth;
	};
	var GLO_innerHeight = function() {
		return windowOBJ.innerHeight;
	};
	var GLO_pageYOff = function() {
		return windowOBJ.pageYOffset;
	};	
	
	var YcurrentTGT = function() {
		return GLO_innerHeight() + GLO_pageYOff();
	};
	
	var bananaNutCake = window.document.body;
	var BNCSH = function() {
		return bananaNutCake.scrollHeight;
	};
	var BNCSW = function() {
		return bananaNutCake.scrollWidth;
	};
		
	var NamiChwan = document.getElementById( "NamiChwan" );
	var NAMISH = function() {
		return NamiChwan.scrollHeight;
	};
	var NAMISW = function() {
		return NamiChwan.scrollWidth;
	};
	
	/* STUFF WAS HERE...*/	
	
	function _DOMCONLO() {

		MaterialInsertion();


		if( ( _wooly_Touch !== "false" ) && ( document.documentElement.clientWidth <= 1024 ) ){ 
		// if( ( _wooly_Touch !== "false" ) && ( window.screen.width <= 1024 ) ){ 
		// if( ( _wooly_Touch !== "false" ) && ( ( window.screen.width <= 1024 ) || ( document.documentElement.clientWidth <= 1024 ) ) ){ 

			_touchAboutIt();

		} 
		else { 
			_InitDCL();	
		}
		
	}

	function MaterialInsertion() {
		
		var one_Frag = document.createDocumentFragment();
		var one_EL = document.createElement("section");
		one_EL.setAttribute( "id", "one" );
		one_EL.setAttribute( "class", "recipe" );
		
		var stFrag = document.createDocumentFragment();
		var divST = document.createElement( "div" );
		divST.setAttribute( "id", "specialtyTitle" );
		
		if( ( _wooly_Touch !== "false" ) && ( document.documentElement.clientWidth <= 1024 ) ){ 
		// if( ( _wooly_Touch !== "false" ) && ( window.screen.width <= 1024) ){
			divST.setAttribute( "class", "red" );
		}
		
		stFrag.appendChild( divST ); // <div id="specialtyTitle">
		one_EL.appendChild( stFrag ); 
		
		var art1_Frag = document.createDocumentFragment();
		var art1 = document.createElement( "article" );
		art1.setAttribute( "id", "artOneIntro" );
		
		// >> insert ANOTHER level >> 
		var imgFrag = document.createDocumentFragment();
		var titleImg = document.createElement("img");
		
		titleImg.setAttribute( "id", "title" );
		
		if( !(window.matchMedia) ) { 
			var sniffer = DRYOBJ.Utils.SnifferREGEX();
			if( sniffer === "iPad" ) {
				titleImg.setAttribute( "src", _str_href + "img/TABz/disclaimer_1024.png" );
			} 
			else
			if( sniffer === "iPod" || sniffer === "iPhone" ) {
				titleImg.setAttribute( "src", _str_href + "img/PHONEs/disclaimer_480.png" );
			}
		}
		else 
		if( !!window.matchMedia !== "undefined" ) { 
			if( window.matchMedia( "(max-width: 320px)" ).matches ) {
				titleImg.setAttribute( "src", _str_href + "img/PHONEs/disclaimer_480.png" ); // 240 - 319px
			} 			
			else 
			if( window.matchMedia( "(max-width: 480px)" ).matches ) {
				titleImg.setAttribute( "src", _str_href + "img/PHONEs/disclaimer_480.png" ); // 320 - 479px
			} 
			else 
			if( window.matchMedia( "only screen and (max-width: 480px) and (max-device-width: 480px) and (orientation: landscape)" ).matches ) {
				titleImg.setAttribute( "src", _str_href + "img/PHONEs/disclaimer_480.png" ); // 480px
			}
			else 
			if( window.matchMedia( "only screen and (max-width: 320px) and (max-device-width: 320px) and (orientation: portrait)" ).matches ) {
				titleImg.setAttribute( "src", _str_href + "img/PHONEs/disclaimer_480.png" ); // 320px
			}
			else 
			if( window.matchMedia( "(max-width: 767px)" ).matches ) {
				titleImg.setAttribute( "src", _str_href + "img/TABz/disclaimer_1024.png" ); // 480 - 767px
			}
			else 
			if( window.matchMedia( "(max-width: 1024px)" ).matches ) {
				titleImg.setAttribute( "src", _str_href + "img/TABz/disclaimer_1024.png" ); // 768 - 1024px
			}
			else 
			if( window.matchMedia( "only screen and (max-width: 1024px) and (max-device-width: 1024px) and (orientation: landscape)" ).matches ) {
				titleImg.setAttribute( "src", _str_href + "img/TABz/disclaimer_1024.png" ); // 1024px
			}
			else 
			if( window.matchMedia( "only screen and (max-width: 768px) and (max-device-width: 768px) and (orientation: portrait)" ).matches ) {
				titleImg.setAttribute( "src", _str_href + "img/TABz/disclaimer_1024.png" ); // 768px
			}
			else 
			if( window.matchMedia( "(min-width: 1025px)" ).matches ) {
				titleImg.setAttribute( "src", _str_href + "img/DSKTP/disclaimer.png" ); // 1) 1025px and up
			} 
		}
		else {
			titleImg.setAttribute( "src", _str_href + "img/DSKTP/disclaimer.png" );
		}

		titleImg.setAttribute( "alt", "Please leave if you get offended easily. This Web Page Contains Irony - Viewer Discretion Is Advised" );
		
		imgFrag.appendChild( titleImg ); 
		art1.appendChild( imgFrag );
		
		// >> insert ANOTHER level >>
		var p1_EL_Frag = document.createDocumentFragment();
		var p1_EL_items = [ "This is an artistic expression of what it means to be a \"contradiction in terms.\" Others call this \"irony.\"", "I present my \"parallax-page\" to be read more as a poem than a recipe.", "Concept, artwork, etc. by  \'don Lucho\' (yada, yada, yada)  " + YEAR + " - Not copyrighted" ];
		var p1_EL, F;
		
		for ( F = 0; p1_EL_items[ F ]; F = F + 1) {
			p1_EL = document.createElement("p");
			if(  F === 2 ) {
				p1_EL.setAttribute( "class", "plug" );
			}
			p1_EL.appendChild( document.createTextNode( p1_EL_items[ F ] ) );
			p1_EL_Frag.appendChild( p1_EL ); 
		}
		
		// divDOMO_2_Frag.appendChild( divDOMO_2 ); 
		// art1.appendChild( divDOMO_2_Frag );
		
		art1.appendChild( p1_EL_Frag );
			
		art1_Frag.appendChild( art1 ); // <article id="artOneIntro">
		one_EL.appendChild( art1_Frag ); 
		
		one_Frag.appendChild( one_EL ); // <section id="one">
		NamiChwan.appendChild( one_Frag ); 
		
		var two_Frag = document.createDocumentFragment();
		var two_EL = document.createElement("section");
		two_EL.setAttribute( "id", "two" );
		two_EL.setAttribute( "class", "recipe" );
		
		var art2_Frag = document.createDocumentFragment();
		var art2 = document.createElement( "article" );
		art2.setAttribute( "id", "artTwoLefty" );
		
		// >> insert ANOTHER level >> 
		var hotel2_2Frag = document.createDocumentFragment();
		var hotel2_2 = document.createElement("h2");
		var hotel2_2_txt = "ingredients";	
		hotel2_2.appendChild( document.createTextNode( hotel2_2_txt ) );	
		hotel2_2Frag.appendChild( hotel2_2 ); 
		art2.appendChild( hotel2_2Frag );
		
		// >> insert ANOTHER level >> 
		var divDOMO_2_Frag = document.createDocumentFragment();
		var divDOMO_2 = document.createElement("div");
		divDOMO_2.setAttribute( "class" , "domo" );
		var p2_EL_Frag = document.createDocumentFragment();
		var p2_EL_items = [ "2 whole nuts","2 well shaped legs","1 large banana","2 loving eyes","2 arms","1 \"soft\" mixing bowl", "2 milk containers" ];
		var p2_EL, C;
		for ( C = 0; p2_EL_items[ C ]; C = C + 1) {
			p2_EL = document.createElement("p");
			p2_EL.appendChild( document.createTextNode(p2_EL_items[ C ]) );
			p2_EL_Frag.appendChild( p2_EL ); 
			divDOMO_2.appendChild( p2_EL_Frag );
		}
		divDOMO_2_Frag.appendChild( divDOMO_2 ); 
		art2.appendChild( divDOMO_2_Frag );
		
		art2_Frag.appendChild( art2 ); // <article id="artTwoLefty">
		two_EL.appendChild( art2_Frag ); 
		
		two_Frag.appendChild( two_EL ); // <section id="two">
		NamiChwan.appendChild( two_Frag ); 
		
		var three_Frag = document.createDocumentFragment();
		var three_EL = document.createElement("section");
		three_EL.setAttribute( "id", "three" );
		three_EL.setAttribute( "class", "recipe" );
		
		var jollyRogerFrag = document.createDocumentFragment();
		var divJR = document.createElement( "div" );
		divJR.setAttribute( "id", "jollyRoger" );
		
		if( ( _wooly_Touch !== "false" ) && ( document.documentElement.clientWidth <= 1024 ) ){ 
		// if( ( _wooly_Touch !== "false" ) && ( window.screen.width <= 1024) ){
			divJR.setAttribute( "class", "red" );
		}
		
		jollyRogerFrag.appendChild( divJR ); // <div id="jollyRoger">
		three_EL.appendChild( jollyRogerFrag ); 
		
		var art3_Frag = document.createDocumentFragment();
		var art3 = document.createElement( "article" );
		art3.setAttribute( "id", "artThreeRighty" );
		art3_Frag.appendChild( art3 ); // <article id="artThreeRighty">
		three_EL.appendChild( art3_Frag ); 
		
		// >> insert ANOTHER level >> 
		var hotel2_3Frag = document.createDocumentFragment();
		var hotel2_3 = document.createElement("h2");
		var hotel2_3_txt = "directions";	
		hotel2_3.appendChild( document.createTextNode( hotel2_3_txt ) );	
		hotel2_3Frag.appendChild( hotel2_3 ); 
		art3.appendChild( hotel2_3Frag );
		
		// >> insert ANOTHER level >> 
		var divDOMO_3_Frag = document.createDocumentFragment();
		var divDOMO_3 = document.createElement("div");
		divDOMO_3.setAttribute( "class" , "domo" );
		var p3_EL_Frag = document.createDocumentFragment();
		var p3_EL_items = [ "look into loving eyes","part the two well shaped legs","gently squeeze the two milk containers","grease the \"soft\" mixing bowl","add the large banana","cover with the two whole nuts","work in and out until well creamed" , "be sure to wash mixer" ];
		var p3_EL, D;
		for ( D = 0; p3_EL_items[ D ]; D = D + 1) {
			p3_EL = document.createElement("p");
			p3_EL.appendChild( document.createTextNode(p3_EL_items[ D ]) );
			p3_EL_Frag.appendChild( p3_EL ); 
			divDOMO_3.appendChild( p3_EL_Frag );
		}
		divDOMO_3_Frag.appendChild( divDOMO_3 ); 
		art3.appendChild( divDOMO_3_Frag );
		
		three_Frag.appendChild( three_EL ); // <section id="three">
		NamiChwan.appendChild( three_Frag ); 
		
		var four_Frag = document.createDocumentFragment();
		var four_EL = document.createElement("section");
		four_EL.setAttribute( "id", "four" );
		four_EL.setAttribute( "class", "recipe" );
		
		var art4_Frag = document.createDocumentFragment();
		var art4 = document.createElement( "article" );
		art4.setAttribute( "id", "artFourLeftyTBD" );
		art4_Frag.appendChild( art4 ); // <article id="artFourLeftyTBD">
		four_EL.appendChild( art4_Frag ); 
		
		
		// >> insert ANOTHER level >> 
		var hotel2_4Frag = document.createDocumentFragment();
		var hotel2_4 = document.createElement("h2");
		var hotel2_4_txt = "caution";	
		hotel2_4.appendChild( document.createTextNode( hotel2_4_txt ) );	
		hotel2_4Frag.appendChild( hotel2_4 ); 
		art4.appendChild( hotel2_4Frag );
		
		// >> insert ANOTHER level >> 
		var divDOMO_4_Frag = document.createDocumentFragment();
		var divDOMO_4 = document.createElement("div");
		divDOMO_4.setAttribute( "class" , "domo" );
		var p4_EL_Frag = document.createDocumentFragment();
		var p4_EL_items = [ "resist licking the \"soft\" mixing bowl until the very end - if at all... most experts agree that this step won\'t be necesary if the recipe starts out perfectly!!!" , "also, if cake begins to rise leave town immediately!!!" ];
		var p4_EL, E;
		for ( E = 0; p4_EL_items[ E ]; E = E + 1) {
			p4_EL = document.createElement("p");
			p4_EL.appendChild( document.createTextNode(p4_EL_items[ E ]) );
			p4_EL_Frag.appendChild( p4_EL ); 
			divDOMO_4.appendChild( p4_EL_Frag );
		}
		divDOMO_4_Frag.appendChild( divDOMO_4 ); 
		art4.appendChild( divDOMO_4_Frag );
		
		
		var videoFrag = document.createDocumentFragment();
		var html5Video = document.createElement("video");	
		html5Video.setAttribute( "id", vidEL_configObject.vidELID );
		
		if( ( _wooly_Touch !== "false" ) && ( document.documentElement.clientWidth <= 1024 ) ){ 
		// if( ( _wooly_Touch !== "false" ) && ( window.screen.width <= 1024) ){
			html5Video.setAttribute( "class", "red" );
		}
		
		html5Video.setAttribute( "preload", "preload");
		html5Video.setAttribute( "poster", vidEL_configObject.posterADDR );
		html5Video.setAttribute( "controls", "controls" );
		html5Video.setAttribute( "autobuffer", "autobuffer" );
		
		var vidEXT = DRYOBJ.Codices.ReturnVideoCodex( html5Video ); 
		
		if ( !!(vidEXT === "webm") ) { 
			html5Video.setAttribute( "src" , vidEL_configObject.fallbackURLs.webm );
		}
		if ( !!(vidEXT === "mp4") ) {
			
			if( !(window.matchMedia) ) { 
				if( sniffer === "iPad" || sniffer === "iPod" || sniffer === "iPhone" ) {
					html5Video.setAttribute( "src", vidEL_configObject.fallbackURLs.mp4v2 );
				}
			}
			else
			if( !!window.matchMedia !== "undefined" ) {
				html5Video.setAttribute( "src", vidEL_configObject.fallbackURLs.mp4 );
			}
		}

		if ( !!(vidEXT === "ogv") ) { 
			html5Video.setAttribute( "src", vidEL_configObject.fallbackURLs.ogv );
		}
		
		
		videoFrag.appendChild( html5Video ); // <video id="visual">
		four_EL.appendChild( videoFrag ); 
		// >> END insert
		
		four_Frag.appendChild( four_EL ); // <section id="four">
		NamiChwan.appendChild( four_Frag ); 	
		
		var closerFrag = document.createDocumentFragment();
		var closer = document.createElement("section");
		closer.setAttribute( "id", "closer" );
		closer.setAttribute( "class", "recipe" );
		
		var janeFrag = document.createDocumentFragment();
		var divJANE = document.createElement( "div" );
		divJANE.setAttribute( "id", "ja-ne" );
		janeFrag.appendChild( divJANE ); // <div id="ja-ne">
		closer.appendChild( janeFrag ); 
		
		closerFrag.appendChild( closer ); // <section id="closer">
		NamiChwan.appendChild( closerFrag ); 
		
	}
	function _InitDCL() { 
		windowOBJ.onscroll = _ScrollListen;
	}
	
	function _touchAboutIt() { 
		DRYOBJ.Utils.evt_u.AddEventoHandler( NamiChwan, "touchstart", TS );
		DRYOBJ.Utils.evt_u.AddEventoHandler( NamiChwan, "touchmove", TM );
		DRYOBJ.Utils.evt_u.AddEventoHandler( NamiChwan, "touchend", TE ); 
	}
	function isAncestor( childPM , maybeAncestorPM ) {
		return maybeAncestorPM.contains( childPM );
	} 
	
	
	function TS( leEvt ) { 
		var curTrgt = leEvt.target; 
		
		if( ( curTrgt.nodeName.toLowerCase() === "section" ) && ( !_dragging ) && ( isAncestor( curTrgt, NamiChwan ) ) ) { 
			
			var ar_CHGDtouches = leEvt.changedTouches, _fingerCount = ar_CHGDtouches.length, C; 
			
			if ( _fingerCount === 1 ) { 
				for( C = 0; C < _fingerCount; C = C + 1 ) { 
					_dragging = true;
					_startX = ar_CHGDtouches[ C ].pageX; 
					_startY = ar_CHGDtouches[ C ].pageY; 
										
				} // end for()	
				
			} // end if()
		} // END if recipeANCESTOR()
	}
	
	function TM( evt ) {
		var curTrgt = evt.target; 		
		if( ( curTrgt.nodeName.toLowerCase() === "section" ) && ( _dragging === true ) && ( isAncestor( curTrgt, NamiChwan ) ) ) { 
									
			var ar_CHGDtouches = evt.changedTouches, _fingerCount = ar_CHGDtouches.length, C; 
			
			if ( _fingerCount === 1 ) { 
				for( C = 0; C < _fingerCount; C = C + 1 ) { 
					_lastX = ar_CHGDtouches[ C ].pageX; 
					_lastY = ar_CHGDtouches[ C ].pageY; 
					
				} // end for()	
			} // end if()
			
			
			var css_transform = DRYOBJ.ApplyPrefixes.ReturnCSSProperty( "transform" );
			var transition = DRYOBJ.ApplyPrefixes.ReturnJSProperty( "transition" );
			var divST = document.getElementById("specialtyTitle");
			var divJR = document.getElementById("jollyRoger");
			var html5Video = document.getElementById("visual"); 
			divST.style[ transition ] = "" + css_transform + " 0.3515625s";
			divJR.style[ transition ] = "" + css_transform + " 0.3515625s";
			html5Video.style[ transition ] = "" + css_transform + " 0.3515625s";
			
			var one_EL = document.getElementById( "one" );
			var ONEOH = function() { return one_EL.offsetHeight; };
			var oneEighth_OneH = ( ONEOH() ) * 0.125;
			var oneQuarter_OneH = ( ONEOH() ) * 0.25;
			var two_EL = document.getElementById( "two" ); 
			var TWOOH = function() { return two_EL.offsetHeight; };
			var oneHalf_TwoH = ( TWOOH() ) * 0.50;
			var three_EL = document.getElementById( "three" );
			var THREEOH = function() { return three_EL.offsetHeight; };
			var oneEighth_ThreeH = ( THREEOH() ) * 0.125;
			var oneQuarter_ThreeH = ( THREEOH() ) * 0.25;
			var four_EL = document.getElementById( "four" );
			var FOUROH = function() { return four_EL.offsetHeight; };
			var oneEighth_FourH = ( FOUROH() ) * 0.125;
			var oneQuarter_FourH = ( FOUROH() ) * 0.25; 
			
			//    specialtyTitle    
			if( GLO_pageYOff() < oneEighth_OneH ) { 
				divST.className = "red";
			}
			else 
			if( ( GLO_pageYOff() >= oneEighth_OneH ) && ( GLO_pageYOff() < oneQuarter_OneH ) ) { 
				divST.className = "yellow";
			}
			else 
			if( ( GLO_pageYOff() >= oneQuarter_OneH ) && ( GLO_pageYOff() < ( ONEOH() + oneHalf_TwoH ) ) ) { 
				divST.className = "green";
			}
			
			//    jollyRoger   
			if( ( GLO_pageYOff() >= ( ONEOH() + oneHalf_TwoH ) ) && ( GLO_pageYOff() <= ( ONEOH() + TWOOH() + oneEighth_ThreeH ) ) ) { 				
				divJR.className = "red";	
			}
			else
			if( (GLO_pageYOff() > ( ONEOH() + TWOOH() + oneEighth_ThreeH )) && ( GLO_pageYOff() < ( ONEOH() + TWOOH() + oneQuarter_ThreeH ) ) ) { 				
				divJR.className = "yellow";
			}
			else
			if( ( GLO_pageYOff() >= ( ONEOH() + TWOOH() + oneQuarter_ThreeH ) ) && ( GLO_pageYOff() < ( ONEOH() + TWOOH() + THREEOH() + oneEighth_FourH ) ) ) { 				
				divJR.className = "green"; 
			}
			
			//   visual   
			if( ( GLO_pageYOff() < ( ONEOH() + TWOOH() + THREEOH() + oneEighth_FourH ) ) && (GLO_pageYOff() < ( ONEOH() + TWOOH() + THREEOH() + oneEighth_FourH )) ) { 
				html5Video.className = "red";
			}
			else
			if( (GLO_pageYOff() >= ( ONEOH() + TWOOH() + THREEOH() + oneEighth_FourH )) && (GLO_pageYOff() < ( ONEOH() + TWOOH() + THREEOH() + oneQuarter_FourH )) ) { 
				html5Video.className = "yellow";
			}
			else
			if( (GLO_pageYOff() > ( ONEOH() + TWOOH() + THREEOH() + oneQuarter_FourH )) ) { 
				html5Video.className = "green";
			}
			
		} // END if recipeANCESTOR()
	} 
	
	function TE( evt ) {
		var curTrgt = evt.target; 		
		if( ( curTrgt.nodeName.toLowerCase() === "section" ) && ( isAncestor( curTrgt, NamiChwan ) ) ) { 
			
			var ar_CHGDtouches = evt.changedTouches, _fingerCount = ar_CHGDtouches.length, C; 
			
			if ( _fingerCount === 1 ) { 
				for( C = 0; C < _fingerCount; C = C + 1 ) { 
					_lastX = ar_CHGDtouches[ C ].pageX; 
					_lastY = ar_CHGDtouches[ C ].pageY; 
					
				} // end for()
				
			} // end if()
			else 
			if ( !_fingerCount ) { 
				_dragging = false; //_swipeLength = undefined;
			}
		} // END if recipeANCESTOR()
	} 
	
	function _ScrollListen( leEvt ) { 
		if ( !!leEvt ) {
			var evtTrgt = leEvt.target;
		}
		else
		if ( !leEvt ) {
			var evtTrgt = event.srcElement;
		}		
		var one_EL = document.getElementById( "one" );
		var ONEOH = function() {
			return one_EL.offsetHeight;
		};		
		var divST = document.getElementById("specialtyTitle");
		var SPECOH = function() {
			return divST.offsetHeight;
		};		
		var art1 = document.getElementById( "artOneIntro" );		
		var two_EL = document.getElementById( "two" );
		var TWOOH = function() {
			return two_EL.offsetHeight;
		};
		var art2 = document.getElementById( "artTwoLefty" );		
		var three_EL = document.getElementById( "three" );
		var THREEOH = function() {
			return three_EL.offsetHeight;
		};			
		var divJR = document.getElementById("jollyRoger");
		var JROGOH = function() {
			return divJR.offsetHeight;
		};
		var art3 = document.getElementById( "artThreeRighty" );		
		var four_EL = document.getElementById( "four" );
		var FOUROH = function() {
			return four_EL.offsetHeight;
		};
		var art4 = document.getElementById( "artFourLeftyTBD" );		
		
		var html5Video = document.getElementById("visual");
		var VIDOH = function() {
			return html5Video.offsetHeight;
		}; 
		
		var closer = document.getElementById( "closer" );
		var CLOSEOH = function() {
			return closer.offsetHeight;
		};
		var divJANE = document.getElementById("ja-ne");
		var JANEOH = function() {
			return divJANE.offsetHeight;
		};
		
		// SECTION ONE
		if( (( YcurrentTGT() ) > GLO_pageYOff() ) && ( ( GLO_pageYOff() + ONEOH()) > GLO_pageYOff() ) ) { 
		
			var secOneYPrelim = ( GLO_pageYOff() / BNCSH() ) * (-100); 
			
			// def. and IE8-- 
			var secOneYNewPerc = ( (secOneYPrelim / 28)  ) + 4.921875;
			
			
			// desktop SAFARI 
			if(window.navigator.userAgent.match(/AppleWebKit\/53/i)) { 
				var secOneYNewPerc = ( (secOneYPrelim / 8)  ) + 10.5;
			}			
			
			var secOneCoordsNew = "50% " + secOneYNewPerc + "%";
			
			one_EL.style.cssText = "background-position: " + secOneCoordsNew + "; ";
			
		}
		
		// SPECIALTY TITLE
		if( (( YcurrentTGT() ) > GLO_pageYOff() ) && ( ( GLO_pageYOff() + SPECOH()) > GLO_pageYOff() ) ) { 	
			var specTitleYPrelim = ( GLO_pageYOff() / BNCSH() ) * (-100);
			
			var specTitleYNewPerc = ((specTitleYPrelim / 2)   ) + 3.1640625;
			
			var specTitleCoordsNew = "50% " + specTitleYNewPerc + "%";
			
			divST.style.cssText = "background-position: " + specTitleCoordsNew + "; ";
			
						
		}
		
		// SECTION TWO
		if( (( YcurrentTGT() ) > GLO_pageYOff() ) && ( ( GLO_pageYOff() + TWOOH()) > GLO_pageYOff() ) ) { 
			
			var secTwoYPrelim = ( GLO_pageYOff() / BNCSH() ) * (-100);
			//set in stone // def. and IE8-- 
			var secTwoYNewPerc = ((secTwoYPrelim / 4)   ) + 32.583333333333333333333333333333;
			
			// desktop OPERA PRESTO
			if(window.navigator.userAgent.match(/Opera\/9\./i)) { 
				var secTwoYNewPerc = ((secTwoYPrelim / 14)   ) + 40.729166666666666666666666666663;
			}
			
			var secTwoCoordsNew = "50% " + secTwoYNewPerc + "%";
			
			two_EL.style.cssText = "background-position: " + secTwoCoordsNew + "; ";			
			
		}
			
		// SECTION THREE
		if( (( YcurrentTGT() ) > GLO_pageYOff() ) && ( ( GLO_pageYOff() + THREEOH()) > GLO_pageYOff() ) ) { 
			
			var secThreeYPrelim = ( GLO_pageYOff() / BNCSH() ) * (-100);
			
			// /def. and IE8-- 
			var secThreeYNewPerc = ((secThreeYPrelim / 6)   ) + 58.527663278646547782350251486054;
			
			// desktop OPERA PRESTO
			if(window.navigator.userAgent.match(/Opera\/9\./i)) { 
				var secThreeYNewPerc = ((secThreeYPrelim / 21)   ) + 65.346136050608870598994055784175;
			} 
			
			var secThreeCoordsNew = "50% " + secThreeYNewPerc + "%";
			
			three_EL.style.cssText = "background-position: " + secThreeCoordsNew + "; ";

		}
		
		// JOLLY ROGER
		if( (( YcurrentTGT() ) > GLO_pageYOff() ) && ( ( GLO_pageYOff() + JROGOH()) > GLO_pageYOff() ) ) { 
		
			var jollyRogYPrelim = ( GLO_pageYOff() / BNCSH() ) * (-100);
			
			var jollyRogYNewPerc = ((jollyRogYPrelim / 2)   ) + 125;
	
			
			// desktop OPERA PRESTO
			if(window.navigator.userAgent.match(/Opera\/9\./i)) { 
				var jollyRogYNewPerc = ((jollyRogYPrelim / 2)   ) + 145.8335;
			}
			
			
			var jollyRogCoordsNew = "40% " + jollyRogYNewPerc + "%";
			
			
			divJR.style.cssText = "background-position: " + jollyRogCoordsNew + "; ";
			
			
		}
		
		// SECTION FOUR
		if( (( YcurrentTGT() ) > GLO_pageYOff() ) && ( ( GLO_pageYOff() + FOUROH()) > GLO_pageYOff() ) ) { 
			
			var secFourYPrelim = ( GLO_pageYOff() / BNCSH() ) * (-100);
			
			// setInStone // def. and IE8-- 
			var secFourYNewPerc = ((secFourYPrelim / 8)   ) + 75.249852786831275;
			
			
			// desktop OPERA PRESTO
			if(window.navigator.userAgent.match(/Opera\/9\./i)) { 
				var secFourYNewPerc = ((secFourYPrelim / 18.75)   ) + 97.0017633580246904296875;
			} 
			
			
			var secFourCoordsNew = "50% " + secFourYNewPerc + "%";
			
			four_EL.style.cssText = "background-position: " + secFourCoordsNew + "; ";
			

		}
		
		// MY VIDEO
		if( (( YcurrentTGT() ) > GLO_pageYOff() ) && ( ( GLO_pageYOff() + VIDOH()) > GLO_pageYOff() ) ) { 
			
			var myVidYPrelim = ( GLO_pageYOff() / BNCSH() ) * (-100);	
			var vidYNewPerc = ((myVidYPrelim / 1.5)   ) + 56.437389590123;
			
			// desktop OPERA PRESTO
			if(window.navigator.userAgent.match(/Opera\/9\./i)) { 
				var vidYNewPerc = ((myVidYPrelim / 1.5)   ) + 343.52744866196774430; 
			}
			
			var VidTOPPOSCoords = vidYNewPerc + "%";
			// html5Video.style.top = VidTOPPOSCoords; 
			
			
			html5Video.style.cssText = "top: " + VidTOPPOSCoords + "; ";
			
						
		}
		
		// SECTION FIVE
		if( (( YcurrentTGT() ) > GLO_pageYOff() ) && ( ( GLO_pageYOff() + CLOSEOH()) > GLO_pageYOff() ) ) { 
			
			var secCloseYPrelim = ( GLO_pageYOff() / BNCSH() ) * (-100);
			
			// def. and IE8-- 
			var secCloseYNewPerc = ((secCloseYPrelim / 8)   ) + 100.33313704910836;
			
			
			// desktop OPERA PRESTO
			if(window.navigator.userAgent.match(/Opera\/9\./i)) { 
				var secCloseYNewPerc = ((secCloseYPrelim / 8)   ) + 168.3935914658436085986328125;
			} 
			
			var secCloseCoordsNew = "50% " + secCloseYNewPerc + "%";
			
			
			closer.style.cssText = "background-position: " + secCloseCoordsNew + "; ";
			
						
		}
		
		// JA NE	
		if( (( YcurrentTGT() ) > GLO_pageYOff() ) && ( ( GLO_pageYOff() + JANEOH()) > GLO_pageYOff() ) ) {
			
			var jaNeYPrelim = ( GLO_pageYOff() / BNCSH() ) * (-100);
			
			var jaNeYNewPerc = ((jaNeYPrelim / -2)   ) + (-13.75);
			
			// desktop OPERA PRESTO	
			if(window.navigator.userAgent.match(/Opera\/9\./i)) { 
				var jaNeYNewPerc = ((jaNeYPrelim / -2)   ) + -213.33333333;
			}
			
			var jaNeCoordsNew = "50% " + jaNeYNewPerc + "%";
			
			divJANE.style.cssText = "background-position: " + jaNeCoordsNew + "; ";
			
		} 

	}
	
	return { 
		InitDCL : function() { 
			return _DOMCONLO;
		} 
	}; // END public properties	
} )();  

DRYOBJ.Utils.evt_u.AddEventoHandler( DRYOBJ.RetELs.glow(), "DOMContentLoaded", Gh_pages_parallax.InitDCL() );