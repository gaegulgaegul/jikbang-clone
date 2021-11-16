import {render} from "../util/Utils.js";
import {renderMap} from "./useRoadMap.js";
import RoadMap from "../component/RoadMap.js";
import App from "../component/App";
import {bindBoardButton} from "./useDashboard";

/**
 * Header Component 관리 Hooks
 * @returns {{moveMapPage: moveMapPage}}
 */
const useHeader = () => {

    /**
     * Header item 클릭 시 roadmap Component 랜더링 이벤트 설정
     * @param event
     */
    const moveMapPage = (event) => {
        document.querySelectorAll('.category-container li')
            .forEach(element => element.addEventListener('click', ({ target }) => {
                if (!target) return;

                const item = target.closest('li');
                if (!item) return;
                const id = item.id;
                render(RoadMap, document.querySelector('#app'));
                renderMap();
            }))

    };

    /**
     * 로고 클릭 시 메인 Component 랜더링 이벤트 설정
     */
    const moveMainPage = () => {
        document.querySelector('.logo')
            .addEventListener('click', () => {
                // App Component 랜더링
                render(App, document.querySelector('#app'));
                // Header item 클릭 시 RoadMap Component 랜더링 이벤트 설정
                moveMapPage();
                // 게시판 이동 버튼 이벤트 설정
                bindBoardButton();
            });
    };

    return {
        moveMapPage,
        moveMainPage
    };
};

export const { moveMapPage, moveMainPage } = useHeader();