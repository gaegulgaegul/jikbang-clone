import {render} from "./util/Utils.js";
import App from "./component/App.js";
import {moveMapPage} from "./hooks/useHeader.js";
import "../assets/css/style.css";
import {appendBoard, bindBoardButton} from "./hooks/useDashboard.js";

// App Component 랜더링
render(App, document.querySelector('#app'));
// Header item 클릭 시 RoadMap Component 랜더링 이벤트 설정
moveMapPage();
// 게시판 이동 버튼 이벤트 설정
bindBoardButton();
// 게시판 상위 5개 데이터 추가
appendBoard();