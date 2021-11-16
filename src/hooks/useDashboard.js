import {getBoards, renderBoard} from "./useBoard.js";

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

    return {
        bindBoardButton
    };
};

export const { bindBoardButton } = useDashboard();