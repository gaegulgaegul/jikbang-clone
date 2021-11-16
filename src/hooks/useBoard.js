import {findAll} from "../plugins/firebase.config.js";
import Board from "../component/Board.js";
import {render} from "../util/Utils.js";
import {moveMainPage, moveMapPage} from "./useHeader.js";

const useBoard = () => {

    const getBoards = async (type) => {
        try {
            const querySnapshot = await findAll(type);
            const results = [];
            querySnapshot.forEach((doc) => results.push(doc.data()));
            return results;
        } catch (e) {
            console.log('error {} => ', e);
            return [];
        }
    };

    const renderBoard = (title, items) => {
        const board = Board(title, items);
        render(board, document.querySelector('#app'));
        moveMapPage();
        moveMainPage();
    };

    return {
        getBoards,
        renderBoard
    };
}

export const { getBoards, renderBoard } = useBoard();