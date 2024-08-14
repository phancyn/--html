!function(c,d){if("function"!=typeof c.__tcfapi){for(var a,e=c,n={};e;){try{if(e.frames.__tcfapiLocator){a=e;break}}catch(e){}if(e===c.top)break;e=e.parent}a&&(c.__tcfapi=function(e,t,o,i){var r=Math.random()+"",e={__tcfapiCall:{command:e,parameter:i,version:t,callId:r}};n[r]=o,a.postMessage(e,"*")},c.addEventListener("message",function(e){var t={};try{t="string"==typeof e.data?JSON.parse(e.data):e.data}catch(e){}e=t.__tcfapiReturn;e&&"function"==typeof n[e.callId]&&(n[e.callId](e.returnValue,e.success),delete n[e.callId])},!1))}c.Utils={version:20240307,isCookieSet:function(e){return d.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)")},areCookiesEnabled:function(){var e=!!navigator.cookieEnabled,t=navigator.userAgent.toLowerCase(),t=-1!==t.indexOf("msie")||-1!==t.indexOf("trident");return void 0!==navigator.cookieEnabled&&!t||(d.cookie="__wtestcookie",e=-1!==d.cookie.indexOf("__wtestcookie")),e},getCookieName:function(){var e,t=Config.cookieName;return t||(e=this.getDataSyncKey(),t=Config.cookiePrefix||"_xttrk2",e&&(t+="_"+e)),t},run:function(t){var e,o,i,r,a;this.areCookiesEnabled()?(e=this.getCookieName(),this.isCookieSet(e)?this.log("skip sync, already sync / blocked by cookie",e):(e=-1!=d.URL.indexOf("loop=1"),o=void 0===Config.useDataSync||Config.useDataSync,i=Config.dataSyncCapping||0,r=new Date,!o&&0<i&&(o=r.getMilliseconds()%100<i),e&&(o=!1),this.log("call extractGDPRParameters"),(a=this).extractGDPRParameters(function(e){o?a.waitCookieAndCallDataSync(t,r,e):a.waitCookieAndCallTrackers(t,r,e)}))):this.log("skip sync, cookies are not enable on this browser")},extractGDPRParameters:function(e){var t=this.__extractGDPRParametersFromLocation(d.location);null!=t?(this.log("gdpr params extract from query string",t),e(this.__buildURLDecoratorWithGDPR(t))):"function"==typeof c.__tcfapi?(this.log("use tcf v2 new api"),this.__extractGDPRParametersFromTCFv2(e)):(this.log("fallback: call callback with a nop decorator"),e(function(e){return e}))},waitCookieAndCallDataSync:function(e,t,o){this.log("using data-sync service via waitCookieAndCallDataSync");var i,r=this.isUserIDSet();!1===r?this.log("skip sync, pseudo or optout cookie"):!0===r?(this.log("user exists, callDataSync"),this.callDataSync(t,o)):(this.log("wait for weborama id"),0<--e&&null===r?(i=this,c.setTimeout(function(){i.waitCookieAndCallDataSync(e,t,o)},500)):(this.log("no more wait for weborama id, call service as fallback"),this.callDataSync(t,o)))},getDataSyncKey:function(){var e;return Config.dataSyncKey||(e=(e=this.__extractQueryArgsFromLocation(d.location))&&e.key||"",encodeURIComponent(e))},callDataSync:function(e,t){var o=Config.dataSyncHost||"ds.frontend.weborama.fr",i=d.location,r=i.protocol,a=this.__extractQueryArgsFromLocation(i),i=a.src||this.__extractSourceFromLocation(i),n=this.getDataSyncKey(),o="https://"+o+"/sync?",c=[],i=(n&&c.push("key="+encodeURIComponent(n)),i&&c.push("src="+encodeURIComponent(i)),a.wamid&&c.push("wamid="+encodeURIComponent(a.wamid)),a.site&&c.push("site="+encodeURIComponent(a.site)),c.push("v="+encodeURIComponent(this.version)),c.push("callback=Utils.handleDataSync"),a.ref&&(n=this.__coerceURLToHostname(a.ref),c.push("ref="+encodeURIComponent(n))),"file:"===r&&c.push("development=true"),a.wamhost&&c.push("wamhost="+encodeURIComponent(a.wamhost)),a.cdn&&c.push("cdn="+encodeURIComponent(a.cdn)),a.icfrd&&c.push("icfrd="+encodeURIComponent(a.icfrd)),o+=c.join("&"),d.createElement("script")),n=(i.type="text/javascript",i.src=t(o),d.getElementsByTagName("script")[0]);n.parentNode.insertBefore(i,n),this.log("calling data-sync",i.src)},handleDataSync:function(t){var o=this;this.extractGDPRParameters(function(e){o.log("receive data from data-sync",t),o.__fireTrackers(t,new Date,e)})},waitCookieAndCallTrackers:function(e,t,o){this.log("calling trackers (legacy) via waitCookieAndCallTrackers");var i,r=d.URL,a=-1!=d.URL.indexOf("loop=1"),n=this.isUserIDSet();!1===n?this.log("skip sync, pseudo or optout cookie"):a&&!0===n?(this.log("after loop and user exists, callTrackers"),this.callTrackers(t,o)):(this.log("wait for weborama id"),0<--e&&null===n?(i=this,c.setTimeout(function(){i.waitCookieAndCallTrackers(e,t,o)},500)):(this.log("no more wait for weborama id, loop over redirect as fallback"),a?this.log("skip synchro, failed to set a cookie, even with redirect ..."):(n=-1==r.indexOf("?")?"?":"&",a=r.replace(/^http:/,"https:")+n+"loop=1",r="https://rd.frontend.weborama.fr/rd?key=synchro&url="+encodeURIComponent(a),c.location.replace(o(r)))))},callTrackers:function(e,t){var o,i;"object"==typeof Config.trackersSSL&&(o=Config.trackersSSL,void 0!==(i=this.__extractQueryArgsFromLocation(d.location)).wamid&&null!==i.wamid&&(i=i.wamid,void 0!==Config.specificTrackersSSL[i])&&null!==Config.specificTrackersSSL[i]&&(this.log("fire specific trackers for wamid",i),o=Config.specificTrackersSSL[i]),this.__fireTrackers(o,e,t))},__buildURLDecoratorWithGDPR:function(t){return function(e){return e=null!=t&&-1==e.indexOf("gdpr=")?(e+=-1==e.indexOf("?")?"?":"&")+t.join("&"):e}},__extractGDPRParametersFromLocation:function(e){var t=null,o=this.__extractQueryArgsFromLocation(e);if(!o.gdpr_cmp_failure)for(var i in o)0==i.indexOf("gdpr")&&(null==t&&(t=[]),i=i+"="+o[i],t.push(i));return t},__extractGDPRParametersFromTCFv2:function(i){function r(e){e?.listenerId&&c.__tcfapi("removeEventListener",2,()=>{},e.listenerId)}var a=this;c.__tcfapi("addEventListener",2,function(e,t){var o=null;t?!1!==e.gdprApplies&&"tcloaded"!==e.eventStatus&&"useractioncomplete"!==e.eventStatus||(o=e.gdprApplies?["gdpr=1","gdpr_consent="+(e.tcString||"")]:["gdpr=0"],i(a.__buildURLDecoratorWithGDPR(o)),r(e)):(i(a.__buildURLDecoratorWithGDPR(o=["gdpr_cmp_failure=1"])),r(e))})},__fireTrackers:function(e,t,o){var i,r,a=Config.cookieLifetime||7,n=t.getYear()<2e3?t.getYear()+1900:t.getYear(),c=new Date(n,t.getMonth(),t.getDate()+a).toGMTString(),n=this.getCookieName(),s=Config.cookies||[n];for(r in s)this.log("set cookie",s[r],"expires=",c),d.cookie=s[r]+"=1; expires="+c+"; path=/; SameSite=None; Secure";if(void 0!==e.PIXEL&&null!==e.PIXEL)for(i=0;i<e.PIXEL.length;i++){var l=e.PIXEL[i];this.writeTrackerPIXEL(o(l))}if(void 0!==e.IFRAME&&null!==e.IFRAME)for(i=0;i<e.IFRAME.length;i++){l=e.IFRAME[i];this.writeTrackerIFRAME(o(l))}if(void 0!==e.JAVASCRIPT&&null!==e.JAVASCRIPT)for(i=0;i<e.JAVASCRIPT.length;i++){l=e.JAVASCRIPT[i];this.writeTrackerJAVASCRIPT(o(l))}if(void 0!==e.COOKIE&&null!==e.COOKIE)for(i=0;i<e.COOKIE.length;i++){var f=e.COOKIE[i];this.writeCookie(f,c)}},writeCookie:function(e,t){d.cookie=e+"=1; expires="+t+"; path=/; SameSite=None; Secure",this.log("write cookie",e,"=1","expires",t)},writeTrackerPIXEL:function(e){var t=new Image(1,1);t.src=e,t.onload=function(){return 1},this.log("write pixel",e)},writeTrackerIFRAME:function(e){var t=d.createElement("iframe");t.setAttribute("width",1),t.setAttribute("height",1),t.setAttribute("frameborder",0),t.setAttribute("style","border:0px"),t.setAttribute("src",e);try{d.body.appendChild(t)}catch(e){this.log("error while add iframe",e)}this.log("write iframe",e)},writeTrackerJAVASCRIPT:function(e){0<=e.indexOf("%%User_ID%%")&&(userID=d.cookie.match("AFFICHE_W=([^!_][^;]*)(;|$)"),e=e.replace("%%User_ID%%",userID[1]));var t=d.createElement("script"),o=(t.type="text/javascript",t.src=e,d.getElementsByTagName("script")[0]);o.parentNode.insertBefore(t,o),this.log("write script",e)},isUserIDSet:function(){var e=d.cookie.match("AFFICHE_W=([^;]*)(;|$)");return null===e?null:"!"!==(e=e[1].charAt(0))&&"_"!==e},__extractSourceFromLocation:function(e){e=e.pathname.split("/");return e[e.length-1]},__coerceURLToHostname:function(e){var t=e.indexOf("?");return e=0==(e=-1!=t?e.substring(0,t):e).indexOf("http")&&3<=(t=e.split("/")).length?t[2]:e},__extractQueryArgsFromLocation:function(e){var e=e.search,t={},o=e.indexOf("?");if(-1!==o){var i,r=e.substring(o+1).split("&");for(i in r){var a=r[i].split("=");t[a[0]]=a[1]}}return t},log:function(){Config.debug&&console.log.apply(console,this.prepend("[weborama external_libs]",arguments))},prepend:function(e,t){t=Array.prototype.slice.call(t);return t.unshift(e),t}}}(window,document);