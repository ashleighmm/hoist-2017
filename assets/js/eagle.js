var _containerHeight = 3200;
var _width, _height, _scrollHeight;
var letters = document.getElementsByTagName('span');
var _movingElements = [];
var _scrollPercent = 0;
var pre = prefix();
var _jsPrefix  = pre.lowercase;
if(_jsPrefix == 'moz') _jsPrefix = 'Moz'
var _cssPrefix = pre.css;
var _positions = [
  {
    name: 'eagle-01', 
   	start: {
    	percent: 0.02, x: 0, y: 0
  	},
    end: {
      percent: 0.5, x: -0.580, y: 0.30
    }
  },
  {
    name: 'eagle-02', 
   	start: {
    	percent: 0.02, x: 0, y: 0
  	},
    end: {
      percent: 0.5, x: 0, y: 0.50
    }
  },
  {
    name: 'eagle-03', 
   	start: {
    	percent: 0.02, x: 0, y: 0
  	},
    end: {
      percent: 0.5, x: 0, y: -0.30
    }
  },
  {
    name: 'eagle-04', 
   	start: {
    	percent: 0.02, x: 0, y: 0
  	},
    end: {
      percent: 0.5, x: 0, y: 0.50099
    }
  },
  {
    name: 'eagle-05', 
   	start: {
    	percent: 0.02, x: 0, y: 0
  	},
    end: {
      percent: 0.5, x: 0, y: -0.10
    }
  },
  {
    name: 'eagle-06', 
   	start: {
    	percent: 0.04, x: 0.90, y: 0.90
  	},
    end: {
      percent: 0.5, x: 0, y: 0.4999
    }
  },
  {
    name: 'eagle-07', 
   	start: {
    	percent: 0.02, x: 0.90, y: -0.90
  	},
    end: {
      percent: 0.5, x: 0, y: -0.50
    }
  },
  {
    name: 'eagle-08', 
   	start: {
    	percent: 0.02, x: 0, y: 1
  	},
    end: {
      percent: 0.5, x: 0, y: 0.50
    }
  },
  {
    name: 'eagle-09', 
   	start: {
    	percent: 0.02, x: 0.90, y: -0.40
  	},
    end: {
      percent: 0.5, x: 0, y: -0.40
    }
  },
  {
    name: 'eagle-10', 
   	start: {
    	percent: 0.02, x: 0.90, y: 0.90
  	},
    end: {
      percent: 0.5, x: 0, y: 0.50
    }
  },
]

resize();
initMovingElements();

function initMovingElements() {
  for (var i = 0; i < _positions.length; i++) {
    _positions[i].diff = {
      percent: _positions[i].end.percent - _positions[i].start.percent,
      x: _positions[i].end.x - _positions[i].start.x,
      y: _positions[i].end.y - _positions[i].start.y,
    }
    var el = document.getElementsByClassName('boy '+_positions[i].name)[0];
    _movingElements.push(el);
  }
}

function resize() {
	_width = window.innerWidth;
  _height = window.innerHeight;
  _scrollHeight = _containerHeight-_height;
}

function rotateLetters() {
  for (var i = 0; i < letters.length; i++) {
    letters[i].style[_jsPrefix+'Transform'] = 'rotateY('+(_scrollPercent*500)+'deg)'
  }
}

function updateElements() {
  for (var i = 0; i < _movingElements.length; i++) {
    var p = _positions[i];
    if(_scrollPercent <= p.start.percent) {
      _movingElements[i].style[_jsPrefix+'Transform'] = 'translate3d('+(p.start.x*_width)+'px, '+(p.start.y*_containerHeight)+'px, 0px)';
    } else if(_scrollPercent >= p.end.percent) {
      _movingElements[i].style[_jsPrefix+'Transform'] = 'translate3d('+(p.end.x*_width)+'px, '+(p.end.y*_containerHeight)+'px, 0px)';
    } else {
      _movingElements[i].style[_jsPrefix+'Transform'] = 'translate3d('+(p.start.x*_width + (p.diff.x*(_scrollPercent-p.start.percent)/p.diff.percent*_width))+'px, '+
        (p.start.y*_containerHeight + (p.diff.y*(_scrollPercent-p.start.percent)/p.diff.percent*_containerHeight))+'px, 0px)';
    }
  }
}



function loop() {
  _scrollOffset = window.pageYOffset || window.scrollTop;
  _scrollPercent = _scrollOffset/_scrollHeight || 0;
  rotateLetters();
  updateElements();
  
  requestAnimationFrame(loop);
}

loop();

window.addEventListener('resize', resize);

/* prefix detection http://davidwalsh.name/vendor-prefix */

function prefix() {
  var styles = window.getComputedStyle(document.documentElement, ''),
    pre = (Array.prototype.slice
      .call(styles)
      .join('') 
      .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
    )[1],
    dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
  return {
    dom: dom,
    lowercase: pre,
    css: '-' + pre + '-',
    js: pre[0].toUpperCase() + pre.substr(1)
  };
}



$(document).ready(function() {
   
  //hide boxex 
  $(".hideme").hide();

  //init scrolling event heandler
  $(document).scroll(function(){
   
    var docScroll = $(document).scrollTop(), 
        boxCntOfset = $(".box").offset().top - 500;
    
 
    //when rich top of boxex than fire
    if(docScroll >= boxCntOfset ) {

      $("#first").fadeIn(200)
	  $("#second").fadeIn(600)
	  $("#third").fadeIn(600)
	  $("#fourth").fadeIn(1000)
    
    } else {
     $("#first").fadeOut(200)
	 $("#second").fadeOut(100)
	 $("#third").fadeOut(100)
	  $("#fourth").fadeOut(0)
    
    }
  })   
});
  
  
$(document).ready(function() {

  if(window.location.href.indexOf('#thankyou') != -1) {
    $('#thankyouModal').modal('show');
  }

});
