import {render} from "./util/Utils.js";
import App from "./component/App.js";
import {moveMapPage} from "./hooks/useHeader.js";
import "../assets/css/style.css";
import {handleClickBoard, appendBoard, handleClickCategory} from "./hooks/useDashboard.js";

/**
 * 최초 페이지 초기화 함수
 */
const init = () => {
    // App Component 랜더링
    render(App, document.querySelector('#app'));
    // Header item 클릭 시 RoadMap Component 랜더링 이벤트 설정
    moveMapPage();
    // 게시판 이동 버튼 이벤트 설정
    handleClickBoard();
    // 검색 카테고리 선택 이벤트 설정
    handleClickCategory();
    // 게시판 상위 5개 데이터 추가
    appendBoard();
};

init();