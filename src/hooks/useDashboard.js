import {getBoards} from "./useBoard.js";

const useDashboard = () => {

    const bindBoardButton = () => {
        document.querySelector('.news-more-btn')
            .addEventListener('click', (event) => {
                getBoards();
            });

    };

    return {
        bindBoardButton
    };
};

export const { bindBoardButton } = useDashboard();