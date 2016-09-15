
var app = angular.module('app',[]);
app.directive('ngwapwindow',function(){
    return {
		replace: true,
		transclude: true,
        restrict: 'E',
		scope: {
			title: '@',
		},
        template: '<div class="content" id="window_container" style="overflow:hidden; background-color:#3E6C9A;"><ngWapWindowBg></ngWapWindowBg><ngWapWindowTitleBar></ngWapWindowTitleBar></div>',
		link: function(scope,el,attrs,ctrl,transclude) {
			console.log(transclude()[0].innerHTML);
			console.log(el.find('.content'));
			el.find('.content').append(transclude()[0].innerHTML);
		},
    };
});

app.directive('ngwapwindowtitlebar',function(){
    return {
		transclude: true,
		replace: true,
        restrict: 'E',
        template: '<div id="window_title_bar" style="display:-ms-flexbox; display:-webkit-flex;display:flex; vertical-align: middle; border:0; z-index:2;"><ngWapWindowButtonsLeft><ng-transclude></ng-transclude></ngWapWindowButtonsLeft><ngWapWindowTitle title={{title}}></ngWapWindowTitle><ngWapWindowButtonsRight></ngWapWindowButtonsRight></div>',
    };
});

app.directive('ngwapwindowbg',function(){
    return {
		replace: true,
        restrict: 'E',
        template: '<canvas id="myCanvas" style="position:absolute; z-index:1;"></canvas>',
    };
});

app.directive('ngwapwindowbuttonsleft',function(){
    return {
		replace: true,
		transclude: true,
        restrict: 'E',
		//require: '^ngwapwindowtitlebar',
        template: '<span id="window_buttons_left" style="display:block-inline; min-width:50px; border:0; background-color:red; z-index:2;"><ng-transclude></ng-transclude></span>',
    };
});

app.directive('ngwapwindowbuttonsright',function(){
    return {
		replace: true,
        restrict: 'E',
        template: '<span id="window_buttons_right" style="display:block-inline; min-width:50px; border:0; background-color:blue; z-index:2;">There is stuff here.</span>',
    };
});

app.directive('ngwapwindowtitle',function(){
    return {
		replace: true,
        restrict: 'E',
		scope: {
			title: '@',
		},
        template: '<span id="title" style="flex:1 1 auto; text-align:center; min-width:50px; font-family:helvetica; font-size:14px; z-index:2;">{{title}}</span>',
    };
});
