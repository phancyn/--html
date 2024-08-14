/*
(c) Copyright Weborama SA - France. All rights reserved.
It is illegal to modify, disassemble, sell, copy or publish this software
or any part thereof. The use of this software is only permitted with the
prior and express written permission of Weborama SA - France.
More information: http://www.weborama.com/contacts/
*/
function x17() {
    var x1cl, x1ey = x1bb.x1cj();
    x1ey.x1ie = x1bb.x1nn(x1ey.x1ie,'wuid=&retargeting=&');
    x1ey.x1fN = 'https://cstatic-ru-cv.weborama-tech.ru/public/advertiser/9626/34/279/380/';
    x1ey.x1lp = '449';



    x1ey.conf_oba = false;
    
    x1bb.x1br = 0.50;
    adperfobj.zindex = adperfobj.zindex || 0 || 214748360;

    adperfobj.clicks = new Array();
    adperfobj.clicks[0] = 'https://ads.betweendigital.com/click/AAAAAEn-JdFhdgACYwBCA81TzWvUQBRPHmEt20Vr2cMeROagpRU3m8zm01KWbi0t9EPpB6VeSppMu2mymSVJ7bZ4KOJBoQeP_geCiHjw6J9Q0aMHUQQPipd68yDiZD-7LfWqLx8z8-bNe-_3e_NgWtWJIWMH523ZwHmFYCdvYnsjbypYwYbuFIllg_zx6Mv3zMGnxwfPHPiQzNO279oex8G1ShzXohuFQiWu-uo6pZ4YbhfOUudMWcRFLMqaKerwAObonuv7VkEVJTS84gYO3YnQ_BKSJVEaRUyhKaOorikjaLxW88kKWZ9x44Ja1MWihoZnppfmZq8j3_UImiK2R0fQRCWkVVKQsSJKyYNWrXLInJKwwFRaQ7VobVih2_ICaQWrmtoeMlpR0SQZziu6ZCiaAS_74RUPHAwAsD8HueOA2HowJHfXoooVEq6xz7UkmUBfgoP5xIohKSAsLEN2cdur0F00SzdB0GUYlERZZUSrOgjMX7bLAQDL4iaJvJjWIH0rrpAQBNlI3ObGncXArZEQrUyWIefRIIqtIHaDNdwMDUOxU1WuMqY1kw2TOvsMyGJJx7phKqoGl08YQGri9hwMuMEmjRiwJH24066h5UTiOol3CAkcd9ONLV-0aZWptyIalOIxy9mgdRY1E9Cwavls9vopD78fZrgmJwA88Gxo5tbgBi6tWoFD6qhVHUixkjWShy5_Z8nutyG57_m90l9M_oEclXqr3ytMs19qb_AtnPDm8HCMTQ7KwCWXrHOMTyz-v2ZB3Mm0kmRRamG5fBpvTzucEv7ruenPe9kXUz9KfEbHRt2UuPv9_P6jvdaxtxeStynZY7TCe6HhtdGPfEsLP9PJstkf7ajvkgsCv8Tk5XujC52aJUQPzm7NGzOmHNaZ6snFLoYTp5i50ISW4vb7WRpw5XRbdO9AD_gOF38A/https%3A%2F%2Flog%2Ebumlam%2Ecom%2Fnew%2Fc%2FCghOdAXY0gYuzhC1vajcBhivuPK1Bg%2A%2A%3Fsrc%3Dbw1%26rurl%3Dhttps%253A%252F%252Fwww%252Eingos%252Eru%252F&rurl2=https://wcm-ru.frontend.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=cl&a.si=9626&a.te=705&a.aap=449&a.agi=73&a.ycp=CghOdAXY0gYuzhC1vajcBhivuPK1Bg**&g.lu=' + (adperfobj.landing_urls[0] || '');


    var addParam = function(url, param) {
        var parts = url.split('#');
        parts[0] = parts[0] + ((parts[0].indexOf('?') !== -1) ? '&' : '?') + param;
        return parts.join('#');
    }

    for ( let id = 0; id < adperfobj.clicks.length; id++) {
        if (adperfobj.clicks[id] !== '') {
            if (adperfobj.erid != undefined) {
                adperfobj.clicks[id] = addParam(adperfobj.clicks[id], 'erid=' + encodeURIComponent(adperfobj.erid));
            }
            if (adperfobj.er != undefined) {
                adperfobj.clicks[id] = addParam(adperfobj.clicks[id], 'er=' + encodeURIComponent(adperfobj.er));
            }
        }
    }

    try{
        adperfobj.imptrackers = new Array(
                
        );

        adperfobj.clicktrackers = (new Array(
                
        ).concat(adperfobj.clicktrackers));

        adperfobj.eventtrackers = (new Array(
                
        ).concat(adperfobj.eventtrackers));
    }catch(scr_e){}



    x1ey.addTrackers(adperfobj);
    x1ey.addClicks(adperfobj);

    x1cl = new x1bb.x1ig();
x1cl.x1c(x1ey, 1293, 'index.html', adperfobj.width, adperfobj.height, '', '', '');
x1ey.x1gG(x1cl, '', 2, '');




    x1ey.x1gQ();


}
x1L('adperf_core_' + adperf_version + '_scrambled.js');
var pNode, nNode = document.createElement("script");
nNode.src='https://cstatic-ru-cv.weborama-tech.ru/public/js/topics/topics.js?src=wcm';
nNode.type='text/javascript';
if (adperfobj.launchScriptId && (pNode=document.getElementById(adperfobj.launchScriptId))) {
  1;
} else {
  pNode=document.getElementsByTagName("script");
  pNode = pNode[pNode.length-1];
}
pNode.parentNode.insertBefore(nNode,pNode.nextSibling);
