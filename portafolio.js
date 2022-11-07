function py_exp() {
    var elem = document.getElementById("py-bar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 45) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function html_exp() {
    var elem = document.getElementById("html-bar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 90) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function css_exp() {
    var elem = document.getElementById("css-bar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 85) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function js_exp() {
    var elem = document.getElementById("js-bar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 55) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function jquery_exp() {
    var elem = document.getElementById("jquery-bar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 75) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function sql_exp() {
    var elem = document.getElementById("sql-bar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 70) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function php_exp() {
    var elem = document.getElementById("php-bar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 25) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

$.fn.esconde = function(){
    $("#habilidades-container, #idiomas-container, #lenguajes-container, #cont2015, #cont2016, #cont2018, #cont2020, #cont2021, #cont2022").hide();
};
$.fn.deslizo = function(){
    $("#cont2012, #cont2015, #cont2016, #cont2018, #cont2020, #cont2021, #cont2022").slideUp();
    $(".select").removeClass("select");
};
$(document).ready(function(){
    $("body").hide();
    $("body").fadeIn("slow");
    $.fn.esconde();
    $("#top2012").click(function(){
        $.fn.deslizo()
        $("#top2012").addClass("select");
        $("#cont2012").slideDown();
    });
    $("#top2015").click(function(){
        $.fn.deslizo()
        $("#top2015").addClass("select");
        $("#cont2015").slideDown();
    });
    $("#top2016").click(function(){
        $.fn.deslizo()
        $("#top2016").addClass("select");
        $("#cont2016").slideDown();
    });
    $("#top2018").click(function(){
        $.fn.deslizo()
        $("#top2018").addClass("select");
        $("#cont2018").slideDown();
    });
    $("#top2020").click(function(){
        $.fn.deslizo()
        $("#top2020").addClass("select");
        $("#cont2020").slideDown();
    });
    $("#top2021").click(function(){
        $.fn.deslizo()
        $("#top2021").addClass("select");
        $("#cont2021").slideDown();
    });
    $("#top2022").click(function(){
        $.fn.deslizo()
        $("#top2022").addClass("select");
        $("#cont2022").slideDown();
    });
    $("#habilidades").click(function(){
        $("#habilidades-container").slideToggle();
    });
    $("#idiomas").click(function(){
        $("#idiomas-container").slideToggle();
    });
    $("#lenguajes").click(function(){
        $("#lenguajes-container").slideToggle();
        py_exp();
        html_exp();
        css_exp();
        js_exp();
        sql_exp();
        php_exp();
        jquery_exp();
    });
});