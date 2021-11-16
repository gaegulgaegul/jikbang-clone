import {getBoards, getBoardsTop5, renderBoard} from "./useBoard.js";
import {appendHtml} from "../util/Utils.js";

/**
 * Dashboard Component 관리 hooks
 * @returns {{appendBoard: ((function(): Promise<void>)|*), bindBoardButton: bindBoardButton}}
 */
const useDashboard = () => {

    /**
     * 게시판 이동 버튼 이벤트 추가
     */
    const bindBoardButton = () => {
        document.querySelector('.news-more-btn')
            .addEventListener('click', async (event) => {
                const newsItems = await getBoards('news');
                if (newsItems.length === 0) return;

                renderBoard('뉴스', newsItems);
            });
        document.querySelector('.notice-more-btn')
            .addEventListener('click', async (event) => {
                const noticeItems = await getBoards('notice');
                if (noticeItems.length === 0) return;

                renderBoard('공지사항', noticeItems);
            });
    };

    /**
     * 대시보드 상위 5개 데이터 추가
     * @returns {Promise<void>}
     */
    const appendBoard = async () => {
        // 뉴스 그리드 선택
        const newsGrid = document.querySelector('.news-grid');
        // 뉴스 상위 5개 데이터 조회
        const newsItems = await getBoardsTop5('news');
        // 태그 변환
        const newsTags = newsItems.map(item => `<li>${item.subject}</li>`);
        // 변환된 뉴스 태그 추가
        appendHtml(newsGrid, newsTags);

        // 공지사항 그리드 선택
        const noticeGrid = document.querySelector('.notice-grid');
        // 공지사항 상위 5개 데이터 조회
        const noticeItems = await getBoardsTop5('notice');
        // 태그 변환
        const noticeTags = noticeItems.map(item => `<li>${item.subject}</li>`);
        // 변환된 공지사항 태그 추가
        appendHtml(noticeGrid, noticeTags);
    }

    return {
        bindBoardButton,
        appendBoard
    };
};

export const { bindBoardButton, appendBoard } = useDashboard();