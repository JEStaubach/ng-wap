//function requestFullScreen() {
//	if (screenfull.enabled) {
//        screenfull.request();
//    }
//}


var app = angular.module('app',[]);
app.directive('ngwapwindow',function(){
    return {
		replace: true,
		transclude: true,
        restrict: 'E',
		scope: {
			title: '@',
		},
        template: '<div id="window_container" style="overflow:hidden; background-color:#3E6C9A; display:-ms-flexbox; display:-webkit-flex;display:flex; vertical-align: middle; border:0;" ><ngWapWindowBg></ngWapWindowBg><ngWapWindowButtonsLeft></ngWapWindowButtonsLeft><ngWapWindowTitle title={{title}}></ngWapWindowTitle><ngWapWindowButtonsRight></ngWapWindowButtonsRight></div>',
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
        restrict: 'E',
        template: '<span id="window_buttons_left" style="display:block-inline; min-width:50px; border:0; background-color:red; z-index:2;">HI, how are you doing today? I am fine.</span>',
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
