(()=>{"use strict";var n={524:(n,e,a)=>{a.d(e,{Z:()=>s});var t=a(81),i=a.n(t),o=a(645),r=a.n(o)()(i());r.push([n.id,"* {\n    font-size: 14px;\n}\n\nbody {\n    overflow-y: scroll;\n}\n\n.fixed {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    background-color: white;\n}\n\n.header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 80px;\n}\n\n.left-header {\n    display: flex;\n    justify-content: start;\n    margin-left: 20px;\n}\n\n.logo-wrap {\n    width: 112px;\n}\n\n.logo {\n    width: 100%;\n    height: 50px;\n}\n\n.category {\n    width: 700px;\n    display: flex;\n    align-items: center;\n}\n\n.category-container {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-content: center;\n}\n\n.category-container li {\n    display: flex;\n    flex-direction: column;\n    align-content: space-around;\n    cursor: pointer;\n}\n\n.category-container li:hover {\n    color: rgb(250, 136, 11);\n}\n\n.category-container li p {\n    font-size: 1.12rem;\n    font-weight: bold;\n    width: 100%;\n    margin-bottom: 5px;\n}\n\n.category-container li span {\n    font-size: 0.8rem;\n    width: 100%;\n}\n\n.right-header {\n    display: flex;\n    justify-content: end;\n    align-content: center;\n    align-items: center;\n}\n\n.move-sign-btn {\n    font-size: 0.75rem;\n    padding: 9px 10px;\n    border: 0px;\n    border-radius: 3px;\n    margin-right: 20px;\n}\n\n.move-marketing-area {\n    text-align: right;\n    height: 100%;\n    padding: 25px 0 25px 25px;\n    color: #349af5;\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n}\n\n.move-marketing-area:hover {\n    background-color: rgba(215, 215, 215, 0.4);\n}\n\n.right-arrow {\n    margin: 0 10px;\n}\n\n.container {\n    margin-top: 80px;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.banner-area {\n    background-image: url(https://s.zigbang.com/v1/web/main/hero_img_1440.jpg);\n    background-size: cover;\n    width: 100%;\n    height: 460px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    justify-items: center;\n}\n\n.comment-area {\n    width: 50%;\n    height: 40%;\n    display: flex;\n    justify-content: center;\n    background-image: url(https://s.zigbang.com/v1/web/main/whiteArea_img.png);\n    background-size: contain;\n    margin: 0 auto;\n    padding-top: 110px;\n}\n\n.comment {\n    font-size: 2.6rem;\n    font-weight: bold;\n    text-shadow: white 0px 16px 40px;\n}\n\n.search-form {\n    margin-top: -80px;\n}\n\n.search-category-area {\n    width: 100%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: center;\n}\n\n.search-category {\n    width: 40%;\n    display: flex;\n    justify-content: space-around;\n    background-color: rgba(0, 0, 0, 0.65);\n    color: white;\n    border-radius: 10px;\n}\n\n.search-category li {\n    height: 40px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.1rem;\n    font-weight: bold;\n}\n\n.search-category li.active {\n    background-color: white;\n    color: #349af5;\n    border-radius: 10px;\n}\n\n.search-area {\n    width: 40%;\n    display: flex;\n    margin-top: 25px;\n    margin-left: auto;\n    margin-right: auto;\n    justify-content: center;\n}\n\n.search-area input[type='text'] {\n    width: 100%;\n    height: 45px;\n    padding: 5px 40px;\n    border: 0;\n    border-radius: 10px 0 0 10px;\n    font-size: 1.05rem;\n}\n\n.search-area input[type='text']::placeholder {\n    font-size: 1.05rem;\n    color: #999;\n}\n\n.search-button-img {\n    width: 100%;\n    height: 30px;\n}\n\n.search-button-area {\n    background-color: #ffa441;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 0 10px 10px 0;\n    padding: 5px 18px;\n}\n\n.board-area {\n    width: 100%;\n    height: 200px;\n    padding: 40px 0px 27px;\n}\n\n.board-group {\n    width: 60%;\n    display: flex;\n    justify-content: space-around;\n    margin: 0 auto;\n}\n\n.board-item {\n    width: 260px;\n}\n\n.board-title {\n    padding-top: 4px;\n    padding-bottom: 5px;\n    margin-bottom: 13px;\n    border-bottom: 1px solid #b3b3b3;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.board-title h2 {\n    height: 29px;\n    font-weight: bold;\n    font-size: 1.05rem;\n    display: flex;\n    align-items: center;\n}\n\n.board-title button {\n    border: 0;\n    color: #999999;\n    background-color: #fafafa;\n    border-radius: 3px;\n    padding: 6px 12px;\n}\n\n.introduce {\n    width: 260px;\n    height: 140px;\n}\n\n.introduce img {\n    height: 100%;\n}\n\n.grid li {\n    font-size: 0.8rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 100%;\n    height: 32px;\n}\n\n.app-area {\n    background-color: #fafafa;\n    width: 100%;\n    height: 279px;\n}\n\n.app-group {\n    width: 60%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: center;\n}\n\n.phone-img {\n    background: url(\"https://s.zigbang.com/v1/web/main/downLoad_phone.png\") 109px 0px / contain no-repeat;\n    width: 370px;\n    height: 266px;\n}\n\n.download-area {\n    width: 520px;\n    display: flex;\n    flex-direction: column;\n}\n\n.download-title {\n    height: 70%;\n    font-size: 1.2rem;\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n}\n\n.download-button-area {\n    height: 30%;\n    display: flex;\n}\n\n.download {\n    width: 190px;\n    height: 52px;\n    margin-right: 20px;\n    background-size: contain;\n}\n\n.google-play {\n    background-image: url(https://s.zigbang.com/legacy/images/v2/main/download_android.png);\n}\n\n.apply-store {\n    background-image: url(https://s.zigbang.com/legacy/images/v2/main/download_iOS.png);\n}\n\n.bg-font-gray {\n    background-color: #f6f6f6;\n    color: #666666;\n}\n\n.board-page {\n    width: 66%;\n    min-height: 600px;\n    border: 1px solid #d9d3c8;\n    border-radius: 3px;\n    background-color: white;\n    margin: 23px auto 50px;\n    display: flex;\n    flex-direction: column;\n    padding: 0 15px;\n}\n\n.board-page h2 {\n    display: block;\n    width: 100%;\n    font-size: 1.1rem;\n    font-weight: bold;\n    border-bottom: 2px solid black;\n    padding: 30px 0 15px;\n}\n\n.board-page ul {\n    width: 100%;\n}\n\n.board-page ul li {\n    display: flex;\n    justify-content: space-between;\n    padding: 15px 5px;\n    border-bottom: 1px dotted #999999;\n}\n\n.board-page-subject {\n    font-size: 0.9rem;\n    cursor: pointer;\n}\n\n.board-page-date {\n    font-size: 0.8rem;\n}\n\n.roadmap-search-area {\n    background-color: white;\n    position: fixed;\n    top: 100px;\n    left: 20px;\n    display: flex;\n    z-index: 100;\n    padding: 10px;\n    border: 1px solid#999999;\n    border-radius: 3px;\n}\n\n.roadmap-search-area input[type='text'] {\n    width: 350px;\n    height: 30px;\n    border: 1px solid rgb(250, 136, 11);\n    border-radius: 3px 0 0 3px;\n}\n\n.roadmap-search-button-area {\n    background-color: rgb(250, 136, 11);\n    border-radius: 0 3px 3px 0;\n}",""]);const s=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var a="",t=void 0!==e[5];return e[4]&&(a+="@supports (".concat(e[4],") {")),e[2]&&(a+="@media ".concat(e[2]," {")),t&&(a+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),a+=n(e),t&&(a+="}"),e[2]&&(a+="}"),e[4]&&(a+="}"),a})).join("")},e.i=function(n,a,t,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(t)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(r[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);t&&r[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),a&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=a):l[2]=a),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function a(n){for(var a=-1,t=0;t<e.length;t++)if(e[t].identifier===n){a=t;break}return a}function t(n,t){for(var o={},r=[],s=0;s<n.length;s++){var d=n[s],c=t.base?d[0]+t.base:d[0],l=o[c]||0,p="".concat(c," ").concat(l);o[c]=l+1;var g=a(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==g)e[g].references++,e[g].updater(u);else{var h=i(u,t);t.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}r.push(p)}return r}function i(n,e){var a=e.domAPI(e);return a.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;a.update(n=e)}else a.remove()}}n.exports=function(n,i){var o=t(n=n||[],i=i||{});return function(n){n=n||[];for(var r=0;r<o.length;r++){var s=a(o[r]);e[s].references--}for(var d=t(n,i),c=0;c<o.length;c++){var l=a(o[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=d}}},569:n=>{var e={};n.exports=function(n,a){var t=function(n){if(void 0===e[n]){var a=document.querySelector(n);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(n){a=null}e[n]=a}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(a)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,a)=>{n.exports=function(n){var e=a.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(a){!function(n,e,a){var t="";a.supports&&(t+="@supports (".concat(a.supports,") {")),a.media&&(t+="@media ".concat(a.media," {"));var i=void 0!==a.layer;i&&(t+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),t+=a.css,i&&(t+="}"),a.media&&(t+="}"),a.supports&&(t+="}");var o=a.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,a)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function a(t){var i=e[t];if(void 0!==i)return i.exports;var o=e[t]={id:t,exports:{}};return n[t](o,o.exports,a),o.exports}a.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return a.d(e,{a:e}),e},a.d=(n,e)=>{for(var t in e)a.o(e,t)&&!a.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},a.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=function(n,e){e&&n&&(e.innerHTML=n())};var e=function(){var n=new kakao.maps.InfoWindow({zIndex:1}),e=document.getElementById("roadmap"),a={center:new kakao.maps.LatLng(37.566826,126.9786567),level:3},t=new kakao.maps.Map(e,a);function i(e){var a=new kakao.maps.Marker({map:t,position:new kakao.maps.LatLng(e.y,e.x)});kakao.maps.event.addListener(a,"click",(function(){n.setContent('<div style="padding:5px;font-size:12px;">'+e.place_name+"</div>"),n.open(t,a)}))}(new kakao.maps.services.Places).keywordSearch("이태원 맛집",(function(n,e,a){if(e===kakao.maps.services.Status.OK){for(var o=new kakao.maps.LatLngBounds,r=0;r<n.length;r++)i(n[r]),o.extend(new kakao.maps.LatLng(n[r].y,n[r].x));t.setBounds(o)}}))};const t=function(){return"\n        ".concat('\n        <div class="fixed">\n        <header class="header">\n            <div class="left-header">\n                <div class="logo-wrap">\n                    <img class="logo" src="https://s.zigbang.com/v1/web/common/new/zigbang_logo.png" alt="직방">\n                </div>\n                <div class="category">\n                    <ul class="category-container">\n                        <li class="move-category" id="apt">\n                            <p>아파트</p>\n                            <span>매매/전월세/신축분양</span>\n                        </li>\n                        <li class="move-category" id="two-room">\n                            <p>빌라, 투룸+</p>\n                            <span>신축분양/매매/전월세</span>\n                        </li>\n                        <li class="move-category" id="one-room">\n                            <p>원룸</p>\n                            <span>전월세</span>\n                        </li>\n                        <li class="move-category" id="officetel">\n                            <p>오피스텔</p>\n                            <span>도시형생활주택/전월세</span>\n                        </li>\n                        <li class="move-category" id="office">\n                            <p>창업/사무실</p>\n                            <span>임대/매매</span>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class="right-header">\n                <button class="move-sign-btn">로그인 및 회원가입</button>\n                <div class="move-marketing-area">\n                    <div class="move-marketing-text">중개사무소 가입<br/>및 광고문의</div>\n                    <div class="right-arrow">></div>\n                </div>\n            </div>\n        </header>\n    </div>\n    ','\n        <div class="container">\n            <div class="roadmap-search-area">\n                <input type="text" id="search-keyword" placeholder="아파트, 지역, 지하철역, 학교 검색" />\n                <div class="roadmap-search-button-area">\n                    <img src="https://s.zigbang.com/v1/web/main/ic_search.png" alt="찾아보기" class="search-button-img" />\n                </div>\n            </div>\n            <div id="roadmap" style="width:100%;height:690px;"></div>\n        </div>\n    ')};var i=function(a){document.querySelectorAll(".category-container li").forEach((function(a){return a.addEventListener("click",(function(a){var i=a.target;if(i){var o=i.closest("li");o&&(o.id,n(t,document.querySelector("#app")),e())}}))}))},o=a(379),r=a.n(o),s=a(795),d=a.n(s),c=a(569),l=a.n(c),p=a(565),g=a.n(p),u=a(216),h=a.n(u),m=a(589),f=a.n(m),v=a(524),x={};x.styleTagTransform=f(),x.setAttributes=g(),x.insert=l().bind(null,"head"),x.domAPI=d(),x.insertStyleElement=h(),r()(v.Z,x),v.Z&&v.Z.locals&&v.Z.locals,n((function(){return"\n        ".concat('\n        <div class="fixed">\n        <header class="header">\n            <div class="left-header">\n                <div class="logo-wrap">\n                    <img class="logo" src="https://s.zigbang.com/v1/web/common/new/zigbang_logo.png" alt="직방">\n                </div>\n                <div class="category">\n                    <ul class="category-container">\n                        <li class="move-category" id="apt">\n                            <p>아파트</p>\n                            <span>매매/전월세/신축분양</span>\n                        </li>\n                        <li class="move-category" id="two-room">\n                            <p>빌라, 투룸+</p>\n                            <span>신축분양/매매/전월세</span>\n                        </li>\n                        <li class="move-category" id="one-room">\n                            <p>원룸</p>\n                            <span>전월세</span>\n                        </li>\n                        <li class="move-category" id="officetel">\n                            <p>오피스텔</p>\n                            <span>도시형생활주택/전월세</span>\n                        </li>\n                        <li class="move-category" id="office">\n                            <p>창업/사무실</p>\n                            <span>임대/매매</span>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class="right-header">\n                <button class="move-sign-btn">로그인 및 회원가입</button>\n                <div class="move-marketing-area">\n                    <div class="move-marketing-text">중개사무소 가입<br/>및 광고문의</div>\n                    <div class="right-arrow">></div>\n                </div>\n            </div>\n        </header>\n    </div>\n    ',"\n        ").concat('\n        <div class="container">\n        <section class="banner-area">\n            <div class="comment-area">\n                <div class="comment">어떤 집을 찾고 계세요?</div>\n            </div>\n            <div class="search-form">\n                <div class="search-category-area">\n                    <ul class="search-category">\n                        <li id="apt" class="active">아파트</li>\n                        <li id="two-room">빌라,투룸+</li>\n                        <li id="one-room">원룸</li>\n                        <li id="officetel">오피스텔</li>\n                        <li id="officer">창업/사무실</li>\n                    </ul>\n                </div>\n                <div class="search-area">\n                    <input type="text" id="search-text" placeholder="원하시는 지역명, 지하철역, 단지명(아파트명)을 입력해주세요" />\n                    <div class="search-button-area">\n                        <img src="https://s.zigbang.com/v1/web/main/ic_search.png" alt="찾아보기" class="search-button-img" />\n                    </div>\n                </div>\n            </div>\n        </section>\n        <section class="board-area">\n            <div class="board-group">\n                <div class="board-item">\n                    <div class="board-title">\n                        <h2>소개할게요</h2>\n                    </div>\n                    <div class="introduce">\n                        <img alt="" draggable="false" src="https://s.zigbang.com/wwwbanner/imgs/www-banner9.png">\n                    </div>\n                </div>\n                <div class="board-item">\n                    <div class="board-title">\n                        <h2>뉴스</h2>\n                        <button class="news-more-btn">더보기</button>\n                    </div>\n                    <ul class="grid news-grid">\n                        <li>브랜드 가전을 고르는 이유</li>\n                        <li>브랜드 가전을 고르는 이유</li>\n                        <li>브랜드 가전을 고르는 이유</li>\n                        <li>브랜드 가전을 고르는 이유</li>\n                        <li>브랜드 가전을 고르는 이유</li>\n                    </ul>\n                </div>\n                <div class="board-item">\n                    <div class="board-title">\n                        <h2>공지사항</h2>\n                        <button class="notice-more-btn">더보기</button>\n                    </div>\n                    <ul class="grid notice-grid">\n                        <li>[공지] 직방 개인정보처리방침(2021/02/11) 개정 안내</li>\n                        <li>[공지] 직방 개인정보처리방침(2021/02/11) 개정 안내</li>\n                        <li>[공지] 직방 개인정보처리방침(2021/02/11) 개정 안내</li>\n                        <li>[공지] 직방 개인정보처리방침(2021/02/11) 개정 안내</li>\n                        <li>[공지] 직방 개인정보처리방침(2021/02/11) 개정 안내</li>\n                    </ul>\n                </div>\n            </div>\n        </section>\n        <section class="app-area">\n            <div class="app-group">\n                <div class="phone-img"></div>\n                <div class="download-area">\n                    <div class="download-title">\n                        직방앱을 다운받으세요!\n                    </div>\n                    <div class="download-button-area">\n                        <div class="google-play download"></div>\n                        <div class="apply-store download"></div>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </div>\n    ',"\n    ")}),document.querySelector("#app")),i(),document.addEventListener("click",(function(n){n.target}))})()})();