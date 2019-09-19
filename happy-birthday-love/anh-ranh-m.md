---
title: Anh rảnh mà
date: 2019-09-08 10:30:00 +0000
layout: ''
permalink: "/anh-ranh-ma"
creationdate: ''
author: ''
tags: []

---


<link href="https://fonts.googleapis.com/css?family=Special+Elite&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script><div class="full-content-w"> <script src="https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.4.1/snap.svg-min.js"></script><div class="full-content-w"> <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/1.0.0/anime.min.js"></script><div class="full-content-w"> <div class="header-w"> <svg version="1.1" id="svg-xp" class="" width="260" height="260" viewBox="0 0 660 660"> </svg> <h1 class="poem-title">Anh rảnh mà</h1> </div> <div class="poem-wrap"> <p class="first stanza">
Với em anh luôn rảnh mà
Muốn được che chở em nà
Chỉ là chờ em nói gì
Sẵn sàng đến mang em đi.
</p> </div> </div> <footer> <span>❤</span><span style="color: green">Tình yêu chỉ là thứ để bắt đầu thôi phải cùng nhau làm nhiều thứ mới xây dựng hạnh phúc được.</span><span>❤</span></footer> <div class="rc--circles-wrap"></div>
<style id="jsbin-css">

body {
    font-family: "Special Elite";
}

h1 {
    font-family: "Special Elite";
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 55px;
}


svg {
    margin: 0 auto;
    display: block;
}

path,
circle {
    stroke-width: 0.25px;
    stroke: #ccc;
    fill: none;
    stroke-linecap: round;
    transition: all 0.5s;
}
  .full-content-w{
    text-align: center;
  }
  p {
    line-height: 28px;
    margin-bottom: 45px;
}

.mask {
    stroke-width: 2px;
    stroke: #000;
    fill: #fff;
}

.sun {
    stroke: #ffae00;
    stroke-width: 0;
    stroke-dasharray: 1250;
    stroke-dashoffset: 1245;
}

.sunfill {
    fill: #ffae00;
}

.ray {
    stroke: #ffae00;
    stroke-width: 20px;
    stroke-dasharray: 900;
    stroke-dashoffset: 900;
}

.ray.thin {
    stroke-width: 6px;
}

.poem-wrap {
    margin: 15px auto;
}

.poem-title {
    margin: 0 auto;
    margin-top: -110px;
    position: relative;
    top: 15px;
    opacity: 0;
}

.stanza {
    font-size: 40px;
    line-height: 80px;
    color: #666;
}

.stanza .new-line {
    display: block;
    position: relative;
    top: 15px;
    opacity: 0;
}

.header-w {
    padding-bottom: 25px;
}

footer {
      font-size: 16px;
    margin: 0 auto;
    margin-top: 45px;
    border-top: 1px solid #ddd;
    padding: 25px;
}
footer span{
    color: red;

}

footer a {
    color: #ffae00;
}

.rc--random-circle {
    position: fixed;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.5s;
}

</style> <script> var s=Snap('#svg-xp');
var sunfill=s.circle(330, 300, 0).attr( {
    class: 'sunfill'
}

);
var ray=s.path('M 330, 300 l -800, 0').attr( {
    class: 'ray'
}

);
var ray=s.path('M 330, 300 l 800, 0').attr( {
    class: 'ray'
}

);
// animates as a circle
// anime({
//   targets: $('.sun').get(),
//   strokeDashoffset: 0,
//   strokeWidth: 10,
//   duration: 400,
//   easing: 'easeInSine'
// });
// animates the sun fill color
anime( {
    targets: $('.sunfill').get(), r: 180, duration: 300, easing: 'easeInOutExpo', delay: 20
}

);
// animates the rays
anime( {
    targets: $('.ray').get(), strokeDashoffset: 0, strokeWidth: 0, duration: 100, easing: 'easeInOutQuint'
}

);
// splits each line by <br> and wraps with span and puts back
$broken=$('.stanza').text().trim().replace( /\n/g, '---').split('---');
$result='';
for (var i=0;
i < $broken.length;
i++) {
    $result +='<span class="new-line">' + $broken[i] + '</span>';
}

// replaces with split lines
$('.stanza').html($result);
// animates text
anime( {
    targets: ['.poem-title', '.new-line'], top: 0, opacity: 1, duration: 1000, easing: 'easeInOutQuint', delay: function(el, index) {
        return index * 320
    }
}

);
// random circles function
$.fn.extend( {
    randomCircles: function(options) {
        var defaults= {
            circleCount: 50, fillColor: '#ffae00', opacityVar: 0.6, useAnime: true
        }
        ;
        var options=$.extend(defaults, options);
        return this.each(function() {
            var o=options;
            for (var i=0;
            i <=o.circleCount;
            i++) {
                var randomDi=Math.floor( Math.random() * 8) + 3;
                var randomX=Math.floor( Math.random() * $(window).width());
                var randomY=Math.floor( Math.random() * $(window).height());
                var opaciVar=Math.random() * o.opacityVar;
                var randomTra=(Math.random() * 500) + 200;
                $(this).append('<div class="rc--random-circle rc--' + i + '"></div>');
                $('.rc--' + i).css( {
                    background: o.fillColor, width: randomDi, height: randomDi, top: randomY, left: randomX
                }
                );
                if (o.useAnime) {
                    anime( {
                        targets: $('.rc--' + i).get(), opacity: opaciVar, duration: 100, easing: 'easeInOutQuint', delay: randomTra
                    }
                    );
                }
                else {
                    $('.rc--' + i).css('opacity', opaciVar);
                }
            }
        }
        );
    }
}

);
// calling random circles
$('.rc--circles-wrap').randomCircles();
</script>