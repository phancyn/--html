(function () {
    function bannerSpeed() {

        function getSizmekSrc() {
            let result = '';
            const scripts = document.getElementsByTagName('script');
            for (let item of scripts) {
                const src = item.getAttribute('src');
                if (!src) continue;
                if (src.includes('https://bs.serving-sys.ru/Serving/adServer.bs')) {
                    result = src;
                    break;
                }
            }
            return result;
        }

        function callExtPix(url) {
            var im = new Image;
            im.src = url;
        }


        function sendPixelDSP(s_trk,renderForDSP) {
            const urlDSP = new URL('https://log.bumlam.com/')
            urlDSP.searchParams.set('src', 'v');
            urlDSP.searchParams.set('s_trk', s_trk);
            urlDSP.searchParams.set('s_showgif', '1');
            urlDSP.searchParams.set('s_act', 'a');
            urlDSP.searchParams.set('s_actid', renderForDSP);
            urlDSP.searchParams.set('rnd', Math.random());
            callExtPix(urlDSP.toString())
        }

        function sendPixel(s_trk, time, render, crid) {
            const url = new URL('https://pix.bumlam.com/audit/test/sizmekTest')
            url.searchParams.set('s_trk', s_trk);
            url.searchParams.set('format', 'b');
            url.searchParams.set('time', time);
            url.searchParams.set('render', render);
            url.searchParams.set('rnd', Math.random());
            if (crid) {
                url.searchParams.set('crid', crid);
            }
            url.searchParams.set('v', '0.041');
            callExtPix(url.toString())

            if(!render) return;
            const renderForDSP = render ===1? 'renderv1' :'renderv2';
            sendPixelDSP(s_trk,renderForDSP)
        }


        const start = Date.now();
        const maxTime = 20;
        let render = 0;
        let idInterval = undefined;

        const src = getSizmekSrc();
        if (!src) return;


        let s_trk = null
        const temp = 'LineID=$$';
        const startIndex = src.indexOf(temp);
        if (startIndex >= 0) {
            const endIndex = src.indexOf('$$', startIndex + temp.length);
            const params = src.substring(startIndex + temp.length, endIndex)
            s_trk = new URLSearchParams(params).get('s_trk')||params;
        }

        const crid = document.querySelector('meta[name="ad.id"]') ? document.querySelector('meta[name="ad.id"]').content : null;

        const resetsListener = (idInterval, observer) => {
            if (observer) observer.disconnect();
            if (idInterval) clearInterval(idInterval);
        }

        let prevRender = render;
        const submit = (idInterval, observer,render) => {
            const time = (Date.now() - start) / 1000;
            if (time > maxTime || render) resetsListener(idInterval, observer);
            if (prevRender>0 && prevRender === render) return;
            sendPixel(s_trk, time, render, crid)
            prevRender = render
        }


        window.addEventListener('message', function(e) {
            try {
                if (e.data) {
                    var sizmek_event = JSON.parse(e.data);
                    if (sizmek_event) {
                        switch (sizmek_event.type) {
                            case 'ebInitDone':
                                render = 2;
                                submit(idInterval, observer,render)
                                break;

                        }
                    }
                }
            }catch(err){}
        });

        const observer = new MutationObserver((mutationsList) => {
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList' && mutation.addedNodes && mutation.addedNodes.item(0)?.nodeName === "IFRAME") {
                    render = 1;
                    submit(idInterval, observer,render)

                    break;
                }
            }
        });


        const config = {
            childList: true,
            subtree: true
        };
        const target = document.body;
        observer.observe(target, config);

        idInterval = setInterval(() => {
            submit(idInterval, observer,render)
        }, 1000);

        submit(idInterval, observer,render)
        sendPixelDSP(s_trk,'renderv0')
    }

    document.addEventListener("DOMContentLoaded", bannerSpeed);
    document.addEventListener("_viewabilityCreatedScript", bannerSpeed);
})();
