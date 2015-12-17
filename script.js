var RAINBOW = function () {
    var styleDom = document.getElementsByTagName('style');
    if (styleDom.length <= 0) {
        styleDom = document.createElement('style');
        //document.getElementsByTagName('head')[0]
    } else {
        styleDom = styleDom[0];

    }

    styleDom.textContent += "* {" +
                        "animation-name: rainbow-css;" +
                        "animation-duration: .01s;" +
                        "animation-delay: 0s;" +
                        "animation-iteration-count: infinite;" +
                        "-webkit-animation-name: rainbow-css;" +
                        "-webkit-animation-duration: .01s;" +
                        "-webkit-animation-delay: 0s;" +
                        "-webkit-animation-iteration-count: infinite;" +
                    "}" +
                    "@keyframes rainbow-css {0% {color: #5630C3;}  14% {color: #0225F3;} 28% {color: #2AC3FC;} 43% {color: #41C903;} 57% {color: #FEF506;} 72% {color: #FE9307;} 86% {color: #FE080D;}}";
                    "@-webkit-keyframes rainbow-css {0% {color: #5630C3!important;}  14% {color: #0225F3!important;} 28% {color: #2AC3FC!important;} 43% {color: #41C903!important;} 57% {color: #FEF506!important;} 72% {color: #FE9307!important;} 86% {color: #FE080D!important;}}";

    var startAnimation = function(speed){
        if (typeof speed != 'number') {
            speed = 10;
        }

        var elements = document.getElementsByTagName("*");

        var bodyStart = false;
        var a = 0;

        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];

            if (element.tagName.toLowerCase() == "body") {
                bodyStart = true;
            }
            if (bodyStart) {
                element.style['animation-delay'] =  -a/10 +"s";
                element.style['animation-duration'] =  speed + "s";
                a++;
            }
        }
    }
    console.log(document.getElementsByTagName('style').length );
    if (document.getElementsByTagName('style').length <= 0) {
        document.getElementsByTagName('head')[0].appendChild(styleDom);
    }

    startAnimation(5);
};

RAINBOW();