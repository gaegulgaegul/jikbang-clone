/**
 * Dashboard Component
 * @returns {string}
 * @constructor
 */
const Dashboard = () => {
    return `
        <div class="container">
        <section class="banner-area">
            <div class="comment-area">
                <div class="comment">어떤 집을 찾고 계세요?</div>
            </div>
            <div class="search-form">
                <div class="search-category-area">
                    <ul class="search-category">
                        <li id="apt" class="active">아파트</li>
                        <li id="two-room">빌라,투룸+</li>
                        <li id="one-room">원룸</li>
                        <li id="officetel">오피스텔</li>
                        <li id="officer">창업/사무실</li>
                    </ul>
                </div>
                <div class="search-area">
                    <input type="text" id="search-text" placeholder="원하시는 지역명, 지하철역, 단지명(아파트명)을 입력해주세요" />
                    <div class="search-button-area">
                        <img src="https://s.zigbang.com/v1/web/main/ic_search.png" alt="찾아보기" class="search-button-img" />
                    </div>
                </div>
            </div>
        </section>
        <section class="board-area">
            <div class="board-group">
                <div class="board-item">
                    <div class="board-title">
                        <h2>소개할게요</h2>
                    </div>
                    <div class="introduce">
                        <img alt="" draggable="false" src="https://s.zigbang.com/wwwbanner/imgs/www-banner9.png">
                    </div>
                </div>
                <div class="board-item">
                    <div class="board-title">
                        <h2>뉴스</h2>
                        <button class="news-more-btn">더보기</button>
                    </div>
                    <ul class="grid news-grid"></ul>
                </div>
                <div class="board-item">
                    <div class="board-title">
                        <h2>공지사항</h2>
                        <button class="notice-more-btn">더보기</button>
                    </div>
                    <ul class="grid notice-grid"></ul>
                </div>
            </div>
        </section>
        <section class="app-area">
            <div class="app-group">
                <div class="phone-img"></div>
                <div class="download-area">
                    <div class="download-title">
                        직방앱을 다운받으세요!
                    </div>
                    <div class="download-button-area">
                        <div class="google-play download"></div>
                        <div class="apply-store download"></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    `;
};

export default Dashboard;