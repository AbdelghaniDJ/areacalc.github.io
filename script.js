function triangle(){
    'use strict';
    document.getElementById("triangle").classList.remove('hide');
    document.getElementById("circle").classList.add('hide');
    document.getElementById("cylinder").classList.add('hide');
    document.getElementById("square").classList.add('hide');
}
function circle(){
    'use strict';
    document.getElementById("circle").classList.remove('hide');
    document.getElementById("triangle").classList.add('hide');
    document.getElementById("cylinder").classList.add('hide');
    document.getElementById("square").classList.add('hide');
}
function cylinder(){
    'use strict';
    document.getElementById("cylinder").classList.remove('hide');
    document.getElementById("circle").classList.add('hide');
    document.getElementById("triangle").classList.add('hide');
    document.getElementById("square").classList.add('hide');
}
function square(){
    'use strict';
    document.getElementById("square").classList.remove('hide');
    document.getElementById("circle").classList.add('hide');
    document.getElementById("cylinder").classList.add('hide');
    document.getElementById("triangle").classList.add('hide');
}


function areaTriangle(){
    "use strict";
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    document.getElementById('result').value =  (parseInt(a) * parseInt(b))/2;
    
}
function areaCircle(){
    "use strict";
    var t = document.getElementById('r').value;
    document.getElementById('resultt').value = (parseInt(t) * parseInt(t) * Math.PI ) ;
}
function areaSqaure(){
    "use strict";
    var d = document.getElementById('s').value;
    document.getElementById('resulttt').value = (parseInt(d) * parseInt(d)) ;
}
function areaCylinder(){
    "use strict";
    var f = document.getElementById('R').value;
    var z = document.getElementById('B').value;
    document.getElementById('resultttt').value = parseInt((parseInt(f) * parseInt(f)* Math.PI * 2) + (parseInt(f) * 2 * parseInt(z) * Math.PI))  ;
}
