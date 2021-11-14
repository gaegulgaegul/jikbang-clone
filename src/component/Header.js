const Header = () => {
    return `
        <div class="fixed">
        <header class="header">
            <div class="left-header">
                <div class="logo-wrap">
                    <img class="logo" src="https://s.zigbang.com/v1/web/common/new/zigbang_logo.png" alt="직방">
                </div>
                <div class="category">
                    <ul class="category-container">
                        <li class="move-category" id="apt">
                            <p>아파트</p>
                            <span>매매/전월세/신축분양</span>
                        </li>
                        <li class="move-category" id="two-room">
                            <p>빌라, 투룸+</p>
                            <span>신축분양/매매/전월세</span>
                        </li>
                        <li class="move-category" id="one-room">
                            <p>원룸</p>
                            <span>전월세</span>
                        </li>
                        <li class="move-category" id="officetel">
                            <p>오피스텔</p>
                            <span>도시형생활주택/전월세</span>
                        </li>
                        <li class="move-category" id="office">
                            <p>창업/사무실</p>
                            <span>임대/매매</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="right-header">
                <button class="move-sign-btn">로그인 및 회원가입</button>
                <div class="move-marketing-area">
                    <div class="move-marketing-text">중개사무소 가입<br/>및 광고문의</div>
                    <div class="right-arrow">></div>
                </div>
            </div>
        </header>
    </div>
    `;
};

export default Header;