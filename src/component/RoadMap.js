import Header from "./Header.js";

/**
 * 지도 영역 관리 Component
 * @returns {string}
 * @constructor
 */
const RoadMap = () => {
    return `
        ${Header()}
        <div class="container">
            <div class="roadmap-search-area">
                <input type="text" id="search-keyword" placeholder="아파트, 지역, 지하철역, 학교 검색" />
                <div class="roadmap-search-button-area">
                    <img src="https://s.zigbang.com/v1/web/main/ic_search.png" alt="찾아보기" class="search-button-img" />
                </div>
            </div>
            <div id="roadmap" style="width:100%;height:690px;"></div>
        </div>
    `;
};

export default RoadMap;