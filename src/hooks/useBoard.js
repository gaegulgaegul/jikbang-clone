import {findAll, findAllOrderBy, findAllOrderByLimit} from "../plugins/firebase.config.js";
import Board from "../component/Board.js";
import {render} from "../util/Utils.js";
import {moveMainPage, moveMapPage} from "./useHeader.js";

/**
 * 게시판 Component 관리 hooks
 * @returns {{getBoardsTop5: (function(*=): Promise<*[]>), renderBoard: renderBoard, getBoards: (function(*=): Promise<*[]>)}}
 */
const useBoard = () => {

    /**
     * 게시판 데이터 리스트 조회
     * @param type
     * @returns {Promise<*[]>}
     */
    const getBoards = async (type) => {
        try {
            const querySnapshot = await findAllOrderBy(type, 'registerDate', 'desc');
            const results = [];
            querySnapshot.forEach((doc) => results.push(doc.data()));
            return results;
        } catch (e) {
            console.log('error {} => ', e);
            return [];
        }
    };

    /**
     * 게시판 데이터 리스트 상위 5개 조회
     * @param type
     * @returns {Promise<*[]>}
     */
    const getBoardsTop5 = async (type) => {
        try {
            const querySnapshot = await findAllOrderByLimit(type, 'registerDate', 'desc', 5);
            const results = [];
            querySnapshot.forEach((doc) => results.push(doc.data()));
            return results;
        } catch (e) {
            console.log('error {} => ', e);
            return [];
        }
    };

    /**
     * 게시판 Component 랜더링
     * @param title
     * @param items
     */
    const renderBoard = (title, items) => {
        const board = Board(title, items);
        render(board, document.querySelector('#app'));
        moveMapPage();
        moveMainPage();
    };

    return {
        getBoards,
        getBoardsTop5,
        renderBoard
    };
}

export const { getBoards, getBoardsTop5, renderBoard } = useBoard();